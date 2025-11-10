import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Calendar, Star } from "lucide-react";

export const ProfileSidebar = () => {
  return (
    <div className="space-y-6">
      {/* About Card */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Giới thiệu</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3 text-sm">
            <Star className="h-4 w-4 text-cosmic-gold mt-1" />
            <div>
              <p className="font-medium">Tất giàu thì mua nhà cho mình hơi làm</p>
              <p className="text-muted-foreground">Trích dẫn yêu thích</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 text-sm">
            <Phone className="h-4 w-4 text-cosmic-purple mt-1" />
            <div>
              <p className="font-medium">0906.000.000</p>
              <p className="text-muted-foreground">Số điện thoại</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 text-sm">
            <Mail className="h-4 w-4 text-cosmic-blue mt-1" />
            <div>
              <p className="font-medium">camly@fuprofile.com</p>
              <p className="text-muted-foreground">Email</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="h-4 w-4 text-cosmic-pink mt-1" />
            <div>
              <p className="font-medium">Hà Nội, Việt Nam</p>
              <p className="text-muted-foreground">Sống tại</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 text-sm">
            <Calendar className="h-4 w-4 text-cosmic-gold mt-1" />
            <div>
              <p className="font-medium">Tham gia từ 23/01/2024</p>
              <p className="text-muted-foreground">Ngày tham gia</p>
            </div>
          </div>

          <Button variant="outline" className="w-full mt-4">
            Chỉnh sửa chi tiết
          </Button>
        </CardContent>
      </Card>

      {/* Photos Card */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg flex items-center justify-between">
            Ảnh
            <Button variant="link" size="sm" className="text-cosmic-purple">
              Xem tất cả
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-lg bg-gradient-cosmic overflow-hidden"
              >
                <img
                  src={`https://api.dicebear.com/7.x/shapes/svg?seed=photo${i}`}
                  alt={`Photo ${i}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
