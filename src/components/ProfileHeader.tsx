import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle, UserPlus } from "lucide-react";
import cosmicBg from "@/assets/cosmic-bg.jpg";

export const ProfileHeader = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-card shadow-cosmic">
      {/* Cover Image */}
      <div 
        className="h-64 md:h-80 bg-gradient-cosmic relative"
        style={{
          backgroundImage: `url(${cosmicBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
        
        {/* Sparkle Effects */}
        <div className="absolute top-10 left-20 h-2 w-2 rounded-full bg-cosmic-gold animate-sparkle" />
        <div className="absolute top-20 right-32 h-3 w-3 rounded-full bg-cosmic-pink animate-sparkle delay-300" />
        <div className="absolute bottom-32 left-40 h-2 w-2 rounded-full bg-cosmic-blue animate-sparkle delay-700" />
      </div>

      {/* Profile Info */}
      <div className="relative px-6 pb-6">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-6 -mt-20">
          {/* Avatar */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-gold animate-pulse blur" />
            <Avatar className="h-40 w-40 border-4 border-background relative">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=CamlyDuong" />
              <AvatarFallback>CD</AvatarFallback>
            </Avatar>
          </div>

          {/* User Info */}
          <div className="flex-1 text-center md:text-left mb-4">
            <h1 className="text-3xl font-bold text-foreground mb-1">Camly Duong</h1>
            <p className="text-muted-foreground">226 người theo dõi · 0 đang theo dõi</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-4">
            <Button className="bg-gradient-cosmic hover:opacity-90 gap-2">
              <UserPlus className="h-4 w-4" />
              Kết bạn
            </Button>
            <Button variant="outline" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              Nhắn tin
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { label: "FDP POINT", value: "17,000,000" },
            { label: "THƯỞNG LINK", value: "0" },
            { label: "FU MALL", value: "0" },
            { label: "GAN SỐ", value: "0" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
              <div className="text-xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
