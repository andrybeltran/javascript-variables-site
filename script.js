const studentName = "Andry Beltran";
let favoriteNumber = 7;
const isLearningJavaScript = true;

console.log("My name:", studentName);
console.log("My favorite number:", favoriteNumber);
console.log("Am I learning JavaScript?", isLearningJavaScript);

document.querySelector("#student-name").textContent = studentName;
document.querySelector("#favorite-number").textContent = favoriteNumber;
document.querySelector("#is-learning").textContent = isLearningJavaScript;
