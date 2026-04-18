"use client";

import { motion } from "motion/react";
import { useState } from "react";

export default function Terminal() {
  const [formData, setFormData] = useState({
    identity: "",
    address: "",
    payload: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Data Transmitted: ${JSON.stringify(formData)}`);
  };

  return (
    <section className="py-20 md:py-32 px-6" id="terminal">
      {/* Desktop (desktp): max-w-4xl centered. Mobile (tes): full width */}
      <div className="w-full md:max-w-4xl md:mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-terminal-bg rounded-lg overflow-hidden border border-outline-variant/30 shadow-2xl"
        >
          {/* Window chrome */}
          <div className="bg-terminal-chrome px-4 py-2 flex items-center justify-between border-b border-outline-variant/20">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-secondary/40" />
              <div className="w-3 h-3 rounded-full bg-blue-500/40" />
            </div>
            <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">
              aanchal@local — bash
            </span>
          </div>

          <div className="p-5 md:p-8 font-label text-sm space-y-4">
            <div className="flex gap-4">
              <span className="text-secondary">➜</span>
              <span className="text-primary">~</span>
              <span className="text-on-surface">whoami</span>
            </div>
            <p className="text-on-surface-variant pl-8 italic text-xs md:text-sm">
              Aanchal Singh. Software Engineer. Problem Solver. 710+ LeetCode problems
              conquered. Building the next generation of scalable systems.
            </p>

            <div className="flex gap-4">
              <span className="text-secondary">➜</span>
              <span className="text-primary">~</span>
              <span className="text-on-surface">contact --init</span>
            </div>

            <form onSubmit={handleSubmit} className="pl-4 md:pl-8 space-y-5 md:space-y-6 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] text-secondary uppercase tracking-widest">
                    User_Identity
                  </label>
                  <input
                    className="w-full bg-surface-container-highest border-b-2 border-outline-variant focus:border-secondary text-on-surface p-3 transition-colors outline-none text-sm"
                    placeholder="name.root"
                    type="text"
                    required
                    value={formData.identity}
                    onChange={(e) => setFormData({ ...formData, identity: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-secondary uppercase tracking-widest">
                    Return_Address
                  </label>
                  <input
                    className="w-full bg-surface-container-highest border-b-2 border-outline-variant focus:border-secondary text-on-surface p-3 transition-colors outline-none text-sm"
                    placeholder="user@provider.com"
                    type="email"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-secondary uppercase tracking-widest">
                  Data_Payload
                </label>
                <textarea
                  className="w-full bg-surface-container-highest border-b-2 border-outline-variant focus:border-secondary text-on-surface p-3 transition-colors outline-none resize-none text-sm"
                  placeholder="Brief project overview or inquiry..."
                  rows={4}
                  required
                  value={formData.payload}
                  onChange={(e) => setFormData({ ...formData, payload: e.target.value })}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-secondary text-on-secondary px-6 md:px-8 py-3 rounded-lg font-bold uppercase tracking-[0.2em] text-xs hover:shadow-[0_0_20px_rgba(210,240,0,0.4)] transition-all"
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
