import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Upload, Camera, MapPin, Lock, Users, Globe, X, UserPlus } from "lucide-react";

type Privacy = "public" | "friends" | "private";

export function AddMemory() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [privacy, setPrivacy] = useState<Privacy>("public");
  const [caption, setCaption] = useState("");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        setStep(2);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePost = () => {
    navigate("/map");
  };

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="bg-gradient-to-b from-secondary to-secondary/90 text-white px-6 py-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Add Memory</h1>
          <div className="w-6" />
        </div>
        <div className="flex gap-2">
          <div className={`h-1 flex-1 rounded-full transition-all ${step >= 1 ? "bg-accent" : "bg-white/30"}`} />
          <div className={`h-1 flex-1 rounded-full transition-all ${step >= 2 ? "bg-accent" : "bg-white/30"}`} />
        </div>
      </div>

      <div className="px-6 py-6">
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center py-8">
              <Camera className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h2 className="text-xl text-secondary mb-2">Share Your Experience</h2>
              <p className="text-muted-foreground">Capture and share your Egyptian adventure</p>
            </div>

            <div className="space-y-4">
              <label className="block">
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="file-upload"
                />
                <div className="cursor-pointer bg-card rounded-3xl p-8 border-2 border-dashed border-primary hover:border-accent transition-colors text-center">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <p className="font-medium text-secondary mb-1">Upload Photo or Video</p>
                  <p className="text-sm text-muted-foreground">Tap to choose from gallery</p>
                </div>
              </label>

              <button className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg">
                <Camera className="w-5 h-5" />
                <span className="font-medium">Take Photo</span>
              </button>
            </div>

            <div className="bg-muted/50 rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Current Location</p>
                  <p className="text-sm text-muted-foreground">Great Pyramid of Giza</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && uploadedImage && (
          <div className="space-y-6">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
              <img src={uploadedImage} alt="Upload preview" className="w-full h-full object-cover" />
              <button
                onClick={() => {
                  setUploadedImage(null);
                  setStep(1);
                }}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Caption / Story</label>
              <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Share your story about this place..."
                className="w-full px-4 py-3 rounded-2xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                rows={4}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">Privacy</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "public", label: "Public", icon: Globe },
                  { id: "friends", label: "Friends", icon: Users },
                  { id: "private", label: "Private", icon: Lock },
                ].map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.id}
                      onClick={() => setPrivacy(option.id as Privacy)}
                      className={`p-4 rounded-2xl border-2 transition-all ${
                        privacy === option.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <Icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <p className="text-xs font-medium">{option.label}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            <button className="w-full bg-muted hover:bg-border text-foreground py-3 rounded-2xl flex items-center justify-center gap-2 transition-colors">
              <UserPlus className="w-5 h-5" />
              <span>Tag Friends</span>
            </button>

            <div className="bg-accent/10 rounded-2xl p-4 border border-accent/30">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-medium text-sm">Location</p>
                  <p className="text-sm text-muted-foreground">Great Pyramid of Giza</p>
                </div>
                <button className="text-xs text-primary hover:text-accent">Change</button>
              </div>
            </div>

            <button
              onClick={handlePost}
              className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] font-medium"
            >
              Post Memory
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
