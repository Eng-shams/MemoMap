import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff } from "lucide-react";

export function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(30, 58, 95, 0.7), rgba(30, 58, 95, 0.85)), url('https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1200&q=80')",
        }}
      />

      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-accent mb-2">MemoMap</h1>
            <p className="text-white/90">Your Journey Through Egypt</p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl mb-2 text-center text-secondary">Welcome Back</h2>
            <p className="text-sm text-center text-muted-foreground mb-6">Login to explore Egypt</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm mb-2 text-foreground">Email or Username</label>
                <input
                  type="text"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-foreground">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="text-right">
                <Link to="/forgot-password" className="text-sm text-primary hover:text-accent transition-colors">
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02]"
              >
                Login
              </button>

              <div className="text-center pt-4">
                <span className="text-muted-foreground">Don't have an account? </span>
                <Link to="/signup" className="text-primary hover:text-accent transition-colors">
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
