import { useParams, Link } from "react-router";
import { ArrowLeft, Star, MapPin, DollarSign, Clock, MessageCircle, Lock } from "lucide-react";

export function TourGuideProfile() {
  const { guideId } = useParams();
  const isPremium = false;

  const tours = [
    { id: 1, name: "Pyramids Full Day Tour", duration: "8 hours", price: 80, rating: 4.9, reviews: 45 },
    { id: 2, name: "Egyptian Museum Private Tour", duration: "4 hours", price: 50, rating: 5.0, reviews: 28 },
    { id: 3, name: "Khan el-Khalili Walking Tour", duration: "3 hours", price: 35, rating: 4.8, reviews: 67 },
  ];

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="bg-gradient-to-b from-secondary to-secondary/90 text-white px-6 pt-6 pb-12 rounded-b-3xl shadow-lg">
        <Link to="/" className="inline-block mb-6">
          <ArrowLeft className="w-6 h-6" />
        </Link>

        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-primary p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-3xl">
                {isPremium ? "👨‍🦱" : "❓"}
              </div>
            </div>
            {!isPremium && (
              <div className="absolute inset-0 rounded-full backdrop-blur-sm bg-black/40 flex items-center justify-center">
                <Lock className="w-8 h-8 text-white" />
              </div>
            )}
          </div>

          {isPremium ? (
            <>
              <h2 className="text-2xl font-bold mb-1">Ahmed Hassan</h2>
              <p className="text-white/80 text-sm mb-2">Professional Tour Guide</p>
              <div className="flex items-center gap-1 text-accent mb-4">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Cairo, Egypt</span>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-1">Guide #{guideId}</h2>
              <p className="text-white/80 text-sm mb-4">Identity Hidden</p>
              <div className="bg-accent/20 backdrop-blur-sm rounded-xl p-4 text-center max-w-sm">
                <Lock className="w-6 h-6 mx-auto mb-2 text-accent" />
                <p className="text-sm">Upgrade to Premium to view guide identities and contact them directly</p>
              </div>
            </>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
            <Star className="w-5 h-5 mx-auto mb-2 text-accent" />
            <div className="font-bold text-lg">4.9</div>
            <div className="text-xs text-white/70">Rating</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
            <MapPin className="w-5 h-5 mx-auto mb-2 text-accent" />
            <div className="font-bold text-lg">142</div>
            <div className="text-xs text-white/70">Tours</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
            <Star className="w-5 h-5 mx-auto mb-2 text-accent" />
            <div className="font-bold text-lg">4.5K</div>
            <div className="text-xs text-white/70">Points</div>
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        <h3 className="text-xl text-secondary mb-4">Available Tours</h3>
        <div className="space-y-3">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-card rounded-2xl p-4 shadow-sm">
              <h4 className="font-medium mb-2">{tour.name}</h4>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  <span>{tour.price}/person</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="text-sm">{tour.rating} ({tour.reviews} reviews)</span>
                </div>
                <button
                  className={`px-4 py-2 rounded-xl ${
                    isPremium
                      ? "bg-gradient-to-r from-primary to-accent text-white"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                  disabled={!isPremium}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {isPremium && (
          <button className="w-full mt-6 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-2xl shadow-lg flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" />
            <span>Contact Guide</span>
          </button>
        )}

        {!isPremium && (
          <div className="mt-6 bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/30 rounded-2xl p-6 text-center">
            <h3 className="font-bold text-lg mb-2">Upgrade to Premium</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Unlock guide identities, unlimited communication, and exclusive features
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl shadow-lg">
              Get Premium
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
