import { PostCard } from "./PostCard";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Image, Video, Smile } from "lucide-react";

export const Feed = () => {
  const posts = [
    {
      author: "Camly Duong",
      time: "2 giờ trước",
      content: "Khám phá vũ trụ kỳ diệu với những điều kỳ diệu đang chờ đợi! ✨🌌",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&auto=format&fit=crop",
      likes: 45,
      comments: 12,
    },
    {
      author: "Camly Duong",
      time: "5 giờ trước",
      content: "Cùng nhau tạo nên những khoảnh khắc đáng nhớ 💫",
      image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&auto=format&fit=crop",
      likes: 89,
      comments: 23,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Create Post Card */}
      <Card className="shadow-lg">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <Textarea
              placeholder="Bạn đang nghĩ gì?"
              className="min-h-[100px] resize-none"
            />
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Image className="h-4 w-4" />
                  Ảnh
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Video className="h-4 w-4" />
                  Video
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Smile className="h-4 w-4" />
                  Cảm xúc
                </Button>
              </div>
              <Button className="bg-gradient-cosmic hover:opacity-90">
                Đăng bài
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Posts */}
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
};
