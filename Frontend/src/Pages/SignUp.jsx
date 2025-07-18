import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Listbox } from "@headlessui/react";
import { FaChevronDown, FaCheck } from "react-icons/fa";

const roles = ["Student", "Organizer", "Admin"];

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState(roles[0]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    
    // Calculate password strength
    let strength = 0;
    if (value.length > 0) strength += 1;
    if (value.length >= 6) strength += 1;
    if (/[A-Z]/.test(value)) strength += 1;
    if (/[0-9]/.test(value)) strength += 1;
    if (/[^A-Za-z0-9]/.test(value)) strength += 1;
    
    setPasswordStrength(strength);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validation
    if (!name || !email || !phone || !role || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      setIsLoading(false);
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      setIsLoading(false);
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      setIsLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }
    
    setError("");
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert("Account created successfully!");
    }, 1500);
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
    <div className="min-h-screen flex flex-col bg-primary font-['Satoshi'] relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] left-[10%] w-40 h-40 sm:w-64 sm:h-64 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-[20%] right-[15%] w-52 h-52 sm:w-80 sm:h-80 bg-white/15 rounded-full blur-xl"></div>
      </div>

      <Navbar />
      <div className="flex flex-1 items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-md w-full space-y-8 bg-white/30 backdrop-blur-md p-10 rounded-3xl border border-white/40 transform transition-all hover:shadow-xl hover:-translate-y-1">
          <div className="text-center">
            <div className="mx-auto h-16 w-16 bg-primary-button rounded-full flex items-center justify-center mb-4 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h2 className="text-center text-3xl font-bold text-primary font-['ClashDisplay'] tracking-tight">
              JOIN US <span className="text-secondary">TODAY</span>
            </h2>
            <p className="mt-2 text-sm text-secondary font-['Satoshi']">
              Create your account in just a few steps
            </p>
          </div>
          
          <form className="mt-8 space-y-4" onSubmit={handleSubmit} autoComplete="off">
            {error && (
              <div className="rounded-md bg-red-100/50 backdrop-blur-sm p-4 border border-red-200">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800 font-['Satoshi']">{error}</h3>
                  </div>
                </div>
              </div>
            )}
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary mb-1 font-['Satoshi']">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 appearance-none rounded-xl relative block w-full px-4 py-3 border border-white/40 bg-white/50 placeholder-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary-button focus:border-transparent sm:text-sm transition-all duration-200 font-['Satoshi']"
                  placeholder="John Doe"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary mb-1 font-['Satoshi']">Email address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
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
                  className="pl-10 appearance-none rounded-xl relative block w-full px-4 py-3 border border-white/40 bg-white/50 placeholder-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary-button focus:border-transparent sm:text-sm transition-all duration-200 font-['Satoshi']"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1 font-['Satoshi']">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^\d]/g, ''))}
                  className="pl-10 appearance-none rounded-xl relative block w-full px-4 py-3 border border-white/40 bg-white/50 placeholder-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary-button focus:border-transparent sm:text-sm transition-all duration-200 font-['Satoshi']"
                  placeholder="1234567890"
                  maxLength={10}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-primary mb-1 font-['Satoshi']">Role</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <Listbox value={role} onChange={setRole}>
                  {({ open }) => (
                    <div className="relative">
                      <Listbox.Button className={`pl-10 pr-10 appearance-none rounded-xl relative block w-full px-4 py-3 border border-white/40 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary-button focus:border-transparent sm:text-sm transition-all duration-200 shadow-sm cursor-pointer text-left flex items-center justify-between font-['Satoshi'] ${open ? 'ring-2 ring-primary-button' : ''}`}> 
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
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-primary mb-1 font-['Satoshi']">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  className="pl-10 appearance-none rounded-xl relative block w-full px-4 py-3 border border-white/40 bg-white/50 placeholder-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary-button focus:border-transparent sm:text-sm transition-all duration-200 font-['Satoshi']"
                  placeholder="••••••••"
                />
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
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-primary mb-1 font-['Satoshi']">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-10 appearance-none rounded-xl relative block w-full px-4 py-3 border border-white/40 bg-white/50 placeholder-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary-button focus:border-transparent sm:text-sm transition-all duration-200 font-['Satoshi']"
                  placeholder="••••••••"
                />
              </div>
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
                className={`w-full flex justify-center py-3 px-4 rounded-xl text-sm font-medium text-white bg-primary-button hover:bg-[#23424A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-button shadow-sm transition-all duration-300 font-['Satoshi'] ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
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
          
          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/40"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white/30 text-secondary font-['Satoshi']">
                Or sign up with
              </span>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div>
              <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-white/40 rounded-xl shadow-sm bg-white/30 hover:bg-white/50 text-sm font-medium text-secondary transition-colors duration-200 font-['Satoshi']">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <div>
              <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-white/40 rounded-xl shadow-sm bg-white/30 hover:bg-white/50 text-sm font-medium text-secondary transition-colors duration-200 font-['Satoshi']">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="text-center text-sm mt-4 text-secondary font-['Satoshi']">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-secondary hover:text-primary-button hover:underline transition-colors duration-200">
              Sign in
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;