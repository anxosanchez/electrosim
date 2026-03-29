import React, { useEffect, useRef } from 'react';
import { useSimEngine } from '../hooks/useSimEngine';
import { InstrumentPanel } from './InstrumentPanel';
import { ControlPanel } from './ControlPanel';
import { ElectrochemicalCell } from './ElectrochemicalCell';
import { Zap, Play, Pause, RotateCcw } from 'lucide-react';

export const LabLayout: React.FC = () => {
  const { isRunning, toggleSimulation, resetSimulation, tick } = useSimEngine();
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number>(0);

  const animate = (time: number) => {
    if (previousTimeRef.current !== 0) {
      const deltaTime = (time - previousTimeRef.current) / 1000;
      tick(deltaTime);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [isRunning]);

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col gap-6 max-w-7xl mx-auto">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white/5 p-6 rounded-2xl glass-border">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            ElectroSim v1.0
          </h1>
          <p className="text-slate-400">Simulación de Redox e Electrólise - Laboratorio Virtual</p>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={toggleSimulation}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
              isRunning 
                ? 'bg-rose-500/20 text-rose-400 border border-rose-500/50 hover:bg-rose-500/30' 
                : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 hover:bg-emerald-500/30'
            }`}
          >
            {isRunning ? <Pause size={20} /> : <Play size={20} />}
            {isRunning ? 'Deter' : 'Comezar'}
          </button>
          
          <button 
            onClick={resetSimulation}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-slate-500/10 text-slate-300 border border-slate-500/30 hover:bg-slate-500/20 transition-all"
          >
            <RotateCcw size={20} />
            Reiniciar
          </button>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-grow">
        {/* Visual Simulation Area */}
        <section className="lg:col-span-8 flex flex-col gap-6">
          <div className="flex-grow glass-panel rounded-3xl p-8 relative overflow-hidden min-h-[500px] flex items-center justify-center">
            <ElectrochemicalCell />
            
            {/* Legend/Info Overlay */}
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              <span className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded border border-emerald-400/20 w-fit">
                <Zap size={14} /> LIVE SIMULATION
              </span>
            </div>
          </div>
          
          <InstrumentPanel />
        </section>

        {/* Control Sidebar */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <ControlPanel />
          
          {/* Detailed Info Card */}
          <div className="glass-panel p-6 rounded-2xl flex flex-col gap-4">
            <h3 className="font-semibold text-slate-300 border-b border-white/10 pb-2">Reaccións en Curso</h3>
            <div className="space-y-4">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <p className="text-xs text-slate-500 uppercase font-bold mb-1">Cátodo (Redución)</p>
                <code className="text-sm font-mono text-blue-300">Cu²⁺ + 2e⁻ → Cu(s)</code>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <p className="text-xs text-slate-500 uppercase font-bold mb-1">Ánodo (Oxidación)</p>
                <code className="text-sm font-mono text-amber-300">Cu(s) → Cu²⁺ + 2e⁻</code>
              </div>
            </div>
          </div>
        </aside>
      </main>
      
      {/* Footer / Questions */}
      <footer className="glass-panel p-6 rounded-2xl flex justify-between items-center text-sm text-slate-500">
        <p>© 2026 Laboratorio Virtual de Química</p>
        <p className="italic underline cursor-help">Precisa axuda cos cálculos?</p>
      </footer>
    </div>
  );
};
