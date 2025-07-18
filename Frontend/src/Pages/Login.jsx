import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Placeholder for authentication logic
    if (!email || !password) {
      setError("Please enter both email and password.");
      setIsLoading(false);
      return;
    }
    
    setError("");
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert("Logged in successfully!");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-primary font-['Satoshi'] relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] left-[10%] w-40 h-40 sm:w-64 sm:h-64 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-[20%] right-[15%] w-52 h-52 sm:w-80 sm:h-80 bg-white/15 rounded-full blur-xl"></div>
      </div>

      <Navbar />
      <div className="flex flex-1 items-center justify-center py-8 sm:py-12 px-2 sm:px-4 lg:px-8 relative z-10">
        <div className="max-w-xs sm:max-w-md w-full space-y-6 sm:space-y-8 bg-white/30 backdrop-blur-md p-4 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/40 transform transition-all hover:shadow-xl hover:-translate-y-1">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 bg-primary-button rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
            <h2 className="text-center text-2xl sm:text-3xl font-bold text-primary font-['ClashDisplay'] tracking-tight">
              WELCOME <span className="text-secondary">BACK</span>
            </h2>
            <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-secondary font-['Satoshi']">
              Sign in to access your account
            </p>
          </div>
          
          <form className="mt-4 sm:mt-8 space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-md bg-red-100/50 backdrop-blur-sm p-3 sm:p-4 border border-red-200">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-2 sm:ml-3">
                    <h3 className="text-xs sm:text-sm font-medium text-red-800 font-['Satoshi']">{error}</h3>
                  </div>
                </div>
              </div>
            )}
            
            <div className="space-y-3 sm:space-y-4">
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-primary mb-0.5 sm:mb-1 font-['Satoshi']">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-8 sm:pl-10 appearance-none rounded-xl relative block w-full px-3 sm:px-4 py-2 sm:py-3 border border-white/40 bg-white/50 placeholder-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary-button focus:border-transparent text-xs sm:text-sm transition-all duration-200 font-['Satoshi']"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-0.5 sm:mb-1">
                  <label htmlFor="password" className="block text-xs sm:text-sm font-medium text-primary font-['Satoshi']">
                    Password
                  </label>
                  <a href="/forgot-password" className="text-xs text-secondary hover:underline font-['Satoshi']">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-8 sm:pl-10 appearance-none rounded-xl relative block w-full px-3 sm:px-4 py-2 sm:py-3 border border-white/40 bg-white/50 placeholder-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary-button focus:border-transparent text-xs sm:text-sm transition-all duration-200 font-['Satoshi']"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary-button focus:ring-primary-button border-white/40 rounded bg-white/50"
              />
              <label htmlFor="remember-me" className="ml-2 block text-xs sm:text-sm text-primary font-['Satoshi']">
                Remember me
              </label>
            </div>

            <div>
              <Button
                type="submit"
                className={`w-full flex justify-center py-2 sm:py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-medium text-white bg-primary-button hover:bg-[#23424A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-button shadow-sm transition-all duration-300 font-['Satoshi'] ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : 'Sign in'}
              </Button>
            </div>
          </form>
          
          <div className="relative mt-4 sm:mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/40"></div>
            </div>
            <div className="relative flex justify-center text-xs sm:text-sm">
              <span className="px-2 bg-white/30 text-secondary font-['Satoshi']">
                Or continue with
              </span>
            </div>
          </div>
          
          <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-3">
            <div>
              <a href="#" className="w-full inline-flex justify-center py-2 px-3 sm:px-4 border border-white/40 rounded-xl shadow-sm bg-white/30 hover:bg-white/50 text-xs sm:text-sm font-medium text-secondary transition-colors duration-200 font-['Satoshi']">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <div>
              <a href="#" className="w-full inline-flex justify-center py-2 px-3 sm:px-4 border border-white/40 rounded-xl shadow-sm bg-white/30 hover:bg-white/50 text-xs sm:text-sm font-medium text-secondary transition-colors duration-200 font-['Satoshi']">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="text-center text-xs sm:text-sm mt-3 sm:mt-4 text-secondary font-['Satoshi']">
            Don't have an account?{' '}
            <a href="/signup" className="font-medium text-secondary hover:text-primary-button hover:underline transition-colors duration-200">
              Sign up
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;