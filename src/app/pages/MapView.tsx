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
  { id: 1, user: "Sarah Mohamed", avatar: "👩", image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400&q=80", likes: 234, comments: 12, location: "Great Pyramid", caption: "Absolutely stunning view!" },
  { id: 2, user: "Omar Ahmed", avatar: "👨", image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=400&q=80", likes: 189, comments: 8, location: "Cairo Tower", caption: "Best sunset ever" },
  { id: 3, user: "Lisa Johnson", avatar: "👱‍♀️", image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=400&q=80", likes: 567, comments: 23, location: "Egyptian Museum", caption: "Amazing history!" },
  { id: 4, user: "Ahmed Hassan", avatar: "👨‍🦱", image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=400&q=80", likes: 421, comments: 19, location: "Karnak Temple", caption: "Breathtaking architecture" },
  { id: 5, user: "Fatima Ali", avatar: "👩", image: "https://images.unsplash.com/photo-1549471832-e8b5b0e9c21e?w=400&q=80", likes: 356, comments: 14, location: "Khan el-Khalili", caption: "Beautiful bazaar experience" },
  { id: 6, user: "Mike Chen", avatar: "👨‍💼", image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400&q=80", likes: 298, comments: 16, location: "Giza Plateau", caption: "Incredible ancient wonders" },
  { id: 7, user: "Yasmin Kamal", avatar: "👩", image: "https://images.unsplash.com/photo-1592240549908-0a0efa9c7c90?w=400&q=80", likes: 445, comments: 21, location: "Alexandria Beach", caption: "Perfect Mediterranean day" },
  { id: 8, user: "Hassan Ali", avatar: "👨", image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=400&q=80", likes: 312, comments: 13, location: "Nile Cruise", caption: "Magical river journey" },
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
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-[#e5e3df]">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#d4d2ce" strokeWidth="0.5"/>
            </pattern>
          </defs>

          <rect width="400" height="600" fill="url(#grid)"/>

          <path d="M 120 50 Q 150 80 180 120 T 220 200 L 230 250 Q 240 300 250 350 L 260 450"
                fill="none" stroke="#7eb4e2" strokeWidth="4" opacity="0.6"/>

          <g className="roads">
            <line x1="50" y1="150" x2="350" y2="180" stroke="#f5a623" strokeWidth="2" opacity="0.7"/>
            <line x1="100" y1="100" x2="280" y2="250" stroke="#f5a623" strokeWidth="2" opacity="0.7"/>
            <line x1="150" y1="200" x2="300" y2="200" stroke="#f5a623" strokeWidth="2" opacity="0.7"/>
            <line x1="120" y1="300" x2="280" y2="320" stroke="#f5a623" strokeWidth="1.5" opacity="0.6"/>
          </g>

          <text x="160" y="170" fontSize="10" fill="#2d3748" fontWeight="500">Cairo</text>
          <circle cx="155" cy="165" r="3" fill="#ef4444"/>

          <text x="125" y="195" fontSize="9" fill="#2d3748" fontWeight="500">Giza</text>
          <circle cx="120" cy="190" r="2.5" fill="#ef4444"/>

          <text x="80" y="80" fontSize="9" fill="#2d3748" fontWeight="500">Alexandria</text>
          <circle cx="75" cy="75" r="2.5" fill="#ef4444"/>

          <text x="190" y="280" fontSize="8" fill="#718096">Luxor</text>
          <circle cx="185" cy="275" r="2" fill="#f59e0b"/>

          <text x="210" y="380" fontSize="8" fill="#718096">Aswan</text>
          <circle cx="205" cy="375" r="2" fill="#f59e0b"/>

          <text x="330" y="200" fontSize="8" fill="#718096">Hurghada</text>
          <circle cx="325" cy="195" r="2" fill="#f59e0b"/>

          <text x="230" y="90" fontSize="7" fill="#4299e1" fontStyle="italic">Mediterranean Sea</text>
          <text x="180" y="430" fontSize="7" fill="#4299e1" fontStyle="italic">Nile River</text>

          <path d="M 300 120 L 340 140 L 360 200 L 350 280"
                fill="none" stroke="#cbd5e0" strokeWidth="1" strokeDasharray="2,2"/>
        </svg>

        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg border border-border">
          <p className="text-xs font-medium text-secondary flex items-center gap-1">
            <span className="text-accent">📍</span> Egypt
          </p>
        </div>

        <div className="absolute bottom-32 right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-2 flex flex-col gap-2">
          <button className="w-10 h-10 rounded-lg bg-card hover:bg-muted flex items-center justify-center transition-colors border border-border">
            <span className="text-lg font-bold text-foreground">+</span>
          </button>
          <button className="w-10 h-10 rounded-lg bg-card hover:bg-muted flex items-center justify-center transition-colors border border-border">
            <span className="text-lg font-bold text-foreground">−</span>
          </button>
        </div>
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
                to={`/home/guide/1`}
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
            <div className="overflow-y-auto p-4 space-y-4 max-h-[calc(70vh-80px)]">
              {mockMemories.map((memory) => (
                <div key={memory.id} className="bg-muted rounded-2xl overflow-hidden">
                  <div className="p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl">
                      {memory.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{memory.user}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {memory.location}
                      </div>
                    </div>
                  </div>
                  <img src={memory.image} alt="Memory" className="w-full h-48 object-cover" />
                  <div className="p-3">
                    <p className="text-sm mb-2">{memory.caption}</p>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 text-muted-foreground hover:text-destructive transition-colors">
                        <Heart className="w-4 h-4" />
                        <span className="text-xs">{memory.likes}</span>
                      </button>
                      <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-xs">{memory.comments}</span>
                      </button>
                      <button className="ml-auto text-muted-foreground hover:text-accent transition-colors">
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-center py-4">
                <Link to={`/home/place/${selected.id}`} className="text-sm text-primary hover:text-accent transition-colors">
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
