let count = 0;

function increaseCount() {
  if (count < 20) {
    count++;
    document.getElementById("count").innerHTML = count;
  } else {
    alert(`You Have Reached the Maximum Limit of ${count}`);
  }
}

function decreaseCount() {
  if (count > 0) {
    count--;
    document.getElementById("count").innerHTML = count;
  }
}

function resetCount() {
  if (count > 0) {
    count = 0;
    document.getElementById("count").innerHTML = count;
  }
}

// Auto Increment Function

// function startAutoIncrement() {
//   let intervalId = null;

//   intervalId = setInterval(() => {
//     if (count < 20) {
//       count++;
//       document.getElementById("count").innerHTML = count;
//       if (intervalId !== null) return;
//     }

//     else {
//       clearInterval(intervalId);
//       alert(`You Have Reached the Maximum Limit of ${count}`);
//     }
//   }, 1000);
// }

let intervalId = null;

function startAutoIncrement() {
  if (intervalId !== null) return; // Prevent multiple intervals

  intervalId = setInterval(() => {
    if (count < 20) {
      count++;
      document.getElementById("count").innerHTML = count;
    } else {
      stopCounting();
      alert(`You Have Reached the Maximum Limit of ${count}`);
    }

    // if (count >= 20) {
    //   stopCounting();
    //   alert(`You Have Reached the Maximum Limit of ${count}`);
    //   count = 0; // Ensure count does not exceed 20
    //   document.getElementById("count").innerHTML = count;
    // }
  }, 1000);
}

function stopCounting() {
  clearInterval(intervalId);
  intervalId = null;
}





function setTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}

document.getElementById("themeToggleButton").addEventListener("click", () => {
  const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
  setTheme(newTheme);
});

setTheme(localStorage.getItem("theme") || "light");
