# Game_of_Life

A 2D matrix-based ecosystem simulation inspired by Conway's Game of Life, built using **JavaScript** and **p5.js**. The project models an interactive food chain and ecological environment featuring multiple organisms and hazards interacting dynamically on a grid matrix.

## 🟢 Features & Entities

The simulation runs on a $30 \times 30$ grid where different entities occupy matrix cells represented by specific visual colors:

| ID | Entity | Color | Description | Behavior / Interactions | 
| ----- | ----- | ----- | ----- | ----- | 
| **0** | **Empty Space** | Gray (`#acacac`) | Unoccupied cell on the grid. | Available for entities to move or multiply into. | 
| **1** | **Grass** | Green | Base producer of the ecosystem. | Multiplies onto adjacent empty cells after reaching a growth threshold ($4$ cycles). Dies if it touches a Blackhole. | 
| **2** | **Grass Eater** | Yellow | Herbivore organism. | Moves across the grid, eats Grass to gain energy ($+1$), multiplies when energy reaches $> 20$, and dies if energy drops below $0$ or touches a Blackhole. | 
| **3** | **Predator** | Magenta (`#FF22E1`) | Carnivore organism. | Hunts and consumes Grass Eaters for energy, multiplies when energy reaches $> 15$, moves around, and starves or dies when hitting a Blackhole. | 
| **4** | **Persona** | Cyan (`#00FFFF`) | Special organism / Miner. | Consumes Rocks to gain energy, multiplies when energy reaches $> 15$, and dies if energy is depleted or encounters a Blackhole. | 
| **5** | **Rock** | White | Mineral resource / Obstacle. | Replicates extremely slowly (threshold of $1000$ cycles). Can be consumed by Persona entities. | 
| **6** | **Blackhole** | Black | Environmental hazard. | Static consuming anomaly. Instantly destroys any organism (Grass, Grass Eater, Predator, Persona, or Rock) that steps into adjacent space. | 

## 📁 File Structure

```
.
├── first.html       # Main HTML entry point linking p5.js and entity scripts
├── script.js        # Core simulation loop, matrix initialization, and rendering logic
├── grass.js         # Grass entity class definition
├── grassEater.js    # GrassEater entity class definition
├── predator.js      # Predator entity class definition
├── persona.js       # Persona entity class definition
├── rock.js          # Rock entity class definition
└── blackhole.js     # Blackhole entity class definition
```

## 🚀 Getting Started

### Prerequisites

No build tools or backend servers are required to run this project. You only need a modern web browser.

### Running the Project

1. Clone or download this repository:

   ```bash
   git clone https://github.com/mariaslanyan/Game_of_Life.git
   ```

2. Open the project folder:

   ```bash
   cd Game_of_Life
   ```

3. Open `first.html` directly in any web browser (Chrome, Firefox, Edge, Safari).

## 🛠️ Built With

* [p5.js](https://p5js.org/) - JavaScript library for creative coding and grid rendering (v0.5.14 included via CDN).
* JavaScript (ES6 Classes)