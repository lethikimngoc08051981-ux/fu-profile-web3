import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ProfileTabs = () => {
  return (
    <Tabs defaultValue="posts" className="w-full">
      <TabsList className="w-full justify-start rounded-xl bg-card p-1">
        <TabsTrigger value="posts" className="rounded-lg">
          Bài viết
        </TabsTrigger>
        <TabsTrigger value="videos" className="rounded-lg">
          Video
        </TabsTrigger>
        <TabsTrigger value="livestream" className="rounded-lg">
          Livestream
        </TabsTrigger>
        <TabsTrigger value="mall" className="rounded-lg">
          F12 Mall
        </TabsTrigger>
        <TabsTrigger value="portal" className="rounded-lg">
          VIP Portal
        </TabsTrigger>
        <TabsTrigger value="compare" className="rounded-lg">
          So sánh
        </TabsTrigger>
        <TabsTrigger value="copy" className="rounded-lg">
          Sao chép...
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
