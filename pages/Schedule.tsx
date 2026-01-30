
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { MOCK_MATCHES } from '../constants';

interface ScheduleProps {
  lang: Language;
  t: (key: string) => string;
}

const Schedule: React.FC<ScheduleProps> = ({ lang, t }) => {
  const [filter, setFilter] = useState('all');

  const filteredMatches = MOCK_MATCHES.filter(m => {
    if (filter === 'all') return true;
    return m.status === filter;
  });

  return (
    <div className="bg-surface min-h-screen py-16">
      <div className="container-wide px-4">
        <div className="section-header flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h1 className="text-6xl text-primary uppercase leading-none font-black tracking-tighter">FIXTURES & RESULTS</h1>
            <p className="text-sm font-black text-gray-400 uppercase tracking-[0.3em] mt-2">Sandvika CC • 2024 Season Dashboard</p>
          </div>
          <div className="bg-white border border-border p-2 shadow-sm">
            <select className="bg-white border-0 text-xs font-black uppercase px-6 py-2 focus:outline-none cursor-pointer">
              <option>Season: 2024</option>
              <option>Season: 2023</option>
              <option>Season: 2022</option>
            </select>
          </div>
        </div>

        {/* Enhanced Filter Bar */}
        <div className="bg-white border-t-4 border-primary play-cricket-shadow p-6 mb-12 flex flex-wrap gap-8 items-center border border-border">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Competition Status</span>
            <div className="flex space-x-2">
              {['all', 'upcoming', 'live', 'completed'].map((f) => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-8 py-2.5 font-heading text-sm font-bold uppercase transition-all tracking-widest border ${filter === f ? 'bg-primary text-white border-primary' : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Select Team</span>
            <select className="bg-gray-50 border border-gray-200 text-xs font-bold uppercase px-6 py-2.5 focus:outline-none w-48">
              <option>All Sandvika Teams</option>
              <option>First XI</option>
              <option>Second XI</option>
              <option>U15 Academy</option>
            </select>
          </div>

          <div className="ml-auto hidden lg:block">
             <button className="flex items-center space-x-3 text-primary hover:text-secondary transition-colors font-black text-xs uppercase tracking-widest">
               <span className="material-icons">download</span>
               <span>Export to iCal</span>
             </button>
          </div>
        </div>

        {/* Large Professional Cricket Match Table */}
        <div className="bg-white border border-border play-cricket-shadow overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary border-b border-border text-[11px] font-black text-white uppercase tracking-widest">
                <th className="px-10 py-5">MATCH DATE</th>
                <th className="px-10 py-5">HOME TEAM</th>
                <th className="px-10 py-5 text-center">MATCH STATUS / RESULT</th>
                <th className="px-10 py-5 text-right">AWAY TEAM</th>
                <th className="px-10 py-5">VENUE</th>
                <th className="px-10 py-5 text-right">SCORECARD</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredMatches.map((match) => (
                <tr key={match.id} className="hover:bg-surface transition-all group border-l-4 border-l-transparent hover:border-l-secondary">
                  <td className="px-10 py-8 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="text-primary font-black text-2xl font-heading leading-none">
                        {new Date(match.date).toLocaleDateString(lang, { day: 'numeric', month: 'long' })}
                      </span>
                      <span className="text-xs font-black text-gray-400 uppercase tracking-widest mt-2">{match.time} • {match.eventType}</span>
                    </div>
                  </td>
                  <td className="px-10 py-8">
                    <span className={`font-heading text-3xl uppercase font-black tracking-tighter ${match.teamA === 'Sandvika CC' ? 'text-primary' : 'text-gray-500'}`}>
                      {match.teamA}
                    </span>
                  </td>
                  <td className="px-10 py-8 text-center min-w-[250px]">
                    {match.status === 'upcoming' ? (
                      <div className="flex flex-col items-center">
                        <span className="bg-gray-100 text-gray-400 font-heading text-2xl px-8 py-2 italic font-black">VERSUS</span>
                        <p className="text-[10px] text-gray-400 mt-2 font-black uppercase tracking-widest">FIXTURE PENDING</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <div className="flex items-center space-x-4">
                           <span className="bg-primary text-white font-heading text-4xl px-8 py-3 italic font-black shadow-lg">
                             {match.scoreA} - {match.scoreB}
                           </span>
                        </div>
                        {match.status === 'live' ? (
                          <div className="flex items-center mt-3 bg-red-600 px-3 py-1 animate-pulse">
                            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                            <span className="text-[10px] font-black text-white uppercase tracking-widest">IN PROGRESS</span>
                          </div>
                        ) : (
                          <span className="text-[10px] font-black text-gray-400 mt-2 uppercase tracking-widest">FINAL RESULT</span>
                        )}
                      </div>
                    )}
                  </td>
                  <td className="px-10 py-8 text-right">
                    <span className={`font-heading text-3xl uppercase font-black tracking-tighter ${match.teamB === 'Sandvika CC' ? 'text-primary' : 'text-gray-500'}`}>
                      {match.teamB}
                    </span>
                  </td>
                  <td className="px-10 py-8 whitespace-nowrap">
                    <div className="flex items-center text-sm font-black text-gray-500 uppercase tracking-tighter">
                      <span className="material-icons text-xl mr-2 text-secondary">stadium</span>
                      {match.venue}
                    </div>
                  </td>
                  <td className="px-10 py-8 text-right">
                    <button className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-black text-xs uppercase tracking-[0.2em] px-8 py-3 transition-all shadow-sm active:scale-95">
                      FULL STATS
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredMatches.length === 0 && (
            <div className="py-32 text-center bg-gray-50">
              <span className="material-icons text-gray-200 text-8xl mb-6">sports_score</span>
              <p className="font-heading text-4xl text-gray-400 uppercase font-black italic">No records found for this period</p>
              <button onClick={() => setFilter('all')} className="mt-8 text-secondary font-black border-b-2 border-secondary hover:text-primary transition-colors uppercase tracking-widest">RESET ALL FILTERS</button>
            </div>
          )}
        </div>

        {/* Professional Table Legend Footer */}
        <div className="mt-12 bg-white border border-border p-8 flex flex-wrap justify-between items-center shadow-sm">
           <div className="flex space-x-12">
             <div className="flex items-center text-[11px] font-black text-gray-500 uppercase tracking-[0.15em]">
               <span className="w-5 h-5 bg-primary mr-3 shadow-inner"></span> Official Result
             </div>
             <div className="flex items-center text-[11px] font-black text-gray-500 uppercase tracking-[0.15em]">
               <span className="w-5 h-5 bg-red-600 mr-3 shadow-inner"></span> Live Updating
             </div>
             <div className="flex items-center text-[11px] font-black text-gray-500 uppercase tracking-[0.15em]">
               <span className="w-5 h-5 bg-gray-100 border border-gray-200 mr-3 shadow-inner"></span> Scheduled Fixture
             </div>
           </div>
           <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-6 lg:mt-0 italic">All times local Norwegian time (CET).</p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
