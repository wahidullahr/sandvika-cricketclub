
import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';

interface AboutProps { lang: Language; t: (key: string) => string; }

const About: React.FC<AboutProps> = ({ lang, t }) => {
  const timeline = [
    { year: '2012', title: 'The Foundation', desc: 'Sandvika Cricket Klubb was founded by a group of cricket enthusiasts at Kadettangen.' },
    { year: '2015', title: 'NCF Affiliation', desc: 'Formally joined the Norwegian Cricket Federation league structure.' },
    { year: '2018', title: 'Championship Win', desc: 'First XI secured the regional T20 championship.' },
    { year: '2024', title: 'Digital Expansion', desc: 'Launch of the official Play-Cricket integrated club platform.' }
  ];

  return (
    <div className="bg-surface min-h-screen">
      <section className="bg-primary py-32 text-white border-b-8 border-accent">
        <div className="container-wide px-4 text-center">
          <h1 className="text-7xl md:text-8xl font-heading font-black mb-8 leading-none tracking-tighter">ABOUT SANDVIKA CC</h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-medium italic leading-relaxed">
            Excellence in cricket, integrity in sport, and a commitment to the Bærum community.
          </p>
        </div>
      </section>

      <section className="container-wide px-4 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 -z-10"></div>
            <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=1200" className="border-8 border-white shadow-2xl relative z-10" alt="Club" />
          </div>
          <div>
            <div className="section-header">
              <h2 className="text-4xl text-primary font-black">OUR CORE MISSION</h2>
            </div>
            <div className="space-y-10">
              <div className="bg-white p-12 border border-border border-l-8 border-l-secondary shadow-md">
                <h3 className="text-2xl font-heading font-black text-secondary mb-4 uppercase tracking-widest">Club Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To establish Sandvika as a premier destination for cricket in Norway, fostering a culture of high performance and professional development for all athletes.
                </p>
              </div>
              <div className="bg-white p-12 border border-border border-l-8 border-l-primary shadow-md">
                <h3 className="text-2xl font-heading font-black text-primary mb-4 uppercase tracking-widest">Integrity & Respect</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our club operates on the Spirit of Cricket. We prioritize fair play, respect for officials, and welcoming inclusivity for every member of the Bærum region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-32 border-y border-border">
        <div className="container-wide px-4">
          <div className="section-header text-center mb-24 max-w-2xl mx-auto border-0">
             <h2 className="text-5xl font-black text-primary">CLUB HISTORY</h2>
             <div className="h-1.5 w-32 bg-secondary mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="bg-white p-10 border border-border hover:border-secondary transition-all shadow-sm flex flex-col h-full group">
                <span className="text-secondary font-black text-5xl font-heading leading-none mb-6 group-hover:scale-110 transition-transform origin-left">{item.year}</span>
                <h4 className="text-2xl font-heading font-bold mb-4 text-primary uppercase">{item.title}</h4>
                <p className="text-gray-500 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
