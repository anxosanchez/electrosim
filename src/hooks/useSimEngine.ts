import { create } from 'zustand';
import { ELECTROLYTES, type ElectrolyteType, FARADAY_CONSTANT } from '../constants/chemistry';

interface SimState {
  // Config
  selectedElectrolyte: ElectrolyteType;
  voltage: number;
  targetCurrent: number; // Objective is 0.6A
  realCurrent: number;
  timeMultiplier: number; // Time accelerator
  
  // Running state
  isRunning: boolean;
  elapsedSimSeconds: number; // Total simulated time
  massDeposited: number; // Current mass change in grams
  isPhenolphthaleinActive: boolean;
  
  // Actions
  setElectrolyte: (type: ElectrolyteType) => void;
  setVoltage: (v: number) => void;
  setTimeMultiplier: (m: number) => void;
  toggleSimulation: () => void;
  resetSimulation: () => void;
  tick: (deltaSeconds: number) => void;
}

export const useSimEngine = create<SimState>()((set: any, get: any) => ({
  selectedElectrolyte: 'H2O',
  voltage: 0,
  targetCurrent: 0.6,
  realCurrent: 0,
  timeMultiplier: 1,
  isRunning: false,
  elapsedSimSeconds: 0,
  massDeposited: 0,
  isPhenolphthaleinActive: false,

  setElectrolyte: (type: ElectrolyteType) => set({ 
    selectedElectrolyte: type,
    massDeposited: 0,
    elapsedSimSeconds: 0,
    isRunning: false 
  }),

  setVoltage: (v: number) => set((state: any) => {
    const electrolyte = ELECTROLYTES[state.selectedElectrolyte as ElectrolyteType];
    const resistance = electrolyte.isConductor ? 20 : 1000000;
    const current = v / resistance;
    return { voltage: v, realCurrent: current };
  }),

  setTimeMultiplier: (m: number) => set({ timeMultiplier: m }),

  toggleSimulation: () => set((state: any) => ({ isRunning: !state.isRunning })),

  resetSimulation: () => set({
    elapsedSimSeconds: 0,
    massDeposited: 0,
    isRunning: false,
    isPhenolphthaleinActive: false
  }),

  tick: (deltaSeconds: number) => {
    const { isRunning, timeMultiplier, selectedElectrolyte, realCurrent } = get();
    if (!isRunning) return;

    const simDelta = deltaSeconds * timeMultiplier;
    const electrolyte = ELECTROLYTES[selectedElectrolyte as ElectrolyteType];

    set((state: any) => {
      let newMass = state.massDeposited;
      
      if (electrolyte.molarMassRef > 0 && realCurrent > 0) {
        const dM = (realCurrent * simDelta * electrolyte.molarMassRef) / (electrolyte.valence * FARADAY_CONSTANT);
        newMass += dM;
      }

      const newElapsed = state.elapsedSimSeconds + simDelta;
      const shouldBePink = selectedElectrolyte === 'NACL' && newElapsed > 300;

      return {
        elapsedSimSeconds: newElapsed,
        massDeposited: newMass,
        isPhenolphthaleinActive: shouldBePink
      };
    });
  }
}));
