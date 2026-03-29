export const AVOGADRO = 6.023e23;
export const ELEMENTARY_CHARGE = 1.6e-19;
export const FARADAY_CONSTANT = AVOGADRO * ELEMENTARY_CHARGE; // 96368 as per user constants

export const MOLAR_MASS = {
  Cu: 63.546,
  Zn: 65.38,
  Na: 22.990,
  Cl: 35.45,
  H: 1.008,
  O: 15.999,
  S: 32.06,
};

export type ElectrolyteType = 'CUSO4' | 'NACL' | 'H2O' | 'H2SO4' | 'ADVANCED';

export interface Electrolyte {
  id: ElectrolyteType;
  name: string;
  formula: string;
  concentration: string;
  color: string;
  activeColor?: string; // For things like NaCl turning pink
  isConductor: boolean;
  reactions: {
    cathode: string;
    anode: string;
  };
  products: {
    cathode: string;
    anode: string;
  };
  molarMassRef: number;
  valence: number;
}

export const ELECTROLYTES: Record<ElectrolyteType, Electrolyte> = {
  CUSO4: {
    id: 'CUSO4',
    name: 'Sulfato de Cobre(II)',
    formula: 'CuSO₄',
    concentration: '0.3 M',
    color: 'rgba(59, 130, 246, 0.4)', // Blue
    isConductor: true,
    reactions: {
      cathode: 'Cu²⁺ + 2e⁻ → Cu(s)',
      anode: 'Cu(s) → Cu²⁺ + 2e⁻',
    },
    products: {
      cathode: 'Cobre depositado',
      anode: 'Cobre disolto',
    },
    molarMassRef: MOLAR_MASS.Cu,
    valence: 2,
  },
  NACL: {
    id: 'NACL',
    name: 'Cloruro de Sodio',
    formula: 'NaCl',
    concentration: '0.1 M',
    color: 'rgba(148, 163, 184, 0.2)', // Clear/Grey
    activeColor: 'rgba(236, 72, 153, 0.4)', // Pink (with Phenolphthalein)
    isConductor: true,
    reactions: {
      cathode: '2H₂O + 2e⁻ → H₂(g) + 2OH⁻',
      anode: '2Cl⁻ → Cl₂(g) + 2e⁻',
    },
    products: {
      cathode: 'Hidróxeno (gas) + OH⁻',
      anode: 'Cloro (gas)',
    },
    molarMassRef: MOLAR_MASS.H, // For gas calc or just visual
    valence: 2,
  },
  H2O: {
    id: 'H2O',
    name: 'Auga Destilada',
    formula: 'H₂O',
    concentration: 'Pura',
    color: 'rgba(147, 197, 253, 0.2)',
    isConductor: false,
    reactions: {
      cathode: 'Ninguha',
      anode: 'Ninguha',
    },
    products: {
      cathode: 'Nada',
      anode: 'Nada',
    },
    molarMassRef: 0,
    valence: 1,
  },
  H2SO4: {
    id: 'H2SO4',
    name: 'Ácido Sulfúrico',
    formula: 'H₂SO₄',
    concentration: '1 M',
    color: 'rgba(241, 245, 249, 0.3)',
    isConductor: true,
    reactions: {
      cathode: '2H⁺ + 2e⁻ → H₂(g)',
      anode: '2H₂O → O₂(g) + 4H⁺ + 4e⁻',
    },
    products: {
      cathode: 'Hidróxeno',
      anode: 'Osíxeno',
    },
    molarMassRef: MOLAR_MASS.H,
    valence: 2,
  },
  ADVANCED: {
    id: 'ADVANCED',
    name: 'Electrólise de AgNO₃',
    formula: 'AgNO₃',
    concentration: '0.5 M',
    color: 'rgba(226, 232, 240, 0.4)',
    isConductor: true,
    reactions: {
      cathode: 'Ag⁺ + e⁻ → Ag(s)',
      anode: '2H₂O → O₂(g) + 4H⁺ + 4e⁻',
    },
    products: {
      cathode: 'Prata depositada',
      anode: 'Osíxeno',
    },
    molarMassRef: 107.87,
    valence: 1,
  }
};
