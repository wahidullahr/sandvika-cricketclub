
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';

interface MembershipProps { lang: Language; t: (key: string) => string; }

const Membership: React.FC<MembershipProps> = ({ lang, t }) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-surface min-h-screen py-24">
      <div className="container-wide px-4">
        <div className="section-header mb-16">
          <p className="text-secondary font-black tracking-[0.3em] uppercase text-xs mb-3">Club Registration</p>
          <h1 className="text-6xl font-heading font-black text-primary uppercase leading-none tracking-tighter">PLAYER & FAMILY {t('membership')}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-12">
            <div className="bg-white border-t-8 border-primary p-12 play-cricket-shadow border border-border">
               <h3 className="text-3xl font-heading font-black text-primary mb-8 uppercase underline decoration-secondary decoration-4 underline-offset-8">MEMBER BENEFITS</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {[
                    { title: 'PRO COACHING', desc: 'Direct access to level 3 certified coaches and performance analytics.', icon: 'analytics' },
                    { title: 'LEAGUE PLAY', desc: 'Guaranteed match placement in regional and national NCF leagues.', icon: 'military_tech' },
                    { title: 'CLUB LOUNGE', desc: 'Exclusive access to our clubhouse facilities and member bar.', icon: 'meeting_room' },
                    { title: 'KIT PACKAGE', desc: 'Significant discounts on official club jerseys and protective gear.', icon: 'shopping_bag' }
                  ].map((b, i) => (
                    <div key={i} className="flex items-start space-x-6">
                      <div className="w-16 h-16 shrink-0 bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                        <span className="material-icons text-4xl">{b.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-heading font-bold mb-2 uppercase">{b.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium">{b.desc}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-white p-12 border border-border shadow-md">
               <h3 className="text-3xl font-heading font-black text-primary mb-10 uppercase">ANNUAL SUBSCRIPTIONS</h3>
               <div className="space-y-6">
                 {[
                   { type: 'SENIOR PLAYER', price: 'NOK 1,500', note: 'Includes match fees for all Sunday League games' },
                   { type: 'JUNIOR ACADEMY', price: 'NOK 850', note: 'Ages 8-16. Includes Saturday coaching sessions' },
                   { type: 'FAMILY PACKAGE', price: 'NOK 3,200', note: 'Up to 2 adults and 3 children. Best value.' },
                   { type: 'SOCIAL MEMBER', price: 'NOK 500', note: 'Clubhouse access and voting rights. Non-playing.' }
                 ].map((tier, i) => (
                   <div key={i} className="flex justify-between items-center p-8 bg-surface border border-border group hover:bg-primary transition-all">
                     <div>
                       <p className="font-heading text-2xl font-black text-primary group-hover:text-white uppercase">{tier.type}</p>
                       <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1 group-hover:text-white/60">{tier.note}</p>
                     </div>
                     <div className="text-right">
                       <p className="font-heading text-3xl font-black text-secondary group-hover:text-accent">{tier.price}</p>
                       <p className="text-[10px] text-gray-400 uppercase font-black tracking-tighter group-hover:text-white/40">PER ANNUM</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-32 bg-primary text-white p-12 border-b-8 border-accent shadow-2xl">
              {submitted ? (
                <div className="text-center py-20">
                  <span className="material-icons text-8xl text-accent mb-8">how_to_reg</span>
                  <h2 className="text-5xl font-heading font-black mb-6 uppercase leading-none">APPLICATION <br/>RECEIVED</h2>
                  <p className="text-gray-300 text-lg italic mb-10 leading-relaxed">Our registrar will review your application and send payment details within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="bg-white text-primary px-10 py-4 font-black uppercase tracking-widest hover:bg-secondary hover:text-white transition-all">GO BACK</button>
                </div>
              ) : (
                <>
                  <h2 className="text-4xl font-heading font-black mb-10 uppercase border-b border-white/10 pb-6 italic">SECURE YOUR SPOT</h2>
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-8">
                    <div className="space-y-3">
                      <label className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">Personal Details</label>
                      <input required type="text" className="w-full bg-white/10 border border-white/20 p-5 font-bold focus:outline-none focus:bg-white focus:text-primary transition-all placeholder-white/30" placeholder="FULL NAME" />
                      <input required type="email" className="w-full bg-white/10 border border-white/20 p-5 font-bold focus:outline-none focus:bg-white focus:text-primary transition-all placeholder-white/30" placeholder="EMAIL ADDRESS" />
                      <input required type="tel" className="w-full bg-white/10 border border-white/20 p-5 font-bold focus:outline-none focus:bg-white focus:text-primary transition-all placeholder-white/30" placeholder="CONTACT NUMBER" />
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">Membership Preference</label>
                      <select className="w-full bg-white/10 border border-white/20 p-5 font-black focus:outline-none focus:bg-white focus:text-primary transition-all appearance-none cursor-pointer">
                        <option value="senior" className="text-primary font-bold">SENIOR PLAYER (1,500 NOK)</option>
                        <option value="junior" className="text-primary font-bold">JUNIOR ACADEMY (850 NOK)</option>
                        <option value="family" className="text-primary font-bold">FAMILY PACKAGE (3,200 NOK)</option>
                      </select>
                    </div>

                    <button type="submit" className="w-full bg-accent text-primary p-6 font-heading text-3xl font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl active:scale-95">
                      SUBMIT APPLICATION
                    </button>
                    
                    <p className="text-[10px] text-gray-400 text-center font-bold uppercase tracking-[0.2em] leading-relaxed">
                      BY CLICKING SUBMIT, YOU AGREE TO OUR CODE OF CONDUCT AND DATA PRIVACY POLICY.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
