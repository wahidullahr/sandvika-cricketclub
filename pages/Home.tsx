
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { MOCK_MATCHES, MOCK_NEWS, LEAGUE_TABLE } from '../constants';

interface HomeProps {
  lang: Language;
  t: (key: string) => string;
}

const Home: React.FC<HomeProps> = ({ lang, t }) => {
  const liveMatch = MOCK_MATCHES.find(m => m.status === 'live');
  const upcomingMatches = MOCK_MATCHES.filter(m => m.status === 'upcoming');

  return (
    <div className="bg-surface min-h-screen">
      {/* Featured News Hero - Massive scale */}
      <section className="bg-white border-b border-border shadow-md">
        <div className="container-wide px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 group relative overflow-hidden bg-primary aspect-[21/9] lg:aspect-auto h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=1600" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" 
                alt="Main story"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-12 flex flex-col justify-end">
                <span className="bg-accent text-primary px-5 py-2 text-xs font-black tracking-widest w-fit mb-6">FEATURED STORY</span>
                <h2 className="text-5xl md:text-7xl font-heading text-white mb-6 uppercase leading-[0.9] font-black">2024 REGISTRATION <br/>NOW OFFICIALLY OPEN</h2>
                <p className="text-gray-300 text-xl mb-8 max-w-2xl hidden md:block italic">Secure your spot for the upcoming season. All teams from U11 to First XI are accepting new players.</p>
                <Link to="/membership" className="bg-secondary text-white px-10 py-4 font-heading text-2xl font-bold hover:bg-white hover:text-primary transition-all w-fit shadow-2xl">REGISTER TODAY</Link>
              </div>
            </div>
            
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="section-header">
                <h3 className="text-2xl text-primary leading-none">LATEST CLUB NEWS</h3>
              </div>
              {MOCK_NEWS.map(news => (
                <Link key={news.id} to="/news" className="flex bg-white border border-border group hover:border-secondary transition-all play-cricket-shadow">
                  <div className="w-1/3 overflow-hidden">
                    <img src={news.image} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                  </div>
                  <div className="w-2/3 p-6 flex flex-col justify-center">
                    <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2">{news.date}</span>
                    <h3 className="font-heading text-2xl text-primary leading-none group-hover:text-secondary transition-colors uppercase font-bold">
                      {news.title[lang]}
                    </h3>
                  </div>
                </Link>
              ))}
              <div className="bg-primary p-8 flex flex-col justify-center text-white flex-grow border-b-8 border-accent">
                <h3 className="font-heading text-3xl mb-4 font-black">VOLUNTEERS NEEDED</h3>
                <p className="text-base mb-6 text-gray-300">We are looking for scorers and umpires for the summer league. Training provided.</p>
                <Link to="/contact" className="bg-accent text-primary text-center py-3 font-bold text-lg hover:bg-white transition-all uppercase tracking-widest">GET INVOLVED</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Match Center Dashboard */}
      <section className="container-wide px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Live/Recent Scorecard - Huge scale */}
            <div className="bg-white border border-border play-cricket-shadow">
              <div className="bg-primary px-8 py-5 flex justify-between items-center border-b-4 border-secondary">
                <h2 className="text-white font-heading text-2xl tracking-tight">OFFICIAL MATCH CENTRE</h2>
                <Link to="/schedule" className="text-accent hover:text-white text-xs font-black tracking-widest flex items-center transition-colors">
                  VIEW ALL FIXTURES <span className="material-icons text-base ml-2">trending_flat</span>
                </Link>
              </div>
              
              {liveMatch && (
                <div className="p-12 border-b border-border bg-white">
                  <div className="flex justify-between items-center mb-10">
                    <div className="flex items-center">
                       <span className="text-sm font-black text-secondary tracking-[0.2em] uppercase mr-4">ELITE DIVISION 1</span>
                       <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">• ROUND 4</span>
                    </div>
                    <span className="flex items-center space-x-3 bg-red-600 text-white px-5 py-2 text-xs font-black animate-pulse">
                      <span className="w-3 h-3 bg-white rounded-full"></span>
                      <span className="tracking-widest">LIVE SCORE</span>
                    </span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="text-center md:text-left flex-1">
                      <p className="font-heading text-5xl text-primary font-black mb-2 leading-none">{liveMatch.teamA}</p>
                      <p className="text-6xl font-black text-secondary leading-none">
                        {liveMatch.scoreA}/5 <span className="text-lg text-gray-400 font-bold uppercase tracking-widest ml-4">(24.2 OVERS)</span>
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-center px-10">
                      <div className="text-gray-200 font-heading text-4xl italic font-black leading-none">VS</div>
                      <div className="h-16 w-px bg-gray-100 my-4"></div>
                      <p className="text-xs text-gray-400 font-black uppercase tracking-[0.3em]">
                        {liveMatch.venue}
                      </p>
                    </div>

                    <div className="text-center md:text-right flex-1">
                      <p className="font-heading text-5xl text-primary font-black mb-2 leading-none">{liveMatch.teamB}</p>
                      <p className="text-6xl font-black text-secondary leading-none">
                        {liveMatch.scoreB}/10 <span className="text-lg text-gray-400 font-bold uppercase tracking-widest ml-4">ALL OUT</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap justify-between items-center gap-6">
                    <div className="flex space-x-8">
                       <div className="text-xs font-bold"><span className="text-gray-400 uppercase tracking-widest mr-2">TOSS:</span> <span className="text-primary uppercase">SANDVIKA CC WON AND CHOSE TO BAT</span></div>
                    </div>
                    <Link to="/schedule" className="bg-primary text-white px-10 py-4 font-heading text-xl font-bold hover:bg-secondary transition-all uppercase tracking-widest shadow-lg">VIEW FULL SCORECARD</Link>
                  </div>
                </div>
              )}

              {/* List of sub-matches */}
              <div className="divide-y divide-border">
                {upcomingMatches.slice(0, 4).map(m => (
                  <div key={m.id} className="p-8 flex items-center justify-between hover:bg-surface transition-all group cursor-pointer">
                    <div className="flex items-center space-x-10">
                      <div className="text-center bg-gray-50 border border-border p-4 w-24">
                        <p className="text-[11px] font-black text-gray-400 uppercase tracking-tighter mb-1">{new Date(m.date).toLocaleDateString(lang, {month:'short'})}</p>
                        <p className="text-4xl font-heading text-primary leading-none font-black">{new Date(m.date).toLocaleDateString(lang, {day:'numeric'})}</p>
                      </div>
                      <div>
                        <p className="text-xs font-black text-secondary uppercase tracking-[0.2em] mb-2">{m.eventType} • {m.time}</p>
                        <h4 className="font-heading text-3xl text-primary uppercase font-bold group-hover:text-secondary transition-colors">{m.teamA} v {m.teamB}</h4>
                        <p className="text-[11px] text-gray-400 font-bold uppercase mt-1 tracking-widest">VENUE: {m.venue}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex flex-col items-end">
                      <button className="bg-white border border-gray-300 px-6 py-2 text-xs font-black uppercase tracking-widest group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">MATCH PREVIEW</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Column: Widgets - Scaled up */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* League Table - More robust */}
            <div className="bg-white border border-border play-cricket-shadow overflow-hidden">
              <div className="bg-primary px-8 py-5 flex justify-between items-center">
                <h2 className="text-white font-heading text-2xl tracking-tight">LEAGUE TABLE</h2>
                <span className="text-[10px] font-bold text-white/50 tracking-widest">DIV 1 • 2024</span>
              </div>
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-100 border-b border-border text-[11px] font-black text-gray-500 uppercase tracking-widest">
                    <th className="px-6 py-4">POS</th>
                    <th className="px-6 py-4">TEAM</th>
                    <th className="px-6 py-4 text-center">P</th>
                    <th className="px-6 py-4 text-center">W</th>
                    <th className="px-6 py-4 text-right">PTS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {LEAGUE_TABLE.map((row) => (
                    <tr key={row.pos} className={`${row.team === 'Sandvika CC' ? 'bg-secondary/10 border-l-4 border-l-secondary' : ''} hover:bg-surface transition-colors`}>
                      <td className="px-6 py-5 font-black text-gray-400 text-sm">{row.pos}</td>
                      <td className="px-6 py-5 font-black text-primary text-base uppercase">{row.team}</td>
                      <td className="px-6 py-5 font-bold text-gray-600 text-center">{row.p}</td>
                      <td className="px-6 py-5 font-bold text-gray-600 text-center">{row.w}</td>
                      <td className="px-6 py-5 font-black text-primary text-right text-lg">{row.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-6 bg-gray-50 border-t border-border">
                <Link to="/schedule" className="block text-center text-xs font-black text-gray-400 uppercase hover:text-primary tracking-widest transition-colors">VIEW FULL LEAGUE STANDINGS</Link>
              </div>
            </div>

            {/* Performance Widget */}
            <div className="bg-white border border-border play-cricket-shadow p-8">
              <div className="section-header">
                <h2 className="text-2xl text-primary leading-none">TOP PERFORMERS</h2>
              </div>
              <div className="space-y-6">
                 {[
                   { name: 'R. KUMAR', stat: '452 RUNS', label: 'Orange Cap Leader' },
                   { name: 'S. NORDMANN', stat: '15 WICKETS', label: 'Top Wicket Taker' }
                 ].map((p, i) => (
                   <div key={i} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                     <div>
                       <p className="font-heading text-xl text-primary font-bold">{p.name}</p>
                       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{p.label}</p>
                     </div>
                     <p className="font-heading text-2xl text-secondary font-black">{p.stat}</p>
                   </div>
                 ))}
              </div>
            </div>

            {/* Club Shop Ad */}
            <div className="relative overflow-hidden bg-accent p-10 h-64 flex flex-col justify-center border-t-8 border-primary">
               <div className="relative z-10">
                 <h3 className="font-heading text-4xl font-black text-primary leading-none mb-4">OFFICIAL <br/>CLUB KIT</h3>
                 <p className="text-primary font-bold text-sm mb-6 uppercase tracking-widest opacity-70">Order for the new season</p>
                 <button className="bg-primary text-white px-8 py-3 font-bold text-sm hover:bg-white hover:text-primary transition-all uppercase tracking-[0.2em]">BROWSE SHOP</button>
               </div>
               <span className="material-icons absolute -right-4 -bottom-4 text-[180px] text-primary/10 rotate-12">checkroom</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
