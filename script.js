function calculateGrade() {
  let marks = [];

  for (let i = 1; i <= 5; i++) {
    let value = parseFloat(document.getElementById(`sub${i}`).value);
    if (isNaN(value)) {
      alert("Please enter marks for all subjects!");
      return;
    }
    if (value < 0 || value > 100) {
      alert("Marks should be between 0 and 100!");
      return;
    }
    marks.push(value);
  }

  let total = marks.reduce((a,b) => a + b, 0);
  let percentage = (total / 500) * 100;

  let grade, message;

  if (percentage >= 80) { grade="A+"; message="Outstanding! Excellent performance."; }
  else if (percentage >= 75) { grade="A"; message="Very good! Keep up the great work."; }
  else if (percentage >= 70) { grade="A-"; message="Good job! Aim for an even higher score."; }
  else if (percentage >= 65) { grade="B+"; message="Good effort! Room to improve."; }
  else if (percentage >= 60) { grade="B"; message="Satisfactory, keep practicing."; }
  else if (percentage >= 55) { grade="B-"; message="Fair, try to improve."; }
  else if (percentage >= 50) { grade="C+"; message="Passable, can do better."; }
  else if (percentage >= 45) { grade="C"; message="Average, needs improvement."; }
  else if (percentage >= 40) { grade="D"; message="Just passed, study more."; }
  else { grade="F"; message="Failed — don’t give up!"; }

  document.getElementById("result").classList.remove("hidden");
  document.getElementById("total").innerText = `Total Marks: ${total} / 500`;
  document.getElementById("percentage").innerText = `Percentage: ${percentage.toFixed(2)}%`;
  document.getElementById("grade").innerText = `Grade: ${grade}`;
  document.getElementById("message").innerText = message;

  const gradeColor = {
    "A+": "text-green-700",
    "A": "text-green-600",
    "A-": "text-green-500",
    "B+": "text-blue-600",
    "B": "text-blue-500",
    "B-": "text-blue-400",
    "C+": "text-yellow-500",
    "C": "text-yellow-400",
    "D": "text-orange-500",
    "F": "text-red-600"
  };
  document.getElementById("grade").className = `text-xl font-bold mt-2 ${gradeColor[grade]}`;
}

function resetForm() {
  for (let i=1;i<=5;i++) document.getElementById(`sub${i}`).value="";
  document.getElementById("result").classList.add("hidden");
}

// Prevent entering 'e', '-', or '.' in all number fields
for (let i = 1; i <= 5; i++) {
  document.getElementById(`sub${i}`).addEventListener("keydown", function(e) {
    if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
      e.preventDefault(); // block invalid keys
    }
  });
}
