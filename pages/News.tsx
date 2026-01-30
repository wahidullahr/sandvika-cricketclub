
import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { MOCK_NEWS } from '../constants';

interface NewsProps { lang: Language; t: (key: string) => string; }

const News: React.FC<NewsProps> = ({ lang, t }) => {
  return (
    <div className="bg-surface min-h-screen py-20">
      <div className="container-wide px-4">
        <div className="section-header mb-16">
          <p className="text-secondary font-black tracking-[0.3em] uppercase text-xs mb-3">Club Media Portal</p>
          <h1 className="text-6xl font-heading font-black text-primary uppercase leading-none tracking-tighter">{t('news')} & Press Releases</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {MOCK_NEWS.map((item, idx) => (
            <motion.article 
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white group overflow-hidden play-cricket-shadow border border-border border-b-8 border-b-primary hover:border-b-secondary transition-all"
            >
              <div className="relative h-72 overflow-hidden bg-primary">
                <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-90 group-hover:opacity-100" alt={item.title[lang]} />
                <div className="absolute top-0 left-0 bg-accent text-primary px-6 py-2 font-black text-[11px] tracking-widest uppercase">
                  OFFICIAL
                </div>
              </div>
              <div className="p-10 flex flex-col h-full">
                <span className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">PUBLISHED: {item.date}</span>
                <h3 className="text-3xl font-heading font-black text-primary mb-6 group-hover:text-secondary transition-colors uppercase leading-[0.9]">
                  {item.title[lang]}
                </h3>
                <p className="text-gray-600 mb-10 text-base leading-relaxed line-clamp-3">
                  {item.excerpt[lang]}
                </p>
                <div className="mt-auto">
                  <button className="flex items-center text-primary font-black text-sm hover:text-secondary transition-all group/btn uppercase tracking-widest border-b-2 border-secondary pb-1">
                    READ FULL STORY
                    <span className="material-icons ml-3 transition-transform group-hover/btn:translate-x-2">trending_flat</span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
          
          {/* Static "Join Newsletter" Box to match Play-Cricket style */}
          <div className="bg-primary p-12 flex flex-col justify-center text-white border-b-8 border-b-accent h-full">
            <h3 className="text-4xl font-heading font-black mb-6 leading-none">NEVER MISS A WICKET</h3>
            <p className="text-gray-400 mb-8 uppercase text-xs font-bold tracking-widest">Join our official club mailing list for weekly results and match previews.</p>
            <form className="space-y-4">
               <input type="email" placeholder="YOUR EMAIL ADDRESS" className="w-full bg-white/10 border border-white/20 p-4 text-sm font-bold placeholder-white/30 focus:outline-none focus:bg-white/20" />
               <button className="w-full bg-accent text-primary py-4 font-black uppercase tracking-widest hover:bg-white transition-all">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
