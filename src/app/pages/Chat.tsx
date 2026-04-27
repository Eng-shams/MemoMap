import { Search, MessageCircle } from "lucide-react";

const chats = [
  {
    id: 1,
    name: "Sarah Mohamed",
    lastMessage: "Thanks for the tour guide recommendation!",
    time: "10 min",
    unread: 2,
    avatar: "👩",
    online: true,
  },
  {
    id: 2,
    name: "Tour Guide - Ahmed",
    lastMessage: "I can show you the pyramids tomorrow at 9 AM",
    time: "1 hour",
    unread: 0,
    avatar: "🧑‍🦱",
    online: true,
  },
  {
    id: 3,
    name: "Lisa Johnson",
    lastMessage: "Is Luxor worth visiting in summer?",
    time: "2 hours",
    unread: 1,
    avatar: "👱‍♀️",
    online: false,
  },
  {
    id: 4,
    name: "Omar Ahmed",
    lastMessage: "The photos from Khan el-Khalili are amazing!",
    time: "1 day",
    unread: 0,
    avatar: "👨",
    online: false,
  },
];

export function Chat() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-b from-secondary to-secondary/90 text-white px-6 py-6 rounded-b-3xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Messages</h1>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white text-foreground placeholder:text-muted-foreground outline-none"
          />
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="space-y-2">
          {chats.map((chat) => (
            <button
              key={chat.id}
              className="w-full bg-card rounded-2xl p-4 shadow-sm hover:shadow-md transition-all text-left"
            >
              <div className="flex gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl">
                    {chat.avatar}
                  </div>
                  {chat.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium text-foreground truncate">{chat.name}</h3>
                    <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">{chat.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                    {chat.unread > 0 && (
                      <div className="flex-shrink-0 ml-2 w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-xs text-white">{chat.unread}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <button className="fixed bottom-20 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
        <MessageCircle className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
