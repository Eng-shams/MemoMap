import { useParams, Link } from "react-router";
import { ArrowLeft, MapPin, Users, Star, ChevronRight, Bookmark, Navigation2 } from "lucide-react";

const cityData: Record<string, { description: string; places: Array<{ id: number; name: string; image: string; rating: number; preview: string }> }> = {
  cairo: {
    description: "Cairo, the capital of Egypt, is a vibrant metropolis where ancient wonders meet modern life.",
    places: [
      { id: 1, name: "Egyptian Museum", image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80", rating: 4.8, preview: "Home to ancient pharaonic artifacts and treasures" },
      { id: 2, name: "Khan el-Khalili", image: "https://images.unsplash.com/photo-1549471832-e8b5b0e9c21e?w=800&q=80", rating: 4.7, preview: "Historic bazaar with traditional crafts and souvenirs" },
      { id: 3, name: "Cairo Tower", image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=80", rating: 4.6, preview: "Panoramic views of the entire city from above" },
      { id: 6, name: "Al-Azhar Mosque", image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80", rating: 4.9, preview: "One of the oldest mosques in Egypt" },
      { id: 7, name: "Citadel of Saladin", image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80", rating: 4.7, preview: "Medieval Islamic fortification with stunning architecture" },
      { id: 22, name: "Maadi", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80", rating: 4.5, preview: "Peaceful green suburb with tree-lined streets and cafes" },
    ],
  },
  giza: {
    description: "Home to the iconic Pyramids, Giza represents the pinnacle of ancient Egyptian civilization.",
    places: [
      { id: 4, name: "Great Pyramid of Khufu", image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80", rating: 5.0, preview: "The last standing wonder of the ancient world" },
      { id: 5, name: "The Great Sphinx", image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80", rating: 4.9, preview: "Mysterious guardian of the Giza plateau" },
      { id: 8, name: "Pyramid of Khafre", image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80", rating: 4.8, preview: "Second largest pyramid with intact peak casing" },
      { id: 9, name: "Solar Boat Museum", image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=80", rating: 4.6, preview: "Ancient reconstructed ceremonial ship" },
    ],
  },
  alexandria: {
    description: "Mediterranean pearl of Egypt",
    places: [
      { id: 10, name: "Stanley Bridge", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80", rating: 4.8, preview: "Iconic bridge with stunning Mediterranean views" },
      { id: 11, name: "Qaitbay Citadel", image: "https://images.unsplash.com/photo-1592240549908-0a0efa9c7c90?w=800&q=80", rating: 4.7, preview: "15th-century fortress on the Mediterranean" },
      { id: 12, name: "Alexandria Corniche", image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80", rating: 4.9, preview: "Beautiful coastal promenade stretching along the sea" },
      { id: 23, name: "Montaza Beach", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80", rating: 4.6, preview: "Sandy beaches and royal palace gardens" },
      { id: 24, name: "Bibliotheca Alexandrina", image: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=800&q=80", rating: 4.7, preview: "Modern architectural marvel and cultural center" },
    ],
  },
  luxor: {
    description: "Valley of the Kings",
    places: [
      { id: 13, name: "Karnak Temple", image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80", rating: 5.0, preview: "Vast temple complex dedicated to Amun-Ra" },
      { id: 14, name: "Valley of the Kings", image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80", rating: 4.9, preview: "Tombs of pharaohs including Tutankhamun" },
      { id: 15, name: "Luxor Temple", image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80", rating: 4.8, preview: "Ancient temple illuminated beautifully at night" },
    ],
  },
  aswan: {
    description: "Nubian culture and the Nile",
    places: [
      { id: 16, name: "Abu Simbel Temples", image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=80", rating: 5.0, preview: "Massive rock temples built by Ramesses II" },
      { id: 17, name: "Philae Temple", image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=80", rating: 4.8, preview: "Island temple dedicated to goddess Isis" },
      { id: 18, name: "Nubian Village", image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=80", rating: 4.7, preview: "Colorful traditional Nubian culture experience" },
    ],
  },
  hurghada: {
    description: "Red Sea paradise",
    places: [
      { id: 19, name: "Giftun Island", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80", rating: 4.9, preview: "Crystal clear waters and pristine beaches" },
      { id: 20, name: "Mahmya Beach", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80", rating: 4.8, preview: "Protected island paradise for snorkeling" },
      { id: 21, name: "Hurghada Marina", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80", rating: 4.5, preview: "Modern waterfront dining and shopping" },
    ],
  },
};

export function CityDetails() {
  const { cityName } = useParams();
  const city = cityData[cityName || "cairo"];

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="relative h-64">
        <img
          src={city?.places[0]?.image || "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80"}
          alt={cityName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <Link
          to="/home"
          className="absolute top-6 left-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </Link>
        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-3xl font-bold text-white capitalize mb-2">{cityName}</h1>
          <p className="text-white/90 text-sm">{city?.description}</p>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="flex gap-4 mb-6">
          <div className="flex-1 bg-card rounded-2xl p-4 shadow-sm text-center">
            <MapPin className="w-6 h-6 mx-auto mb-2 text-primary" />
            <div className="font-bold">{city?.places.length || 0}</div>
            <div className="text-xs text-muted-foreground">Places</div>
          </div>
          <div className="flex-1 bg-card rounded-2xl p-4 shadow-sm text-center">
            <Users className="w-6 h-6 mx-auto mb-2 text-accent" />
            <div className="font-bold">1.2K</div>
            <div className="text-xs text-muted-foreground">Guides</div>
          </div>
          <div className="flex-1 bg-card rounded-2xl p-4 shadow-sm text-center">
            <Star className="w-6 h-6 mx-auto mb-2 text-accent" />
            <div className="font-bold">4.8</div>
            <div className="text-xs text-muted-foreground">Rating</div>
          </div>
        </div>

        <h2 className="text-xl text-secondary mb-4">Famous Places & Areas</h2>
        <div className="space-y-4">
          {city?.places.map((place, index) => (
            <div key={place.id} className="relative group" style={{ animationDelay: `${index * 50}ms` }}>
              <div className="relative h-52 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30">
                    <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                    <span className="text-xs text-white font-medium">{place.rating}</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold text-white mb-1.5 drop-shadow-lg">{place.name}</h3>
                  <p className="text-sm text-white/90 mb-4 drop-shadow">{place.preview}</p>

                  <div className="flex gap-2">
                    <Link
                      to={`/home/map?place=${place.id}&name=${encodeURIComponent(place.name)}`}
                      className="flex-1 bg-gradient-to-r from-primary to-accent text-white py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                    >
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium">View on Map</span>
                    </Link>
                    <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white p-2.5 rounded-xl hover:bg-white/30 transition-all">
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <Link
                      to={`/home/map?place=${place.id}&name=${encodeURIComponent(place.name)}&directions=true`}
                      className="bg-white/20 backdrop-blur-md border border-white/30 text-white p-2.5 rounded-xl hover:bg-white/30 transition-all"
                    >
                      <Navigation2 className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
