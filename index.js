document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

  
      if (username === "Adwaid" && password === "123") {
        window.location.href = "thanks.html"; 
      } else {
        alert("Invalid username or password!");
      }
    });
  });
  