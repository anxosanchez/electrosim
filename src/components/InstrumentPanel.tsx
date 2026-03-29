import React from 'react';
import { useSimEngine } from '../hooks/useSimEngine';
import { Clock, Zap, Weight, Gauge } from 'lucide-react';

export const InstrumentPanel: React.FC = () => {
  const { elapsedSimSeconds, realCurrent, massDeposited, voltage } = useSimEngine();

  const formatTime = (totalSeconds: number) => {
    const min = Math.floor(totalSeconds / 60);
    const sec = Math.floor(totalSeconds % 60);
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard 
        label="Cronómetro" 
        value={formatTime(elapsedSimSeconds)} 
        unit="min:seg" 
        icon={<Clock size={16} className="text-blue-400" />} 
      />
      <StatCard 
        label="Amperímetro" 
        value={realCurrent.toFixed(3)} 
        unit="A" 
        icon={<Zap size={16} className="text-amber-400" />} 
      />
      <StatCard 
        label="Balanza (Δm)" 
        value={massDeposited.toFixed(4)} 
        unit="g" 
        icon={<Weight size={16} className="text-emerald-400" />} 
      />
      <StatCard 
        label="Voltexe" 
        value={voltage.toFixed(1)} 
        unit="V" 
        icon={<Gauge size={16} className="text-purple-400" />} 
      />
    </div>
  );
};

interface StatCardProps {
  label: string;
  value: string;
  unit: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, unit, icon }) => (
  <div className="glass-panel p-4 rounded-xl border border-white/10 flex flex-col gap-1 transition-transform hover:scale-105">
    <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider">
      {icon}
      {label}
    </div>
    <div className="flex items-baseline gap-1">
      <span className="text-2xl font-mono font-bold text-slate-100">{value}</span>
      <span className="text-xs text-slate-500 font-medium">{unit}</span>
    </div>
  </div>
);
