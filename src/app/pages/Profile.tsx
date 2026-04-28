import { useState } from "react";
import { Settings, MapPin, Users, Star, Award, Lock } from "lucide-react";

export function Profile() {
  const [activeTab, setActiveTab] = useState<"posts" | "memories" | "guides">("posts");

  const stats = [
    { label: "Memories", value: "142", icon: MapPin },
    { label: "Followers", value: "1.2K", icon: Users },
    { label: "Points", value: "4,580", icon: Star },
  ];

  const mockPosts = [
    { id: 1, image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400&q=80", likes: 234 },
    { id: 2, image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=400&q=80", likes: 189 },
    { id: 3, image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=400&q=80", likes: 567 },
    { id: 4, image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=400&q=80", likes: 432 },
  ];

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="bg-gradient-to-b from-secondary to-secondary/90 text-white px-6 pt-6 pb-12 rounded-b-3xl shadow-lg">
        <div className="flex justify-end mb-6">
          <button
            onClick={() => window.location.href = "/settings"}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-primary p-1 mb-4">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-3xl">
              👤
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-1">Ahmed Hassan</h2>
          <p className="text-white/80 text-sm mb-1">Tour Guide • Cairo</p>
          <div className="flex items-center gap-1 text-accent">
            <Award className="w-4 h-4" />
            <span className="text-sm">Premium Member</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <Icon className="w-5 h-5 mx-auto mb-2 text-accent" />
                <div className="font-bold text-lg">{stat.value}</div>
                <div className="text-xs text-white/70">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-6 -mt-6">
        <div className="bg-card rounded-2xl shadow-lg p-4 mb-6">
          <p className="text-sm text-muted-foreground">
            Passionate about Egyptian history and culture. Love showing tourists the hidden gems of Cairo! 🏛️
          </p>
        </div>

        <div className="flex gap-2 mb-6">
          {[
            { id: "posts", label: "Posts" },
            { id: "memories", label: "Memories" },
            { id: "guides", label: "Tours" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex-1 py-3 rounded-xl transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-md"
                  : "bg-card text-muted-foreground hover:bg-muted"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "posts" && (
          <div className="grid grid-cols-2 gap-3">
            {mockPosts.map((post) => (
              <div key={post.id} className="relative aspect-square rounded-2xl overflow-hidden group">
                <img src={post.image} alt="Post" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "memories" && (
          <div className="text-center py-12">
            <MapPin className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">Your memories will appear here</p>
          </div>
        )}

        {activeTab === "guides" && (
          <div className="space-y-3">
            {[1, 2, 3].map((tour) => (
              <div key={tour} className="bg-card rounded-2xl p-4 shadow-sm">
                <h4 className="font-medium mb-1">Pyramids of Giza Full Day Tour</h4>
                <p className="text-sm text-muted-foreground mb-2">8 hours • $80/person</p>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span>4.9 (45 reviews)</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
