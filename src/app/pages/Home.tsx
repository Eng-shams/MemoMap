import { Link } from "react-router";
import { Bell, MessageCircle, Search } from "lucide-react";

const governorates = [
  {
    name: "Cairo",
    image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=80",
    description: "The bustling capital with ancient wonders",
    places: 45,
    guides: 230,
  },
  {
    name: "Giza",
    image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80",
    description: "Home to the iconic pyramids",
    places: 12,
    guides: 180,
  },
  {
    name: "Alexandria",
    image: "https://images.unsplash.com/photo-1592240549908-0a0efa9c7c90?w=800&q=80",
    description: "Mediterranean pearl of Egypt",
    places: 32,
    guides: 95,
  },
  {
    name: "Luxor",
    image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80",
    description: "Valley of the Kings",
    places: 28,
    guides: 150,
  },
  {
    name: "Aswan",
    image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=80",
    description: "Nubian culture and the Nile",
    places: 18,
    guides: 67,
  },
  {
    name: "Hurghada",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    description: "Red Sea paradise",
    places: 22,
    guides: 110,
  },
];

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-b from-secondary to-secondary/90 text-white px-6 pt-6 pb-8 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-accent">MemoMap</h1>
            <p className="text-sm text-white/80 mt-1">Discover Egypt</p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/notifications"
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Bell className="w-5 h-5" />
            </Link>
            <Link
              to="/chat"
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Welcome to Egypt - Search places, guides..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl text-secondary">Explore Cities</h2>
          <Link to="/challenges" className="text-sm text-primary hover:text-accent transition-colors">
            View Challenges
          </Link>
        </div>

        <div className="space-y-4">
          {governorates.map((gov, index) => (
            <Link
              key={gov.name}
              to={`/city/${gov.name.toLowerCase()}`}
              className="block group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02]">
                <img
                  src={gov.image}
                  alt={gov.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30">
                    <span className="text-xs text-white font-medium">{gov.places} Places</span>
                  </div>
                  <div className="bg-accent/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-accent/50">
                    <span className="text-xs text-white font-medium">{gov.guides} Guides</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{gov.name}</h3>
                      <p className="text-sm text-white/95 drop-shadow">{gov.description}</p>
                    </div>
                    <div className="bg-gradient-to-r from-accent to-primary p-3 rounded-full group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
