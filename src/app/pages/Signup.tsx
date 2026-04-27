import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff, Upload, Check } from "lucide-react";

type SignupStep = 1 | 2 | 3 | 4 | 5;
type UserRole = "tourist" | "local" | "guide" | null;

export function Signup() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<SignupStep>(1);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [selectedPayments, setSelectedPayments] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    idType: "national",
    password: "",
    confirmPassword: "",
  });

  const paymentMethods = [
    "Vodafone Cash",
    "Etisalat Cash",
    "Orange Cash",
    "WE Pay",
    "InstaPay",
    "Meeza",
    "Visa",
    "Mastercard",
  ];

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep((currentStep + 1) as SignupStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as SignupStep);
    }
  };

  const handleSubmit = () => {
    navigate("/");
  };

  const togglePayment = (method: string) => {
    setSelectedPayments((prev) =>
      prev.includes(method) ? prev.filter((m) => m !== method) : [...prev, method]
    );
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(30, 58, 95, 0.7), rgba(30, 58, 95, 0.85)), url('https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1200&q=80')",
        }}
      />

      <div className="relative z-10 min-h-screen p-6 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-accent mb-2">Create Account</h1>
            <p className="text-white/90">Step {currentStep} of 5</p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
            <div className="flex gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((step) => (
                <div
                  key={step}
                  className={`h-2 flex-1 rounded-full transition-all ${
                    step <= currentStep ? "bg-gradient-to-r from-primary to-accent" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            {currentStep === 1 && (
              <div className="space-y-4">
                <h3 className="text-xl text-secondary mb-4">Personal Information</h3>
                <div>
                  <label className="block text-sm mb-2">First Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    placeholder="Enter last name"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    placeholder="+20 xxx xxx xxxx"
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <h3 className="text-xl text-secondary mb-4">Identity Verification</h3>
                <div>
                  <label className="block text-sm mb-2">Document Type</label>
                  <select
                    value={formData.idType}
                    onChange={(e) => setFormData({ ...formData, idType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  >
                    <option value="national">National ID</option>
                    <option value="passport">Passport</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="block text-sm">Upload Documents</label>
                  <button className="w-full py-8 border-2 border-dashed border-primary rounded-xl hover:bg-muted/50 transition-colors flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground">
                    <Upload className="w-8 h-8" />
                    <span className="text-sm">Front Side</span>
                  </button>
                  {formData.idType === "national" && (
                    <button className="w-full py-8 border-2 border-dashed border-primary rounded-xl hover:bg-muted/50 transition-colors flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground">
                      <Upload className="w-8 h-8" />
                      <span className="text-sm">Back Side</span>
                    </button>
                  )}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <h3 className="text-xl text-secondary mb-4">Create Password</h3>
                <div>
                  <label className="block text-sm mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                      placeholder="Create password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-2">Confirm Password</label>
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    placeholder="Confirm password"
                  />
                </div>
                <div className="text-xs text-muted-foreground space-y-1 mt-4">
                  <p>Password must contain:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>At least 8 characters</li>
                    <li>One uppercase letter</li>
                    <li>One number</li>
                  </ul>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-4">
                <h3 className="text-xl text-secondary mb-4">Payment Setup</h3>
                <p className="text-sm text-muted-foreground mb-4">Optional - You can skip this step</p>
                <div className="grid grid-cols-2 gap-3">
                  {paymentMethods.map((method) => (
                    <button
                      key={method}
                      onClick={() => togglePayment(method)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedPayments.includes(method)
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{method}</span>
                        {selectedPayments.includes(method) && (
                          <Check className="w-4 h-4 text-primary" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-4">
                <h3 className="text-xl text-secondary mb-4">Choose Your Role</h3>
                <div className="space-y-3">
                  {[
                    { id: "tourist", label: "Tourist", desc: "Explore Egypt and connect with guides" },
                    { id: "local", label: "Local User", desc: "Share your experiences and memories" },
                    { id: "guide", label: "Tour Guide", desc: "Offer your services to tourists" },
                  ].map((role) => (
                    <button
                      key={role.id}
                      onClick={() => setSelectedRole(role.id as UserRole)}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                        selectedRole === role.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{role.label}</div>
                          <div className="text-sm text-muted-foreground">{role.desc}</div>
                        </div>
                        {selectedRole === role.id && <Check className="w-5 h-5 text-primary" />}
                      </div>
                    </button>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-accent/10 rounded-xl border border-accent/30">
                  <p className="text-sm text-center text-secondary">
                    Your account will be under review
                    <br />
                    <span className="font-medium">(up to 24 hours)</span>
                  </p>
                </div>
              </div>
            )}

            <div className="flex gap-3 mt-6">
              {currentStep > 1 && (
                <button
                  onClick={handleBack}
                  className="flex-1 py-3 border border-border rounded-xl hover:bg-muted transition-colors"
                >
                  Back
                </button>
              )}
              {currentStep < 5 ? (
                <button
                  onClick={handleNext}
                  className="flex-1 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  {currentStep === 4 ? "Skip" : "Next"}
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex-1 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Complete
                </button>
              )}
            </div>

            <div className="text-center pt-4">
              <span className="text-sm text-muted-foreground">Already have an account? </span>
              <Link to="/login" className="text-sm text-primary hover:text-accent transition-colors">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
