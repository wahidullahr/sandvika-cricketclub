
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from './types';
import { TRANSLATIONS } from './constants';
import Home from './pages/Home';
import About from './pages/About';
import Membership from './pages/Membership';
import Schedule from './pages/Schedule';
import News from './pages/News';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'no' : 'en');
  };

  const t = (key: string) => TRANSLATIONS[key]?.[lang] || key;

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-body bg-surface text-textPrimary">
        {/* Single Consolidated Header */}
        <header className="sticky top-0 w-full z-50 bg-primary border-b-4 border-accent shadow-2xl">
          <div className="container-wide px-4 h-24 flex justify-between items-center">
            {/* Logo Section */}
            <Link to="/" className="flex items-center group h-full">
              <div className="w-16 h-16 bg-white flex items-center justify-center text-primary mr-5 group-hover:bg-accent transition-colors">
                <span className="material-icons text-5xl">sports_cricket</span>
              </div>
              <div className="flex flex-col">
                <h1 className="font-heading text-4xl leading-none text-white tracking-tighter">SANDVIKA CC</h1>
                <p className="text-[10px] font-black text-accent tracking-[0.3em] uppercase -mt-0.5">Play Cricket Member</p>
              </div>
            </Link>

            {/* Main Navigation Links */}
            <nav className="hidden lg:flex h-full items-center">
              <div className="flex h-full">
                <NavLink to="/">{t('home')}</NavLink>
                <NavLink to="/schedule">{t('schedule')}</NavLink>
                <NavLink to="/news">{t('news')}</NavLink>
                <NavLink to="/membership">{t('membership')}</NavLink>
                <NavLink to="/about">{t('about')}</NavLink>
                <NavLink to="/contact">{t('contact')}</NavLink>
              </div>
            </nav>

            {/* Utility Section: Language & Login */}
            <div className="flex items-center space-x-6">
              <button 
                onClick={toggleLang} 
                className="text-white hover:text-accent font-black text-xs uppercase tracking-widest transition-colors border border-white/20 px-3 py-1.5"
              >
                {lang === 'en' ? 'NO' : 'EN'}
              </button>
              <div className="h-8 w-px bg-white/20"></div>
              <a href="#" className="text-white hover:text-accent font-black text-sm uppercase tracking-widest transition-colors flex items-center">
                <span className="material-icons mr-2 text-base">login</span>
                LOGIN
              </a>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home lang={lang} t={t} />} />
              <Route path="/about" element={<About lang={lang} t={t} />} />
              <Route path="/membership" element={<Membership lang={lang} t={t} />} />
              <Route path="/schedule" element={<Schedule lang={lang} t={t} />} />
              <Route path="/news" element={<News lang={lang} t={t} />} />
              <Route path="/contact" element={<Contact lang={lang} t={t} />} />
            </Routes>
          </AnimatePresence>
        </main>

        {/* Institutional Footer - Updated to Primary Blue */}
        <footer className="bg-primary text-white pt-24 border-t-8 border-accent">
          <div className="container-wide px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 border-b border-white/10 pb-24">
              <div className="col-span-1 md:col-span-1">
                <div className="flex items-center mb-10">
                  <span className="material-icons text-accent text-6xl mr-4">sports_cricket</span>
                  <span className="font-heading font-bold text-4xl tracking-tighter">SANDVIKA CC</span>
                </div>
                <p className="text-white/70 text-xs leading-relaxed mb-10 uppercase tracking-[0.2em] font-black">
                  The Official Play-Cricket Hub for Sandvika
                </p>
                <div className="flex space-x-6">
                   <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                     <i className="material-icons text-xl">facebook</i>
                   </a>
                   <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                     <i className="material-icons text-xl">alternate_email</i>
                   </a>
                </div>
              </div>

              <div>
                <h3 className="font-heading font-bold mb-10 text-2xl text-accent border-b border-white/10 pb-4 uppercase">Cricket</h3>
                <ul className="space-y-5 text-white/70 text-xs font-bold uppercase tracking-[0.15em]">
                  <li><Link to="/schedule" className="hover:text-accent transition-colors">Fixtures & Results</Link></li>
                  <li><Link to="/schedule" className="hover:text-accent transition-colors">League Tables</Link></li>
                  <li><Link to="/news" className="hover:text-accent transition-colors">Averages & Stats</Link></li>
                  <li><Link to="/news" className="hover:text-accent transition-colors">Player Availability</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading font-bold mb-10 text-2xl text-accent border-b border-white/10 pb-4 uppercase">The Club</h3>
                <ul className="space-y-5 text-white/70 text-xs font-bold uppercase tracking-[0.15em]">
                  <li><Link to="/about" className="hover:text-accent transition-colors">Constitution</Link></li>
                  <li><Link to="/membership" className="hover:text-accent transition-colors">Membership Fees</Link></li>
                  <li><Link to="/about" className="hover:text-accent transition-colors">Child Safeguarding</Link></li>
                  <li><Link to="/contact" className="hover:text-accent transition-colors">Sponsor Packages</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading font-bold mb-10 text-2xl text-accent border-b border-white/10 pb-4 uppercase">Connect</h3>
                <ul className="space-y-5 text-white/70 text-xs font-bold uppercase tracking-[0.15em]">
                  <li className="flex items-center"><span className="material-icons text-lg mr-3 text-accent">email</span> post@sandvikacricket.no</li>
                  <li className="flex items-center"><span className="material-icons text-lg mr-3 text-accent">phone</span> +47 400 00 000</li>
                  <li className="flex items-center"><span className="material-icons text-lg mr-3 text-accent">location_on</span> Kadettangen, Bærum</li>
                </ul>
              </div>
            </div>
            
            <div className="py-12 flex flex-col md:flex-row justify-between items-center text-white/40 text-[11px] font-bold uppercase tracking-[0.2em]">
              <div className="flex space-x-12 mb-8 md:mb-0">
                <span>© {new Date().getFullYear()} Sandvika Cricket Klubb</span>
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
                <a href="#" className="hover:text-white">Cookies</a>
              </div>
              <div className="flex items-center space-x-4 grayscale opacity-40">
                <span className="text-xs text-white">POWERED BY PLAY-CRICKET</span>
                <span className="h-6 w-px bg-white/20"></span>
                <span className="text-xs text-white">NCF</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={`relative px-8 flex items-center font-heading text-xl font-bold transition-all hover:bg-white/10 uppercase tracking-widest h-full ${isActive ? 'text-accent' : 'text-white'}`}
    >
      {children}
      {isActive && (
        <div className="absolute bottom-0 left-8 right-8 h-1 bg-accent" />
      )}
    </Link>
  );
};

export default App;
