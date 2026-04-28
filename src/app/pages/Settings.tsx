import { useNavigate } from "react-router";
import { ArrowLeft, Globe, User, Bell, Lock, HelpCircle, LogOut, ChevronRight, UserCog } from "lucide-react";

export function Settings() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const settingsGroups = [
    {
      title: "Account",
      items: [
        { icon: User, label: "Edit Profile", action: () => {} },
        { icon: UserCog, label: "Switch Account", action: () => {} },
      ],
    },
    {
      title: "Preferences",
      items: [
        { icon: Globe, label: "Language", subtitle: "English", action: () => {} },
        { icon: Bell, label: "Notifications", action: () => {} },
        { icon: Lock, label: "Privacy Settings", action: () => {} },
      ],
    },
    {
      title: "Support",
      items: [
        { icon: HelpCircle, label: "Help & Support", action: () => {} },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="bg-gradient-to-b from-secondary to-secondary/90 text-white px-6 py-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {settingsGroups.map((group, index) => (
          <div key={index}>
            <h3 className="text-sm font-medium text-muted-foreground mb-3 px-2">{group.title}</h3>
            <div className="bg-card rounded-2xl shadow-sm overflow-hidden">
              {group.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <button
                    key={itemIndex}
                    onClick={item.action}
                    className="w-full flex items-center gap-4 p-4 hover:bg-muted transition-colors border-b border-border last:border-b-0"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-medium">{item.label}</div>
                      {item.subtitle && (
                        <div className="text-sm text-muted-foreground">{item.subtitle}</div>
                      )}
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <div className="pt-6">
          <button
            onClick={handleLogout}
            className="w-full bg-destructive/10 border-2 border-destructive/30 text-destructive py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-destructive/20 transition-all shadow-sm"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>

        <div className="text-center text-sm text-muted-foreground pt-4">
          <p>MemoMap v1.0.0</p>
          <p className="mt-1">Made with ❤️ in Egypt</p>
        </div>
      </div>
    </div>
  );
}
