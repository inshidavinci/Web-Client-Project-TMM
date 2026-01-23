
// 1. Workouts we have (object with muscle names as keys)
const workouts = {
    arms: ["Bicep curls", "Tricep dips", "Push-ups"],
    chest: ["Bench press", "Chest fly", "Push-ups"],
    abs: ["Plank", "Sit-ups", "Russian twists"],
    thighs: ["Squats", "Lunges", "Leg press"],
    calves: ["Calf raises", "Jump rope"]
};

// 2. Select all the clickable body parts from the SVG
// querySelectorAll returns a list (NodeList) of all elements with class body-part
const parts = document.querySelectorAll(".body-part");

// 3. Loop through each body part
// forEach runs the function once for each item in "parts"
parts.forEach(function(part) {

  // 4. Add a click event listener to each body part
  // When the user clicks, the function inside will run
  part.addEventListener("click", function() {
    
    // 5. Get the muscle name from the data-muscle attribute
    // dataset is used to access data-* attributes
    const muscle = part.dataset.muscle;

    // 6. If there is no workout for this muscle, stop the function
    // !workouts[muscle] means "if workouts[muscle] is undefined"
    if (!workouts[muscle]) {
      return;
    }

    // 7. Remove the "selected" class from all body parts
    // This makes sure only the clicked part is highlighted
    parts.forEach(function(p) {
      p.classList.remove("selected");
    });

    // 8. Add the "selected" class to the clicked part
    // This changes the color (CSS handles the color change)
    part.classList.add("selected");

    // 9. Update the workout box title
    // textContent changes the text inside the element
    document.getElementById("workout-title").textContent =
      muscle.toUpperCase() + " Workout";

    // 10. Update the workout box description
    // join(", ") turns the workout list into a single string with commas
    document.getElementById("workout-description").textContent =
      workouts[muscle].join(", ");
  });
});