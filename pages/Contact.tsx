
import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';

interface ContactProps {
  lang: Language;
  t: (key: string) => string;
}

const Contact: React.FC<ContactProps> = ({ lang, t }) => {
  return (
    <div className="bg-surface min-h-screen py-24">
      <div className="container-wide px-4">
        <div className="section-header mb-16">
          <p className="text-secondary font-black tracking-[0.3em] uppercase text-xs mb-3">Enquiries & Support</p>
          <h1 className="text-6xl font-heading font-black text-primary uppercase leading-none tracking-tighter">{t('contact')} US</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-12">
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white p-10 border border-border play-cricket-shadow border-l-8 border-l-primary">
                <span className="material-icons text-primary text-5xl mb-6">alternate_email</span>
                <h3 className="font-heading text-2xl text-primary font-black mb-4 uppercase">Direct Support</h3>
                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-6">Response within 24 hours during season</p>
                <a href="mailto:post@sandvikacricket.no" className="text-2xl font-black text-secondary hover:text-primary transition-colors border-b-2 border-secondary">post@sandvikacricket.no</a>
              </div>
              
              <div className="bg-white p-10 border border-border play-cricket-shadow border-l-8 border-l-secondary">
                <span className="material-icons text-secondary text-5xl mb-6">local_phone</span>
                <h3 className="font-heading text-2xl text-primary font-black mb-4 uppercase">Club Secretary</h3>
                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-6">Available Mon - Fri, 09:00 - 16:00</p>
                <a href="tel:+4740000000" className="text-2xl font-black text-primary hover:text-secondary transition-colors">+47 400 00 000</a>
              </div>
            </div>

            <div className="bg-primary text-white p-12 border-b-8 border-accent shadow-2xl">
              <h3 className="text-4xl font-heading font-black mb-8 uppercase italic leading-none">THE GROUND</h3>
              <div className="flex items-start space-x-4 mb-10">
                <span className="material-icons text-accent text-2xl">location_on</span>
                <div>
                  <p className="text-xl font-bold uppercase tracking-tight">Kadettangen Cricket Ground</p>
                  <p className="text-gray-400 text-sm font-medium mt-1">Kadettangen 1, 1338 Sandvika, Bærum</p>
                </div>
              </div>
              <div className="aspect-[16/9] w-full bg-black/20 border border-white/10 grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
                <img 
                  src="https://picsum.photos/seed/sandvika-map/1200/675" 
                  className="w-full h-full object-cover" 
                  alt="Club Location Map"
                />
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-white p-16 border border-border shadow-2xl border-t-8 border-secondary">
            <h2 className="text-4xl font-heading font-black text-primary mb-12 uppercase italic underline decoration-secondary decoration-4 underline-offset-8">OFFICIAL ENQUIRY FORM</h2>
            <form className="space-y-10">
              <div className="grid grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">First Name</label>
                  <input type="text" className="w-full bg-surface border border-border p-5 font-bold focus:outline-none focus:bg-white focus:ring-2 focus:ring-secondary/20 transition-all placeholder-gray-300" placeholder="OLA" />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">Last Name</label>
                  <input type="text" className="w-full bg-surface border border-border p-5 font-bold focus:outline-none focus:bg-white focus:ring-2 focus:ring-secondary/20 transition-all placeholder-gray-300" placeholder="NORDMANN" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">Email Address</label>
                <input type="email" className="w-full bg-surface border border-border p-5 font-bold focus:outline-none focus:bg-white focus:ring-2 focus:ring-secondary/20 transition-all placeholder-gray-300" placeholder="OLA@NORDMANN.NO" />
              </div>

              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">Message Subject</label>
                <select className="w-full bg-surface border border-border p-5 font-black focus:outline-none focus:bg-white transition-all appearance-none cursor-pointer">
                  <option className="text-primary font-bold">GENERAL ENQUIRY</option>
                  <option className="text-primary font-bold">MEMBERSHIP QUESTION</option>
                  <option className="text-primary font-bold">JUNIOR ACADEMY</option>
                  <option className="text-primary font-bold">SPONSORSHIP</option>
                  <option className="text-primary font-bold">MEDIA REQUEST</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">Enquiry Details</label>
                <textarea rows={6} className="w-full bg-surface border border-border p-5 font-bold focus:outline-none focus:bg-white focus:ring-2 focus:ring-secondary/20 transition-all placeholder-gray-300" placeholder="HOW CAN WE HELP YOU TODAY?"></textarea>
              </div>

              <button className="w-full bg-primary text-white p-7 font-heading text-3xl font-black uppercase tracking-widest hover:bg-secondary transition-all shadow-xl active:scale-95 flex items-center justify-center space-x-4">
                <span>SEND MESSAGE</span>
                <span className="material-icons text-3xl">trending_flat</span>
              </button>
              
              <p className="text-[10px] text-gray-400 text-center font-bold uppercase tracking-[0.2em] leading-relaxed italic">
                By submitting this form you consent to Sandvika CC storing your details for communication purposes only.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
