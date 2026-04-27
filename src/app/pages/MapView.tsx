import { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router";
import { MapPin, Navigation, Star, Bookmark, Car, X, Heart, MessageCircle, User, Plus, Filter, Locate, Camera } from "lucide-react";

const mockPlaces = [
  { id: 1, name: "Egyptian Museum", lat: 30.0478, lng: 31.2336, category: "museum", image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=600&q=80" },
  { id: 2, name: "Khan el-Khalili", lat: 30.0472, lng: 31.2622, category: "market", image: "https://images.unsplash.com/photo-1549471832-e8b5b0e9c21e?w=600&q=80" },
  { id: 3, name: "Cairo Tower", lat: 30.0444, lng: 31.2357, category: "landmark", image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&q=80" },
  { id: 4, name: "Great Pyramid of Khufu", lat: 29.9792, lng: 31.1342, category: "monument", image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=600&q=80" },
  { id: 5, name: "The Great Sphinx", lat: 29.9753, lng: 31.1376, category: "monument", image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=600&q=80" },
];

const mockMemories = [
  { id: 1, user: "Sarah M.", avatar: "👩", image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400&q=80", likes: 234, comments: 12 },
  { id: 2, user: "Omar A.", avatar: "👨", image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=400&q=80", likes: 189, comments: 8 },
];

const filters = ["Top Rated", "Most Visited", "Trending", "Nearby", "Memories", "Tour Guides"];

export function MapView() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const placeIdParam = searchParams.get("place");
  const placeNameParam = searchParams.get("name");
  const directionsParam = searchParams.get("directions");

  const [selectedPlace, setSelectedPlace] = useState<number | null>(
    placeIdParam ? parseInt(placeIdParam) : null
  );
  const [showMemories, setShowMemories] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  useEffect(() => {
    if (placeIdParam) {
      setSelectedPlace(parseInt(placeIdParam));
    }
  }, [placeIdParam]);

  const selected = mockPlaces.find((p) => p.id === selectedPlace);

  return (
    <div className="relative h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80')",
          filter: "brightness(0.95)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background/40" />
      </div>

      <div className="relative z-10 p-6">
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search places, guides, memories..."
              className="flex-1 outline-none text-foreground placeholder:text-muted-foreground"
            />
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <Filter className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>

        {showFilters && (
          <div className="bg-white rounded-2xl shadow-lg p-3 mb-4">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(activeFilter === filter ? null : filter)}
                  className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                    activeFilter === filter
                      ? "bg-gradient-to-r from-primary to-accent text-white shadow-md"
                      : "bg-muted text-foreground hover:bg-border"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="absolute right-6 top-24 flex flex-col gap-3">
          <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-muted transition-colors">
            <Locate className="w-5 h-5 text-primary" />
          </button>
          <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-muted transition-colors">
            <Navigation className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>

      {mockPlaces.map((place) => (
        <button
          key={place.id}
          onClick={() => setSelectedPlace(place.id)}
          className="absolute z-20 transform -translate-x-1/2 -translate-y-full group"
          style={{
            left: `${30 + place.id * 15}%`,
            top: `${40 + place.id * 10}%`,
          }}
        >
          <div className="relative">
            <MapPin
              className={`w-8 h-8 drop-shadow-lg transition-all ${
                selectedPlace === place.id
                  ? "text-accent scale-125"
                  : "text-destructive group-hover:text-accent group-hover:scale-110"
              }`}
              fill="currentColor"
            />
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-secondary text-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              {place.name}
            </div>
          </div>
        </button>
      ))}

      <button
        onClick={() => navigate("/add-memory")}
        className="fixed bottom-32 right-6 z-40 w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform animate-pulse"
      >
        <Plus className="w-7 h-7 text-white" />
      </button>

      {selected && !showMemories && (
        <div className="absolute bottom-20 left-0 right-0 z-30 px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-md mx-auto">
            <button
              onClick={() => setSelectedPlace(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-border transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-4">
              <h3 className="text-xl text-secondary mb-2">{placeNameParam || selected.name}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span>4.8 (1,234 memories)</span>
              </div>
            </div>

            <div className="h-32 bg-muted rounded-2xl mb-4 overflow-hidden">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-4 gap-3">
              <button
                onClick={() => setShowMemories(true)}
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-xs">Memories</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-3 rounded-xl bg-accent/10 hover:bg-accent/20 transition-colors">
                <Bookmark className="w-5 h-5 text-accent" />
                <span className="text-xs">Save</span>
              </button>
              <Link
                to={`/guide/1`}
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-secondary/10 hover:bg-secondary/20 transition-colors"
              >
                <User className="w-5 h-5 text-secondary" />
                <span className="text-xs">Guides</span>
              </Link>
              <button className="flex flex-col items-center gap-2 p-3 rounded-xl bg-muted hover:bg-border transition-colors">
                <Car className="w-5 h-5 text-foreground" />
                <span className="text-xs">Uber</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {selected && showMemories && (
        <div className="absolute bottom-20 left-0 right-0 z-30 px-6 max-h-[70vh] overflow-hidden">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md mx-auto overflow-hidden flex flex-col max-h-full">
            <div className="p-4 border-b border-border flex items-center justify-between flex-shrink-0">
              <h3 className="font-bold text-lg">Memories & Posts</h3>
              <button
                onClick={() => setShowMemories(false)}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-border transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="overflow-y-auto p-4 space-y-4">
              {mockMemories.map((memory) => (
                <div key={memory.id} className="bg-muted rounded-2xl overflow-hidden">
                  <div className="p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl">
                      {memory.avatar}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{memory.user}</div>
                      <div className="text-xs text-muted-foreground">2 hours ago</div>
                    </div>
                  </div>
                  <img src={memory.image} alt="Memory" className="w-full h-48 object-cover" />
                  <div className="p-3 flex items-center gap-4">
                    <button className="flex items-center gap-1 text-muted-foreground hover:text-destructive transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs">{memory.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-xs">{memory.comments}</span>
                    </button>
                  </div>
                </div>
              ))}
              <div className="text-center py-4">
                <Link to={`/place/${selected.id}`} className="text-sm text-primary hover:text-accent transition-colors">
                  View all memories →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
