import { LabLayout } from './components/LabLayout'
import { LabNotebook } from './components/LabNotebook'
import { FlaskConical } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-lab-bg text-slate-100 font-sans selection:bg-blue-500/30">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        <LabLayout />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
          <LabNotebook />

          {/* Educational Content/Theory Section */}
          <section className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <FlaskConical className="text-emerald-400" size={32} />
                Fundamentos Científicos
              </h2>
              <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed space-y-4">
                <p>
                  A <strong>electrólise</strong> é o proceso mediante o cal a enerxía eléctrica se utiliza para producir un cambio químico non espontáneo. Neste laboratorio virtual aplicamos as <span className="text-blue-400 font-semibold">Leis de Faraday</span>, as cales establecen que a masa dunha substancia depositada ou liberada nun electrodo é proporcional á cantidade de electricidade (carga) que pasa polo sistema.
                </p>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl font-serif text-slate-200 text-lg flex justify-center items-center gap-4">
                  <span className="text-amber-400 font-bold">m = (Q · M) / (n · F)</span>
                  <div className="text-xs text-slate-500 italic">
                    Onde Q = I · t
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl h-fit border-emerald-500/20 bg-emerald-500/5">
              <h4 className="font-bold text-emerald-400 mb-4 uppercase text-xs tracking-widest">Guía de Práctica</h4>
              <ul className="space-y-3 text-sm text-slate-400 list-disc pl-4">
                <li>Selecciona o electrólito <strong>CuSO₄</strong>.</li>
                <li>Axusta o voltaxe para acadar <strong>0.6 A</strong>.</li>
                <li>Usa o acelerador para simular uns <strong>30 minutos</strong>.</li>
                <li>Observa o depósito no cátodo e o adelgazamento no ánodo.</li>
                <li>Calcula a constante de Faraday no Caderno.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
