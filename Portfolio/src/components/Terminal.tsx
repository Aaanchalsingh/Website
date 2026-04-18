import { motion } from 'motion/react';
import React, { useState } from 'react';

export default function Terminal() {
  const [formData, setFormData] = useState({
    identity: '',
    address: '',
    payload: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate transmission
    alert(`Data Transmitted: ${JSON.stringify(formData)}`);
  };

  return (
    <section className="py-32 px-6" id="terminal">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-zinc-900 rounded-lg overflow-hidden border border-outline-variant/30 shadow-2xl"
        >
          {/* Header */}
          <div className="bg-zinc-800 px-4 py-2 flex items-center justify-between border-b border-outline-variant/20">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-secondary/40"></div>
              <div className="w-3 h-3 rounded-full bg-blue-500/40"></div>
            </div>
            <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">aanchal@local — bash</span>
          </div>

          <div className="p-8 font-label text-sm space-y-4">
            <div className="flex gap-4">
              <span className="text-secondary">➜</span>
              <span className="text-primary">~</span>
              <span className="text-on-surface">whoami</span>
            </div>
            <p className="text-on-surface-variant pl-8 italic">
              Aanchal Singh. Software Engineer. Problem Solver. 710+ LeetCode problems conquered. Building the next generation of scalable systems.
            </p>

            <div className="flex gap-4">
              <span className="text-secondary">➜</span>
              <span className="text-primary">~</span>
              <span className="text-on-surface">contact --init</span>
            </div>

            <form onSubmit={handleSubmit} className="pl-8 space-y-6 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] text-secondary uppercase tracking-widest">User_Identity</label>
                  <input 
                    className="w-full bg-surface-container-highest border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-surface p-3 transition-colors outline-none" 
                    placeholder="name.root" 
                    type="text"
                    required
                    value={formData.identity}
                    onChange={(e) => setFormData({ ...formData, identity: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-secondary uppercase tracking-widest">Return_Address</label>
                  <input 
                    className="w-full bg-surface-container-highest border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-surface p-3 transition-colors outline-none" 
                    placeholder="user@provider.com" 
                    type="email"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-secondary uppercase tracking-widest">Data_Payload</label>
                <textarea 
                  className="w-full bg-surface-container-highest border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-surface p-3 transition-colors outline-none resize-none" 
                  placeholder="Brief project overview or inquiry..." 
                  rows={4}
                  required
                  value={formData.payload}
                  onChange={(e) => setFormData({ ...formData, payload: e.target.value })}
                ></textarea>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: '#d2f000' }}
                whileTap={{ scale: 0.98 }}
                className="bg-secondary text-on-secondary px-8 py-3 rounded-lg font-bold uppercase tracking-[0.2em] text-xs hover:shadow-[0_0_20px_rgba(210,240,0,0.4)] transition-all"
                type="submit"
              >
                TRANSMIT_DATA
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
