import { BookOpen, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useSimEngine } from '../hooks/useSimEngine';

export const LabNotebook: React.FC = () => {
  const { massDeposited, elapsedSimSeconds, realCurrent } = useSimEngine();
  const [userFaraday, setUserFaraday] = useState('');
  const [result, setResult] = useState<{ score: number; feedback: string } | null>(null);

  const checkCalculation = () => {
    // Teórica: F = (I * t * M) / (m * n)
    // Para o Cu: n = 2, M = 63.546
    const calculatedF = (realCurrent * elapsedSimSeconds * 63.546) / (massDeposited * 2);
    const userVal = parseFloat(userFaraday);
    
    if (isNaN(userVal)) return;

    const error = Math.abs((userVal - calculatedF) / calculatedF) * 100;

    if (error < 5) {
      setResult({ 
        score: 100, 
        feedback: `Excelente! O teu cálculo de Faraday (${userVal.toFixed(0)}) ten un erro do ${error.toFixed(2)}% respecto aos datos da simulación.` 
      });
    } else {
      setResult({ 
        score: 0, 
        feedback: `O erro é do ${error.toFixed(2)}%. Revisa a fórmula: F = (I · t · M) / (m · n).` 
      });
    }
  };

  return (
    <div className="glass-panel p-8 rounded-3xl mt-12 bg-gradient-to-br from-indigo-500/10 to-transparent border-indigo-500/20">
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="text-indigo-400" size={28} />
        <h2 className="text-2xl font-bold text-slate-100">Caderno de Prácticas Post-Laboratorio</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-300">Datos Recollidos</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-xs text-slate-500 font-bold mb-1 uppercase">Masa Final (m)</p>
              <p className="text-xl font-mono text-emerald-400">{massDeposited.toFixed(4)} g</p>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-xs text-slate-500 font-bold mb-1 uppercase">Tempo Total (t)</p>
              <p className="text-xl font-mono text-blue-400">{elapsedSimSeconds.toFixed(1)} s</p>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-xs text-slate-500 font-bold mb-1 uppercase">Intensidade (I)</p>
              <p className="text-xl font-mono text-amber-400">{realCurrent.toFixed(3)} A</p>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-xs text-slate-500 font-bold mb-1 uppercase">Valores Constantes</p>
              <p className="text-[10px] font-mono text-slate-400">Cu: n=2, M=63.546</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-slate-300">Cálculo da Constante de Faraday</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Utiliza os datos da esquerda para calcular a constante de Faraday (F) e comproba a túa precisión.
          </p>
          
          <div className="space-y-4">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">
              O teu resultado (C/mol)
            </label>
            <div className="flex gap-2">
              <input 
                type="number"
                value={userFaraday}
                onChange={(e) => setUserFaraday(e.target.value)}
                placeholder="Ex: 96500"
                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500/50 transition-all font-mono text-indigo-300"
              />
              <button 
                onClick={checkCalculation}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2"
              >
                Validar
              </button>
            </div>
          </div>

          <AnimatePresence>
            {result && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-2xl border flex items-start gap-3 ${
                  result.score === 100 
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200' 
                    : 'bg-rose-500/10 border-rose-500/30 text-rose-200'
                }`}
              >
                {result.score === 100 ? <CheckCircle2 className="shrink-0" /> : <AlertCircle className="shrink-0" />}
                <p className="text-sm">{result.feedback}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
