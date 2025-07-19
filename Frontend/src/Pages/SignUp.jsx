import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Listbox } from "@headlessui/react";
import { FaChevronDown, FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const roles = ["Student", "Organizer", "Admin"];

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(roles[0]);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    let strength = 0;
    if (value.length > 0) strength += 1;
    if (value.length >= 6) strength += 1;
    if (/[A-Z]/.test(value)) strength += 1;
    if (/[0-9]/.test(value)) strength += 1;
    if (/[^A-Za-z0-9]/.test(value)) strength += 1;
    setPasswordStrength(strength);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (!name || !email || !role || !password) {
      setError("Please fill in all fields.");
      setIsLoading(false);
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Sign up failed.");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    }
    setIsLoading(false);
  };

  const getPasswordStrengthColor = () => {
    switch(passwordStrength) {
      case 0: return 'bg-white/40';
      case 1: return 'bg-red-400';
      case 2: return 'bg-yellow-400';
      case 3: return 'bg-blue-400';
      case 4: return 'bg-green-400';
      case 5: return 'bg-green-600';
      default: return 'bg-white/40';
    }
  };

  const getPasswordStrengthText = () => {
    switch(passwordStrength) {
      case 0: return '';
      case 1: return 'Very Weak';
      case 2: return 'Weak';
      case 3: return 'Moderate';
      case 4: return 'Strong';
      case 5: return 'Very Strong';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] font-['Satoshi'] relative overflow-hidden scrollbar-hide">
      {/* Side Image */}
      <div className="hidden md:flex h-screen w-1/2 lg:w-2/3 relative">
        <img
          src="/login.jpg"
          alt="Eventure Sign Up Visual"
          className="w-full h-full object-cover object-center"
        />
        {/* <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm" /> */}
        <div className="absolute bottom-0 left-0 p-8 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg font-['ClashDisplay'] mb-2 animate-fade-in">Join Eventure</h1>
          <p className="text-lg md:text-2xl text-white/90 font-['Satoshi'] max-w-md drop-shadow animate-slide-fade-in">Create your account and start your campus journey today.</p>
        </div>
      </div>
      {/* Sign Up Form */}
      <div className="flex flex-1 min-h-screen items-center justify-center w-full md:w-1/2 lg:w-1/3 px-2 sm:px-4 py-6 md:py-0 relative z-10 bg-transparent">
        <div className="w-full max-w-md bg-white/30 backdrop-blur-lg rounded-3xl border border-white/40 shadow-2xl p-4 md:p-5 space-y-4 mx-auto">
          <div className="text-center">
            <div className="mx-auto h-16 w-16 bg-primary-button rounded-full flex items-center justify-center mb-2 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-primary font-['ClashDisplay'] tracking-tight mb-1">Sign Up</h2>
            <p className="text-xs text-secondary font-['Satoshi']">Create your account in just a few steps</p>
          </div>
          <form className="space-y-3 mt-1" onSubmit={handleSubmit} autoComplete="off">
            {error && (
              <div className="rounded-md bg-red-100/50 backdrop-blur-sm p-3 border border-red-200 text-xs text-red-800 font-medium font-['Satoshi'] text-center">
                {error}
              </div>
            )}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary mb-1 font-['Satoshi']">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none rounded-xl block w-full px-4 py-3 border border-white/40 bg-white/60 placeholder-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary-button focus:border-transparent text-sm transition-all duration-200 font-['Satoshi']"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary mb-1 font-['Satoshi']">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-xl block w-full px-4 py-3 border border-white/40 bg-white/60 placeholder-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary-button focus:border-transparent text-sm transition-all duration-200 font-['Satoshi']"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-primary mb-1 font-['Satoshi']">Role</label>
              <Listbox value={role} onChange={setRole}>
                {({ open }) => (
                  <div className="relative">
                    <Listbox.Button className={`appearance-none rounded-xl block w-full px-4 py-3 border border-white/40 bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary-button focus:border-transparent text-sm transition-all duration-200 shadow-sm cursor-pointer text-left flex items-center justify-between font-['Satoshi'] ${open ? 'ring-2 ring-primary-button' : ''}`}> 
                      <span>{role}</span>
                      <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-button pointer-events-none" />
                    </Listbox.Button>
                    <Listbox.Options className="absolute z-10 mt-2 w-full bg-white/80 backdrop-blur-md border border-white/40 rounded-xl shadow-lg max-h-60 py-1 overflow-auto focus:outline-none">
                      {roles.map((r) => (
                        <Listbox.Option
                          key={r}
                          value={r}
                          className={({ active, selected }) =>
                            `cursor-pointer select-none relative py-3 px-6 text-primary text-base transition-colors duration-150 font-['Satoshi'] ${active ? 'bg-primary-button/20' : ''} ${selected ? 'font-bold text-secondary bg-primary-button/30' : ''}`
                          }
                        >
                          {({ selected }) => (
                            <>
                              <span className={`block truncate ${selected ? 'font-bold' : 'font-normal'}`}>{r}</span>
                              {selected ? (
                                <span className="absolute inset-y-0 right-4 flex items-center text-primary-button">
                                  <FaCheck className="w-4 h-4" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </div>
                )}
              </Listbox>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-primary mb-1 font-['Satoshi']">Password</label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  className="appearance-none rounded-xl block w-full px-4 py-3 border border-white/40 bg-white/60 placeholder-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary-button focus:border-transparent text-sm transition-all duration-200 font-['Satoshi'] pr-12"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary focus:outline-none"
                  tabIndex={-1}
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {password && (
                <div className="mt-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs font-medium text-secondary/80 font-['Satoshi']">Password strength</span>
                    <span className="text-xs font-medium text-secondary font-['Satoshi']">{getPasswordStrengthText()}</span>
                  </div>
                  <div className="w-full bg-white/40 rounded-full h-1.5">
                    <div 
                      className={`h-1.5 rounded-full ${getPasswordStrengthColor()}`} 
                      style={{ width: `${passwordStrength * 20}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-primary-button focus:ring-primary-button border-white/40 rounded bg-white/50"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-primary font-['Satoshi']">
                I agree to the <a href="#" className="text-secondary hover:underline">Terms of Service</a> and <a href="#" className="text-secondary hover:underline">Privacy Policy</a>
              </label>
            </div>
            <div>
              <Button
                type="submit"
                className={`w-full flex justify-center py-3 px-4 rounded-xl text-sm font-medium text-white bg-primary-button hover:bg-[#23424A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-button shadow-md transition-all duration-300 font-['Satoshi'] ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating account...
                  </>
                ) : 'Sign Up'}
              </Button>
            </div>
          </form>
          <div className="relative mt-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/40"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white/30 text-secondary font-['Satoshi']">Or sign up with</span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-white/40 rounded-xl shadow-sm bg-white/30 hover:bg-white/50 text-sm font-medium text-secondary transition-colors duration-200 font-['Satoshi']">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-white/40 rounded-xl shadow-sm bg-white/30 hover:bg-white/50 text-sm font-medium text-secondary transition-colors duration-200 font-['Satoshi']">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
          <div className="text-center text-xs mt-2 text-secondary font-['Satoshi']">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-secondary hover:text-primary-button hover:underline transition-colors duration-200">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;