import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Sparkles } from "lucide-react";

interface PostCardProps {
  author: string;
  time: string;
  content: string;
  image?: string;
  likes?: number;
  comments?: number;
}

export const PostCard = ({ author, time, content, image, likes = 0, comments = 0 }: PostCardProps) => {
  return (
    <Card className="shadow-lg hover:shadow-cosmic transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${author}`} />
            <AvatarFallback>{author[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">{time}</p>
          </div>
          <Sparkles className="h-5 w-5 text-cosmic-gold animate-sparkle" />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-foreground">{content}</p>
        {image && (
          <div className="rounded-xl overflow-hidden">
            <img
              src={image}
              alt="Post content"
              className="w-full h-auto"
            />
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex items-center gap-4 border-t pt-4">
        <Button variant="ghost" size="sm" className="gap-2 hover:text-cosmic-pink">
          <Heart className="h-4 w-4" />
          {likes > 0 && <span>{likes}</span>}
        </Button>
        <Button variant="ghost" size="sm" className="gap-2 hover:text-cosmic-blue">
          <MessageCircle className="h-4 w-4" />
          {comments > 0 && <span>{comments}</span>}
        </Button>
        <Button variant="ghost" size="sm" className="gap-2 hover:text-cosmic-purple">
          <Share2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};
