import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Login failed.");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen w-full flex bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] font-['Satoshi'] relative overflow-hidden">
      {/* Side Image */}
      <div className="hidden md:flex h-screen w-1/2 lg:w-2/3 relative">
        <img
          src="/login.jpg"
          alt="Eventure Login Visual"
          className="w-full h-full object-cover object-center"
        />
        {/* <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm" /> */}
        <div className="absolute bottom-0 left-0 p-8 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg font-['ClashDisplay'] mb-2 animate-fade-in">Welcome to Eventure</h1>
          <p className="text-lg md:text-2xl text-white/90 font-['Satoshi'] max-w-md drop-shadow animate-slide-fade-in">Your gateway to campus events, connections, and opportunities.</p>
        </div>
      </div>
      {/* Login Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 lg:w-1/3 px-4 py-4 relative z-10">
        <div className="w-full max-w-md bg-white/30 backdrop-blur-lg rounded-3xl border border-white/40 shadow-2xl p-4 md:p-6 space-y-6">
          <div className="text-center">
            <div className="mx-auto h-16 w-16 bg-primary-button rounded-full flex items-center justify-center mb-3 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-primary font-['ClashDisplay'] tracking-tight mb-1">Sign In</h2>
            <p className="text-sm text-secondary font-['Satoshi']">Access your Eventure account</p>
          </div>
          <form className="space-y-4 mt-2" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-md bg-red-100/50 backdrop-blur-sm p-3 border border-red-200 text-xs text-red-800 font-medium font-['Satoshi'] text-center">
                {error}
              </div>
            )}
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
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-primary font-['Satoshi']">Password</label>
                <a href="/forgot-password" className="text-xs text-secondary hover:underline font-['Satoshi']">Forgot?</a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            </div>
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary-button focus:ring-primary-button border-white/40 rounded bg-white/50"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-primary font-['Satoshi']">Remember me</label>
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
                    Signing in...
                  </>
                ) : 'Sign in'}
              </Button>
            </div>
          </form>
          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/40"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white/30 text-secondary font-['Satoshi']">Or continue with</span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
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
          <div className="text-center text-sm mt-4 text-secondary font-['Satoshi']">
            Don't have an account?{' '}
            <a href="/signup" className="font-medium text-secondary hover:text-primary-button hover:underline transition-colors duration-200">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;