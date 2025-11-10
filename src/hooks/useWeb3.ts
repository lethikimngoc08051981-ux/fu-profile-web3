import { useState, useEffect } from 'react';
import { BrowserProvider } from 'ethers';

interface Web3State {
  account: string | null;
  isConnected: boolean;
  provider: BrowserProvider | null;
}

export const useWeb3 = () => {
  const [web3State, setWeb3State] = useState<Web3State>({
    account: null,
    isConnected: false,
    provider: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connectWallet = async () => {
    if (!window.ethereum) {
      setError('MetaMask is not installed. Please install MetaMask to continue.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const provider = new BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      
      setWeb3State({
        account: accounts[0],
        isConnected: true,
        provider,
      });
    } catch (err: any) {
      setError(err.message || 'Failed to connect wallet');
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectWallet = () => {
    setWeb3State({
      account: null,
      isConnected: false,
      provider: null,
    });
  };

  useEffect(() => {
    if (!window.ethereum) return;

    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        disconnectWallet();
      } else {
        setWeb3State((prev) => ({
          ...prev,
          account: accounts[0],
        }));
      }
    };

    window.ethereum.on('accountsChanged', handleAccountsChanged);

    return () => {
      window.ethereum?.removeListener('accountsChanged', handleAccountsChanged);
    };
  }, []);

  return {
    ...web3State,
    connectWallet,
    disconnectWallet,
    isLoading,
    error,
  };
};

declare global {
  interface Window {
    ethereum?: any;
  }
}
