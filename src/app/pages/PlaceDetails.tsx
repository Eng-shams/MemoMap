import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { ArrowLeft, Star, Bookmark, Share2, Heart, MessageCircle, MapPin, Camera, Filter, TrendingUp, Users, Image as ImageIcon } from "lucide-react";

type Tab = "memories" | "guides" | "reviews" | "photos" | "nearby";

export function PlaceDetails() {
  const { placeId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("memories");
  const [activeFilter, setActiveFilter] = useState<string>("Top Rated");

  const filters = ["Top Rated", "Most Visited", "Trending", "Recent"];

  const memories = [
    { id: 1, user: "Sarah Mohamed", avatar: "👩", image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400&q=80", likes: 234, comments: 12, caption: "Absolutely breathtaking! The pyramids are even more amazing in person.", time: "2 hours ago" },
    { id: 2, user: "Omar Ahmed", avatar: "👨", image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=400&q=80", likes: 189, comments: 8, caption: "Sunset at the pyramids - a moment I'll never forget", time: "5 hours ago" },
    { id: 3, user: "Lisa Johnson", avatar: "👱‍♀️", image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=400&q=80", likes: 567, comments: 23, caption: "The history here is incredible! Thanks to my amazing guide Ahmed.", time: "1 day ago" },
  ];

  const guides = [
    { id: 1, name: "Ahmed Hassan", avatar: "👨‍🦱", rating: 4.9, tours: 142, price: 80 },
    { id: 2, name: "Fatima Ali", avatar: "👩", rating: 4.8, tours: 98, price: 75 },
  ];

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="relative h-80">
        <img
          src="https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80"
          alt="Place"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <Link
          to="/map"
          className="absolute top-6 left-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </Link>
        <div className="absolute top-6 right-6 flex gap-2">
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Bookmark className="w-5 h-5 text-white" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Share2 className="w-5 h-5 text-white" />
          </button>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-3xl font-bold text-white mb-2">Great Pyramid of Giza</h1>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-accent text-accent" />
            <span className="text-white">4.9 (2,345 memories)</span>
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="bg-card rounded-2xl p-4 shadow-sm mb-6">
          <p className="text-sm text-muted-foreground">
            The Great Pyramid of Giza is the oldest and largest of the pyramids in the Giza pyramid complex. It is the
            oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact.
          </p>
        </div>

        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {[
            { id: "memories", label: "Memories", icon: Camera },
            { id: "guides", label: "Guides", icon: Users },
            { id: "reviews", label: "Reviews", icon: Star },
            { id: "photos", label: "Photos", icon: ImageIcon },
            { id: "nearby", label: "Nearby", icon: MapPin },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-primary to-accent text-white shadow-md"
                    : "bg-card text-muted-foreground hover:bg-muted"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-all ${
                activeFilter === filter
                  ? "bg-primary/10 text-primary border border-primary"
                  : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {activeTab === "memories" && (
          <div className="space-y-4">
            {memories.map((memory) => (
              <div key={memory.id} className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-4 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl">
                    {memory.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{memory.user}</div>
                    <div className="text-xs text-muted-foreground">{memory.time}</div>
                  </div>
                  <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                    <Share2 className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
                <img src={memory.image} alt="Memory" className="w-full h-72 object-cover" />
                <div className="p-4">
                  <p className="text-sm mb-3">{memory.caption}</p>
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-destructive transition-colors">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm font-medium">{memory.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">{memory.comments}</span>
                    </button>
                    <button className="ml-auto text-muted-foreground hover:text-accent transition-colors">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "guides" && (
          <div className="space-y-3">
            {guides.map((guide) => (
              <Link
                key={guide.id}
                to={`/guide/${guide.id}`}
                className="block bg-card rounded-2xl p-4 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl">
                    {guide.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">{guide.name}</h4>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span>{guide.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{guide.tours} tours</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">${guide.price}</div>
                    <div className="text-xs text-muted-foreground">per person</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="text-center py-12">
            <Star className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">Reviews coming soon</p>
          </div>
        )}

        {activeTab === "photos" && (
          <div className="grid grid-cols-2 gap-2">
            {memories.map((memory) => (
              <div key={memory.id} className="aspect-square rounded-2xl overflow-hidden">
                <img src={memory.image} alt="Photo" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}

        {activeTab === "nearby" && (
          <div className="text-center py-12">
            <MapPin className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">Nearby places coming soon</p>
          </div>
        )}
      </div>

      <button
        onClick={() => navigate("/add-memory")}
        className="fixed bottom-32 right-6 z-40 w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
      >
        <Camera className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
