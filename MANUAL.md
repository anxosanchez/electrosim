# ElectroSim: Virtual Electrolysis Laboratory
# ElectroSim: Laboratorio Virtual de Electrólise

Welcome to **ElectroSim**, a high-fidelity virtual environment for exploring electrochemical processes. This manual provides both the scientific foundations and a practical guide to using the simulation.

Benvido a **ElectroSim**, un entorno virtual de alta fidelidade para explorar procesos electroquímicos. Este manual proporciona tanto os fundamentos científicos como unha guía práctica para usar a simulación.

---

## 1. Scientific Foundations / 1. Fundamentos Científicos

### English
**Electrolysis** is the process by which electrical energy is used to produce a non-spontaneous chemical change. In this lab, we focus on **Faraday's Laws of Electrolysis**, which state:
1. The mass of a substance deposited or liberated at an electrode is proportional to the quantity of electricity (charge) passed through the electrolyte.
2. For a given quantity of electricity, the mass of an elemental material altered at an electrode is proportional to the element's equivalent weight.

**Fundamental Formula:**
$$m = \frac{Q \cdot M}{n \cdot F} = \frac{I \cdot t \cdot M}{n \cdot F}$$
Where:
- **m**: Mass of the substance (g)
- **I**: Electric current (Amperes)
- **t**: Time (seconds)
- **M**: Molar mass of the substance (g/mol)
- **n**: Number of electrons transferred (valence)
- **F**: Faraday Constant (~96,485 C/mol)

### Galego
A **electrólise** é o proceso mediante o cal a enerxía eléctrica se utiliza para producir un cambio químico non espontáneo. Neste laboratorio, centrámonos nas **Leis de Faraday da Electrólise**, que establecen:
1. A masa dunha substancia depositada ou liberada nun electrodo é proporcional á cantidade de electricidade (carga) que pasa polo electrólito.
2. Para unha cantidade dada de electricidade, a masa dun material elemental alterado nun electrodo é proporcional ao peso equivalente do elemento.

**Fórmula Fundamental:**
$$m = \frac{Q \cdot M}{n \cdot F} = \frac{I \cdot t \cdot M}{n \cdot F}$$
Onde:
- **m**: Masa da substancia (g)
- **I**: Intensidade de corrente (Amperios)
- **t**: Tempo (segundos)
- **M**: Masa molar da substancia (g/mol)
- **n**: Número de electróns transferidos (valencia)
- **F**: Constante de Faraday (~96.485 C/mol)

---

## 2. Interface Guide / 2. Guía da Interface

### English
1. **Control Panel**:
    - **Electrolyte**: Choose between different reagents (CuSO₄, NaCl, etc.).
    - **Voltage (V)**: Adjust the potential difference to control the reaction rate.
    - **Time Controls**: Play/Pause and Time Scale (1x to 100x speed) for long experiments.
2. **Electrochemical Cell**:
    - Visualizes the **Anode (+)** and **Cathode (-)**.
    - Shows physical changes: gas bubbles, mass deposition (plating), and color shifts.
3. **Instrument Panel**:
    - Real-time digital readout for Voltage, Current, and Simulated Time.
4. **Lab Notebook**:
    - Automatically captures simulation data for analysis.
    - Includes a **Validation Tool** to check your Faraday Constant calculations.

### Galego
1. **Panel de Control**:
    - **Electrólito**: Escolle entre diferentes reactivos (CuSO₄, NaCl, etc.).
    - **Voltaxe (V)**: Axusta a diferenza de potencial para controlar a velocidade da reacción.
    - **Controis de Tempo**: Reproducir/Pausa e Escala de Tempo (1x a 100x) para prácticas longas.
2. **Cela Electroquímica**:
    - Visualiza o **Ánodo (+)** e o **Cátodo (-)**.
    - Mostra cambios físicos: burbullas de gas, depósito de masa e cambios de cor.
3. **Panel de Instrumentos**:
    - Lectura dixital en tempo real de Voltaxe, Intensidade e Tempo Simulado.
4. **Caderno de Laboratorio**:
    - Captura automaticamente os datos da simulación para a súa análise.
    - Inclúe unha **Ferramenta de Validación** para comprobar os teus cálculos da Constante de Faraday.

---

## 3. Step-by-Step Tutorial / 3. Titorial Paso a Paso

### Practical: Calculating Faraday's Constant with CuSO₄
### Práctica: Cálculo da Constante de Faraday con CuSO₄

1. **Setup / Configuración**:
    - Select **Copper(II) Sulfate (CuSO₄)** in the Control Panel.
    - Set the voltage to approximately **3.0 V**. You should see a current of about **0.600 A**.
    - Selecciona **Sulfato de Cobre(II) (CuSO₄)** no Panel de Control.
    - Axusta o voltaxe a aproximadamente **3,0 V**. Deberías ver unha intensidade de arredor de **0,600 A**.

2. **Simulation / Simulación**:
    - Click **Play**. The "Simulated Time" will start counting.
    - Set the **Speed to 10x** or higher to simulate a 30-minute reaction in a few minutes.
    - Observe how the **Cathode (-)** thickens with a brownish copper deposit.
    - Preme **Play**. O "Tempo Simulado" comezará a contar.
    - Axusta a **Velocidade a 10x** ou máis para simular unha reacción de 30 minutos en poucos minutos.
    - Observa como o **Cátodo (-)** engrosa cun depósito marrón de cobre.

3. **Data Collection / Recollida de Datos**:
    - Once you reach ~1800s (30 min), click **Pause**.
    - Scroll down to the **Lab Notebook**.
    - Record the **Final Mass (m)**, **Total Time (t)**, and **Current (I)** shown.
    - Unha vez chegues aos ~1800s (30 min), preme **Pausa**.
    - Desprázate cara abaixo ata o **Caderno de Laboratorio**.
    - Anota a **Masa Final (m)**, o **Tempo Total (t)** e a **Intensidade (I)** mostrados.

4. **Calculation / Cálculo**:
    - Rearrange the formula to solve for F: $F = \frac{I \cdot t \cdot M}{m \cdot n}$
    - Note: For Copper, $M = 63.546$ and $n = 2$.
    - Enter your result in the Notebook calculator to validate your precision.
    - Reordena a fórmula para despexar F: $F = \frac{I \cdot t \cdot M}{m \cdot n}$
    - Nota: Para o Cobre, $M = 63,546$ e $n = 2$.
    - Introduce o teu resultado na calculadora do Caderno para validar a túa precisión.

---

## 4. Advanced Experiments / 4. Experimentos Avanzados

| Reagent / Reactivo | Anode Reaction / Reacción en Ánodo | Cathode Reaction / Reacción en Cátodo | Visual Effect / Efecto Visual |
| :--- | :--- | :--- | :--- |
| **NaCl** | $2Cl^- \rightarrow Cl_2(g) + 2e^-$ | $2H_2O + 2e^- \rightarrow H_2(g) + 2OH^-$ | Bubbles + Pink solution (if Phenolphthalein active) |
| **H₂SO₄** | $2H_2O \rightarrow O_{2(g)} + 4H^+ + 4e^-$ | $2H^+ + 2e^- \rightarrow H_{2(g)}$ | Vigorous gas evolution at both electrodes |
| **AgNO₃** | $H_2O$ Oxidation | $Ag^+ + e^- \rightarrow Ag(s)$ | Silver plating on cathode |

---

> [!TIP]
> Use the **Phenolphthalein** toggle when experimenting with **NaCl** to visualize the production of hydroxide ions ($OH^-$) around the cathode!
>
> Usa o interruptor de **Fenolftaleína** cando experimentes con **NaCl** para visualizar a produción de ións hidróxido ($OH^-$) arredor do cátodo!
