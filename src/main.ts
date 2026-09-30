/**
 * Main entry point for the CMPM 121 Section Activity
 * Simple starter template - customize to your heart's content!
 */

console.log("🎮 CMPM 121 - Starting...");

// Simple counter for demonstration
let counter: number = 0;

// Create basic HTML structure
document.body.innerHTML = `
  <h1>CMPM 121 Project</h1>
  <p>cat = <span id="counter">0</span></p>
  <button id="increment">Click to meow!</button>
`;

// Add click handler
const button = document.getElementById("increment")!;
const counterElement = document.getElementById("counter")!;

button.addEventListener("click", () => {
  counter++;
  counterElement.textContent = "meoww! " + counter.toString();
  console.log("I have these thingies:", button, counterElement, counter);
});
