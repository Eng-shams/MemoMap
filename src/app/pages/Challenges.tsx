import { Link } from "react-router";
import { ArrowLeft, Trophy, Star, MapPin, Camera, Award } from "lucide-react";

const challenges = [
  {
    id: 1,
    title: "Pyramids Explorer",
    description: "Visit all 3 pyramids and take photos",
    progress: 2,
    total: 3,
    reward: 500,
    icon: MapPin,
  },
  {
    id: 2,
    title: "Museum Master",
    description: "Visit 5 different museums in Cairo",
    progress: 3,
    total: 5,
    reward: 750,
    icon: Camera,
  },
  {
    id: 3,
    title: "Social Butterfly",
    description: "Connect with 10 tour guides",
    progress: 7,
    total: 10,
    reward: 300,
    icon: Award,
  },
];

const leaderboard = [
  { rank: 1, name: "Ahmed Hassan", points: 12450, avatar: "👨‍🦱" },
  { rank: 2, name: "Sarah Mohamed", points: 11230, avatar: "👩" },
  { rank: 3, name: "Omar Ahmed", points: 9870, avatar: "👨" },
  { rank: 4, name: "You", points: 4580, avatar: "👤", isCurrentUser: true },
  { rank: 5, name: "Lisa Johnson", points: 4120, avatar: "👱‍♀️" },
];

export function Challenges() {
  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="bg-gradient-to-b from-secondary to-secondary/90 text-white px-6 py-6 rounded-b-3xl shadow-lg">
        <Link to="/" className="inline-block mb-4">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold mb-2">Challenges & Rewards</h1>
        <p className="text-sm text-white/80">Complete challenges to earn points and rewards</p>
      </div>

      <div className="px-6 py-6">
        <div className="bg-gradient-to-br from-accent to-primary rounded-2xl p-6 text-white mb-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm opacity-90">Your Points</div>
              <div className="text-3xl font-bold">4,580</div>
            </div>
            <Trophy className="w-12 h-12 opacity-90" />
          </div>
          <div className="flex gap-2">
            <button className="flex-1 py-2 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors">
              Convert to Money
            </button>
            <button className="flex-1 py-2 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors">
              Rewards Shop
            </button>
          </div>
        </div>

        <h2 className="text-xl text-secondary mb-4">Active Challenges</h2>
        <div className="space-y-3 mb-8">
          {challenges.map((challenge) => {
            const Icon = challenge.icon;
            const percentage = (challenge.progress / challenge.total) * 100;
            return (
              <div key={challenge.id} className="bg-card rounded-2xl p-4 shadow-sm">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">{challenge.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{challenge.description}</p>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-muted-foreground">
                        {challenge.progress}/{challenge.total} completed
                      </span>
                      <div className="flex items-center gap-1 text-accent">
                        <Star className="w-4 h-4" />
                        <span className="text-sm font-medium">{challenge.reward}</span>
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <h2 className="text-xl text-secondary mb-4">Leaderboard</h2>
        <div className="space-y-2">
          {leaderboard.map((user) => (
            <div
              key={user.rank}
              className={`rounded-2xl p-4 ${
                user.isCurrentUser
                  ? "bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary"
                  : "bg-card"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  user.rank === 1 ? "bg-accent text-white" :
                  user.rank === 2 ? "bg-gray-400 text-white" :
                  user.rank === 3 ? "bg-amber-700 text-white" :
                  "bg-muted text-foreground"
                }`}>
                  {user.rank}
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl">
                  {user.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{user.name}</div>
                  <div className="text-xs text-muted-foreground">{user.points.toLocaleString()} points</div>
                </div>
                {user.rank <= 3 && (
                  <Trophy className={`w-5 h-5 ${
                    user.rank === 1 ? "text-accent" :
                    user.rank === 2 ? "text-gray-400" :
                    "text-amber-700"
                  }`} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
