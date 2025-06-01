# Raycasting

# ✨ 2D Raycasting Simulation

This project demonstrates a basic **2D raycasting engine**, simulating how a particle (representing a light source or player) "sees" its surroundings by casting rays and rendering a pseudo-3D scene. It's inspired by the core rendering technique behind early 3D games like *Wolfenstein 3D*.

[![Run on p5.js](https://img.shields.io/badge/Try%20Live%20Demo-p5.js-blue?style=for-the-badge)](https://editor.p5js.org/Usman_Ali/full/3Bj7Jo3a-)

## 🚀 Features

- **Raycasting Engine:** Projects rays in a given field of view (FOV) to detect wall collisions.
- **Rotatable Light Source:** Use `A` (left) and `D` (right) keys to rotate the view.
- **Movement Controls:** Move forward/backward using `W` and `S` keys.
- **Real-Time 3D Projection:** Renders a vertical slice-based scene similar to a first-person view.
- **Field of View Slider:** Dynamically adjust FOV using an interactive slider.
- **Corrected Perspective:** Applies cosine correction to avoid the fisheye effect.
- **Collision Detection:** Prevents the light source from passing through walls. *(✅ Implemented)*
- **Wall Texture Effect:** Color-coded walls to simulate visual texture. *(✅ Simulated)*

## 🎮 Controls

| Key        | Action           |
|------------|------------------|
| `A`        | Rotate Left      |
| `D`        | Rotate Right     |
| `W`        | Move Forward     |
| `S`        | Move Backward    |
| `Slider`   | Adjust FOV       |

## 📁 Files Structure

- `sketch.js` — Main simulation loop, rendering logic, and user input.
- `particle.js` — Defines the particle (player/light source) and its raycasting behavior.
- `ray.js` — Defines individual rays and collision detection with boundaries.
- `boundary.js` — Represents walls (obstacles) in the environment.

## 🧠 Concepts Demonstrated

- **2D Vector Mathematics** with `p5.Vector`.
- **Ray-Wall Intersection Calculations** using line segment math.
- **Cosine Fisheye Fix** for more realistic projection.
- **Dynamic Rendering** of distance-based wall slices.
- **Modular OOP Design** in p5.js.

## 🛠️ TODOs & Enhancements

- [x] Fix >180° FOV bug.
- [x] Prevent light source from passing through walls.
- [x] Apply cosine-based distance correction (fix fisheye effect).
- [x] Add texture effect to walls using color variation.
- [ ] Add minimap with ray view.
- [ ] Real wall textures using images.
- [ ] Enable dynamic wall creation/editing.

## 🧑‍💻 Author

**Usman Ali**  
BS Software Engineering — National University of Computer and Emerging Sciences
