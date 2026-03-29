import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSimEngine } from '../hooks/useSimEngine';
import { ELECTROLYTES, type ElectrolyteType } from '../constants/chemistry';

export const ElectrochemicalCell: React.FC = () => {
  const { selectedElectrolyte, isRunning, isPhenolphthaleinActive, massDeposited, realCurrent } = useSimEngine();
  const electrolyte = ELECTROLYTES[selectedElectrolyte as ElectrolyteType];

  // Visual calculations
  // Let's assume a max mass visibility scale of 0.5g = full thickness change
  const thicknessEffect = Math.min(massDeposited * 20, 15); // pixels
  const bubbleCount = Math.floor(Math.min(realCurrent * 20, 30));

  const bubbles = useMemo(() => {
    return Array.from({ length: bubbleCount }).map((_, i) => ({
      id: i,
      x: 35 + Math.random() * 30, // Random X centered near electrode
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3
    }));
  }, [bubbleCount, selectedElectrolyte]);

  return (
    <div className="relative w-full h-full flex items-center justify-center min-h-[400px]">
      {/* Beaker Container */}
      <div className="relative w-80 h-96">
        {/* Beaker Back Glass */}
        <div className="absolute inset-0 border-4 border-white/20 border-t-0 rounded-b-[40px] bg-white/5 z-0 shadow-2xl" />
        
        {/* Electrolyte Liquid */}
        <motion.div 
          animate={{ 
            backgroundColor: isPhenolphthaleinActive ? electrolyte.activeColor : electrolyte.color 
          }}
          transition={{ duration: 2 }}
          className="absolute bottom-1 left-1 right-1 h-[80%] rounded-b-[38px] solution-transition z-10"
        />

        {/* Electrodes */}
        <div className="absolute top-[-20px] left-0 right-0 flex justify-center gap-24 z-20">
          {/* Anode (Oxidación) */}
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-slate-500 mb-1">ÁNODO (+)</span>
            <motion.div 
              initial={{ height: 300, width: 20 }}
              animate={{ 
                width: Math.max(20 - thicknessEffect, 8),
                backgroundColor: electrolyte.id === 'CUSO4' ? '#b45309' : '#1e293b'
              }}
              className="h-[300px] border border-white/10 rounded-full shadow-lg"
            />
          </div>

          {/* Cathode (Redución) */}
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-slate-500 mb-1">CÁTODO (-)</span>
            <div className="relative flex justify-center">
              {/* Core Electrode */}
              <motion.div 
                className="w-5 h-[300px] bg-slate-800 border border-white/10 rounded-full shadow-lg z-20"
                style={{ backgroundColor: electrolyte.id === 'CUSO4' ? '#94a3b8' : '#1e293b' }}
              />
              {/* Copper Deposit Overlay */}
              {electrolyte.id === 'CUSO4' && (
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ 
                    width: 20 + thicknessEffect,
                    opacity: massDeposited > 0 ? 1 : 0
                  }}
                  className="absolute top-0 h-[300px] bg-orange-700/80 blur-[2px] rounded-full z-10"
                />
              )}
            </div>
          </div>
        </div>

        {/* Bubbles Simulation (Simple SVG/CSS approach) */}
        {isRunning && realCurrent > 0 && electrolyte.id !== 'H2O' && (
          <div className="absolute inset-x-0 bottom-10 h-64 z-30 pointer-events-none">
            {/* Anode Bubbles (Cl2 or O2) */}
            <AnimatePresence>
              {bubbles.map((b) => (
                <motion.div
                  key={`anode-b-${b.id}`}
                  initial={{ y: 200, x: 80 + (Math.random() * 20 - 10), opacity: 0, scale: 0.5 }}
                  animate={{ y: 0, opacity: [0, 1, 1, 0], scale: [0.5, 1, 1.2, 0.8] }}
                  transition={{ 
                    duration: b.duration, 
                    repeat: Infinity, 
                    delay: b.delay,
                    ease: "linear"
                  }}
                  className="absolute w-2 h-2 rounded-full bg-white/40 border border-white/20"
                />
              ))}
            </AnimatePresence>

            {/* Cathode Bubbles (H2) */}
            {(electrolyte.id === 'NACL' || electrolyte.id === 'H2SO4') && (
              <AnimatePresence>
                {bubbles.map((b) => (
                  <motion.div
                    key={`cathode-b-${b.id}`}
                    initial={{ y: 200, x: 220 + (Math.random() * 20 - 10), opacity: 0, scale: 0.5 }}
                    animate={{ y: 0, opacity: [0, 1, 1, 0], scale: [0.5, 1, 1.2, 0.8] }}
                    transition={{ 
                      duration: b.duration * 0.8, 
                      repeat: Infinity, 
                      delay: b.delay * 0.5,
                      ease: "linear"
                    }}
                    className="absolute w-1.5 h-1.5 rounded-full bg-white/60 shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                  />
                ))}
              </AnimatePresence>
            )}
          </div>
        )}

        {/* Beaker Front Glass Reflection */}
        <div className="absolute inset-0 border-4 border-white/10 border-t-0 rounded-b-[40px] pointer-events-none z-40 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
      </div>

      {/* Connection Wires (Stylized) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-50">
        <path 
          d="M 50% 0 L 50% 100 Q 50% 150 400 150" 
          fill="none" 
          stroke={isRunning ? "rgba(251, 191, 36, 0.5)" : "rgba(255,255,255,0.1)"} 
          strokeWidth="3" 
          className="transition-all duration-1000"
        />
        {/* More wires could be added here to bridge to the control panel */}
      </svg>
    </div>
  );
};
