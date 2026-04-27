import { Heart, MessageCircle, UserPlus, Star, Award } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "like",
    user: "Sarah Mohamed",
    action: "liked your memory at",
    target: "Great Pyramid of Giza",
    time: "2 hours ago",
    icon: Heart,
    color: "text-destructive",
  },
  {
    id: 2,
    type: "comment",
    user: "Omar Ahmed",
    action: "commented on your post",
    target: "Amazing view from Cairo Tower!",
    time: "5 hours ago",
    icon: MessageCircle,
    color: "text-primary",
  },
  {
    id: 3,
    type: "follow",
    user: "Lisa Johnson",
    action: "started following you",
    target: "",
    time: "1 day ago",
    icon: UserPlus,
    color: "text-secondary",
  },
  {
    id: 4,
    type: "review",
    user: "Mike Chen",
    action: "left a 5-star review for your tour",
    target: "Luxor Temple Tour",
    time: "2 days ago",
    icon: Star,
    color: "text-accent",
  },
  {
    id: 5,
    type: "achievement",
    user: "MemoMap",
    action: "You earned a new badge:",
    target: "Explorer Level 5",
    time: "3 days ago",
    icon: Award,
    color: "text-accent",
  },
];

export function Notifications() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-b from-secondary to-secondary/90 text-white px-6 py-6 rounded-b-3xl shadow-lg">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <p className="text-sm text-white/80 mt-1">Stay updated with your activity</p>
      </div>

      <div className="px-6 py-6">
        <div className="space-y-3">
          {notifications.map((notif) => {
            const Icon = notif.icon;
            return (
              <div
                key={notif.id}
                className="bg-card rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4">
                  <div className={`w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0 ${notif.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      <span className="font-medium text-foreground">{notif.user}</span>{" "}
                      <span className="text-muted-foreground">{notif.action}</span>{" "}
                      {notif.target && <span className="font-medium text-foreground">{notif.target}</span>}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">You're all caught up!</p>
        </div>
      </div>
    </div>
  );
}
