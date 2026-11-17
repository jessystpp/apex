import React, { useState, useEffect } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuspended, setIsSuspended] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Get better with money",
      desc: "Apex Markets Pro helps you set saving goals, earn cash back offers. Go to disclaimer for more details and get paychecks up to two days early. Get a £20 bonus when you receive qualifying direct deposits"
    },
    {
      title: "Zero hidden transaction fees",
      desc: "Send and receive payments globally with real-time exchange rates and complete transparency on every single transfer."
    },
    {
      title: "Smart automated savings",
      desc: "Round up your spare change on daily purchases and watch your wealth grow automatically with high-yield interest vaults."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuspended(true);
    }, 4000);
  };

  const handleSuspendedTrigger = () => {
    setIsSuspended(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-0 md:p-6 lg:p-10 font-sans select-none">
      {/* Main Container Card */}
      <div className="w-full max-w-[1440px] min-h-screen md:min-h-[820px] bg-white md:rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        
        {/* ========================================== */}
        {/* LEFT COLUMN: AUTHENTICATION FORM          */}
        {/* ========================================== */}
        <section className="w-full lg:w-[50%] p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-between bg-white">
          
          {/* Logo */}
          <header className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#1F53F3] flex items-center justify-center shadow-sm relative overflow-hidden">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-gray-900">
              Apex Markets <span className="text-[#1F53F3]">Pro</span>
            </span>
          </header>

          {/* Form Content */}
          <div className="w-full max-w-[430px] mx-auto my-10 lg:my-0">
            <div className="text-center mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                Sign in to Apex Markets Pro
              </h1>
              <p className="text-sm text-gray-400 mt-2 font-medium">
                Send, spend and save smarter
              </p>
            </div>

            {/* Account Suspended Alert Banner */}
            {isSuspended && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3 text-left animate-shake">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  ✕
                </div>
                <div>
                  <div className="text-xs font-bold text-red-800">Account suspended</div>
                  <div className="text-[11px] text-red-600 mt-0.5 leading-snug">
                    Your account access has been suspended. Please contact customer support for further assistance.
                  </div>
                </div>
              </div>
            )}

            {/* Social Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-7">
              <button
                type="button"
                onClick={handleSuspendedTrigger}
                className="flex items-center justify-center gap-2.5 px-4 py-3 border border-gray-200 rounded-xl text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 active:scale-[0.98] transition"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Sign in with Google</span>
              </button>

              <button
                type="button"
                onClick={handleSuspendedTrigger}
                className="flex items-center justify-center gap-2.5 px-4 py-3 border border-gray-200 rounded-xl text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 active:scale-[0.98] transition"
              >
                <svg className="w-4 h-4 fill-current text-gray-900 shrink-0" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.07 1.71-.94 2.74 1 .08 2.03-.51 2.65-1.24z"/>
                </svg>
                <span>Sign in with Apple</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative flex items-center justify-center mb-7">
              <div className="border-t border-gray-200 w-full" />
              <span className="bg-white px-4 text-xs font-medium text-gray-400 absolute">
                Or with email
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1F53F3]/20 focus:border-[#1F53F3] transition"
                />
              </div>

              <div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    className={`w-full px-4 py-3.5 pr-12 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1F53F3]/20 focus:border-[#1F53F3] transition ${
                      !showPassword ? 'tracking-widest' : ''
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition p-1"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me & Forgot Password */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 rounded-full border border-gray-300 peer-checked:bg-[#1F53F3] peer-checked:border-[#1F53F3] flex items-center justify-center transition">
                    <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">Remember me</span>
                </label>

                <a href="#forgot" className="text-xs sm:text-sm font-bold text-[#1F53F3] hover:underline">
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-4 bg-[#1F53F3] hover:bg-[#1847D8] text-white font-semibold rounded-xl shadow-md hover:shadow-lg active:scale-[0.99] transition duration-150 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <span>Signing in...</span>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    </>
                  ) : (
                    <span>Sign In</span>
                  )}
                </button>
              </div>

              <p className="text-center text-xs sm:text-sm text-gray-500 pt-3 font-medium">
                Don't have an account?{' '}
                <a href="#signup" onClick={handleSuspendedTrigger} className="font-bold text-gray-900 hover:text-[#1F53F3] transition ml-0.5">
                  Sign Up
                </a>
              </p>
            </form>
          </div>

          {/* Footer */}
          <footer className="flex items-center justify-between text-xs text-gray-400 font-medium pt-8 border-t border-gray-100 lg:border-none">
            <a href="#privacy" className="hover:text-gray-600 transition">Privacy Policy</a>
            <span>Copyright 2022</span>
          </footer>
        </section>

        {/* ========================================== */}
        {/* RIGHT COLUMN: FINTECH SHOWCASE PANEL       */}
        {/* ========================================== */}
        <section className="w-full lg:w-[50%] bg-[#1F53F3] p-8 sm:p-12 lg:p-14 xl:p-16 flex flex-col justify-between relative overflow-hidden text-white">
          
          {/* Subtle decorative dot grids */}
          <div className="absolute top-6 right-6 w-28 h-28 opacity-70 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.35) 1.5px, transparent 1.5px)', backgroundSize: '14px 14px' }} />
          <div className="absolute bottom-6 left-6 w-28 h-28 opacity-50 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.35) 1.5px, transparent 1.5px)', backgroundSize: '14px 14px' }} />

          {/* Central Floating Mockup Group */}
          <div className="relative w-full max-w-[440px] mx-auto my-auto pt-4 pb-8 z-10">
            
            {/* Main "Send Money" Card */}
            <div className="bg-white rounded-3xl p-6 text-gray-800 shadow-[0_24px_50px_-12px_rgba(15,23,42,0.18)] relative z-10">
              <div className="text-center mb-5">
                <h2 className="text-base font-bold text-gray-900">Send Money</h2>
                <p className="text-[10px] text-gray-400 mt-0.5 max-w-[240px] mx-auto leading-tight">
                  Please enter your information that you want to send money to recent contacts
                </p>
              </div>

              {/* Contacts Row */}
              <div className="mb-5">
                <div className="text-[11px] font-bold text-gray-700 mb-2.5">Recent Contact</div>
                <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1">
                  <div className="flex flex-col items-center gap-1 cursor-pointer group shrink-0">
                    <div className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 group-hover:border-[#1F53F3] group-hover:text-[#1F53F3] transition">
                      +
                    </div>
                    <span className="text-[10px] text-gray-500 font-medium">Add</span>
                  </div>

                  <div className="flex flex-col items-center gap-1 cursor-pointer shrink-0">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces" alt="Fransisca" className="w-10 h-10 rounded-full object-cover" />
                    <span className="text-[10px] text-gray-700 font-medium">Fransisca</span>
                  </div>

                  <div className="flex flex-col items-center gap-1 cursor-pointer shrink-0">
                    <div className="relative">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" alt="Candis S" className="w-10 h-10 rounded-full object-cover ring-2 ring-[#1F53F3] ring-offset-2" />
                      <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#1F53F3] rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white text-[8px]">✓</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-gray-900 font-bold">Candis S</span>
                  </div>

                  <div className="flex flex-col items-center gap-1 cursor-pointer shrink-0">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces" alt="Ricardo" className="w-10 h-10 rounded-full object-cover" />
                    <span className="text-[10px] text-gray-700 font-medium">Ricardo</span>
                  </div>

                  <div className="flex flex-col items-center gap-1 cursor-pointer shrink-0">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces" alt="Tanner S" className="w-10 h-10 rounded-full object-cover" />
                    <span className="text-[10px] text-gray-700 font-medium">Tanner S</span>
                  </div>
                </div>
              </div>

              {/* Payment Method Selector & Mini Card */}
              <div>
                <div className="text-[11px] font-bold text-gray-700 mb-2">Choose Method</div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <div className="p-2.5 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-3.5 bg-blue-900 rounded-sm flex items-center justify-center text-[7px] text-white font-extrabold italic">VISA</div>
                        <span className="text-[10px] font-semibold text-gray-800">Visa card</span>
                      </div>
                      <span className="text-gray-400 text-xs">▼</span>
                    </div>

                    <div class="p-2 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-between">
                      <span className="text-[11px] font-bold text-gray-800">£1,240</span>
                      <div className="flex items-center gap-1">
                        <span className="text-[9px] text-gray-400 font-bold">GBP</span>
                        <span className="text-xs">🇬🇧</span>
                      </div>
                    </div>
                  </div>

                  {/* Visa Mini Card */}
                  <div className="bg-gradient-to-tr from-[#163BB0] to-[#1F53F3] rounded-xl p-3 text-white flex flex-col justify-between shadow-sm relative overflow-hidden h-[84px]">
                    <div className="flex items-center justify-between">
                      <div className="w-4 h-3 bg-yellow-300/80 rounded-sm border border-yellow-400" />
                      <span className="text-[9px] font-black italic tracking-wider">VISA</span>
                    </div>
                    <div>
                      <div className="text-[9px] font-medium text-blue-200">25,050.50 GBP</div>
                      <div className="text-[8px] font-mono tracking-widest text-white/90">•••• 2468</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Floating Card 1: Total Balance */}
            <div className="absolute -top-3 sm:-top-5 -right-3 sm:-right-6 bg-white rounded-2xl p-3.5 sm:p-4 shadow-[0_24px_50px_-12px_rgba(15,23,42,0.18)] z-20 border border-gray-100/80 min-w-[170px] sm:min-w-[195px] text-gray-900">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider">Total Balance</span>
                <span className="bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold">
                  +1.85%
                </span>
              </div>
              <div className="text-base sm:text-lg font-extrabold text-gray-900 tracking-tight">
                £56,476.00 <span className="text-xs font-semibold text-gray-400">GBP</span>
              </div>
              <div className="text-[9px] text-gray-400 font-medium mt-1">
                February 20, 2022
              </div>
            </div>

            {/* Floating Card 2: Daniel Chip */}
            <div className="absolute top-[48%] -left-3 sm:-left-7 bg-white rounded-2xl py-2 px-3 shadow-[0_12px_30px_-6px_rgba(15,23,42,0.14)] z-20 border border-gray-100/90 flex items-center gap-2.5">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=faces" alt="Daniel" className="w-8 h-8 rounded-full object-cover" />
              <div>
                <div className="text-xs font-bold text-gray-900 leading-tight">Daniel</div>
                <div className="text-[9px] text-gray-400 font-medium">Payment received</div>
              </div>
              <div className="ml-2 bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full text-xs font-bold">
                +£10.00
              </div>
            </div>

          </div>

          {/* Bottom Promotional Carousel */}
          <div className="text-center max-w-[460px] mx-auto z-10 pt-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {slides[activeSlide].title}
            </h2>
            <p className="text-xs sm:text-sm text-blue-100/90 mt-3 font-normal leading-relaxed">
              {slides[activeSlide].desc}
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`transition-all duration-300 ${
                    i === activeSlide ? 'h-1.5 w-6 rounded-full bg-white' : 'h-1.5 w-1.5 rounded-full bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </section>

      </div>

      {/* Account Suspended Modal */}
      {isSuspended && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm sm:max-w-md w-full p-6 sm:p-8 shadow-2xl text-center border border-gray-100">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center shadow-inner text-2xl font-bold">
              ⚠️
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Account suspended</h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-2.5 mb-6 leading-relaxed">
              Your account has been suspended due to security compliance and verification requirements. Please contact customer support to restore access.
            </p>
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={() => setIsSuspended(false)}
                className="w-full py-3.5 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition"
              >
                Contact Customer Support
              </button>
              <button
                type="button"
                onClick={() => setIsSuspended(false)}
                className="w-full py-2.5 px-4 text-gray-400 hover:text-gray-700 font-semibold text-xs transition"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
