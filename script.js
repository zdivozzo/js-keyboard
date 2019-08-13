let context = new AudioContext();

// List of musical notes and their frequencies
let notes = {
  C: 261.6,
  D: 293.7,
  E: 329.6,
  F: 349.2,
  G: 392.0,
  A: 440.0,
  B: 493.9,
  C2: 523.3
};

// Generate a sound based on the provided frequency
const makeSound = frequency => {
  let o = context.createOscillator();
  o.type = "sine";
  o.frequency.value = frequency;
  o.connect(context.destination);
  o.start();
  o.stop(context.currentTime + 0.2);
};

// Loop through and create buttons / event listeners for each note
for (let [key, value] of Object.entries(notes)) {
  let button = document.createElement("button");
  button.innerHTML = key.replace(/[0-9]/g, ""); //Strip out number on Do2

  let body = document.getElementById("keys");
  body.appendChild(button);

  button.addEventListener("click", () => makeSound(value));
}
