import React from 'react';
import { useSimEngine } from '../hooks/useSimEngine';
import { ELECTROLYTES, type ElectrolyteType } from '../constants/chemistry';
import { Beaker, Zap, FastForward, Info } from 'lucide-react';

export const ControlPanel: React.FC = () => {
  const { 
    selectedElectrolyte, 
    setElectrolyte, 
    voltage, 
    setVoltage, 
    timeMultiplier, 
    setTimeMultiplier 
  } = useSimEngine();

  return (
    <div className="flex flex-col gap-6">
      {/* Electrolyte Selection */}
      <div className="glass-panel p-6 rounded-2xl flex flex-col gap-4">
        <h3 className="flex items-center gap-2 font-semibold text-slate-300">
          <Beaker size={18} className="text-blue-400" />
          Seleccionar Electrólito
        </h3>
        <div className="grid grid-cols-1 gap-2">
          {(Object.keys(ELECTROLYTES) as ElectrolyteType[]).map((key) => (
            <button
              key={key}
              onClick={() => setElectrolyte(key)}
              className={`p-3 rounded-xl text-left border transition-all flex justify-between items-center ${
                selectedElectrolyte === key
                  ? 'bg-blue-500/20 border-blue-500/50 text-blue-100 shadow-[0_0_15px_rgba(59,130,246,0.2)]'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
              }`}
            >
              <div>
                <p className="font-medium text-sm">{ELECTROLYTES[key].name}</p>
                <p className="text-xs opacity-60 font-mono">{ELECTROLYTES[key].formula} ({ELECTROLYTES[key].concentration})</p>
              </div>
              {selectedElectrolyte === key && <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />}
            </button>
          ))}
        </div>
      </div>

      {/* Power Supply Controls */}
      <div className="glass-panel p-6 rounded-2xl flex flex-col gap-4 bg-gradient-to-br from-white/5 to-amber-500/5">
        <h3 className="flex items-center gap-2 font-semibold text-slate-300">
          <Zap size={18} className="text-amber-400" />
          Fonte de Alimentación
        </h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono text-slate-400">
              <span>VOLTAXE (V)</span>
              <span className="text-amber-400">{voltage.toFixed(1)} V</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="24" 
              step="0.1" 
              value={voltage}
              onChange={(e) => setVoltage(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>
          <div className="flex items-start gap-2 p-3 bg-amber-400/10 rounded-lg border border-amber-400/20">
            <Info size={14} className="text-amber-400 shrink-0 mt-0.5" />
            <p className="text-[10px] text-amber-200/70 leading-relaxed font-mono">
              OBXECTIVO DE PRÁCTICA: Axustar a corrente a <span className="text-amber-400">0.6 A</span> para o experimento de CuSO₄.
            </p>
          </div>
        </div>
      </div>

      {/* Time Accelerator */}
      <div className="glass-panel p-6 rounded-2xl flex flex-col gap-4">
        <h3 className="flex items-center gap-2 font-semibold text-slate-300">
          <FastForward size={18} className="text-emerald-400" />
          Acelerador de Tempo
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between text-xs font-mono text-slate-400">
            <span>VELOCIDADE</span>
            <span className="text-emerald-400">x{timeMultiplier}</span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="300" 
            step="1" 
            value={timeMultiplier}
            onChange={(e) => setTimeMultiplier(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          <div className="grid grid-cols-4 gap-2">
            {[1, 60, 120, 300].map(val => (
              <button 
                key={val}
                onClick={() => setTimeMultiplier(val)}
                className={`py-1 rounded-md text-[10px] font-bold transition-all ${
                  timeMultiplier === val ? 'bg-emerald-500 text-white' : 'bg-white/5 text-slate-500 hover:bg-white/10'
                }`}
              >
                x{val}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
