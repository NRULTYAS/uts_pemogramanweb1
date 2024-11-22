document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault(); 


  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;


  if (password !== confirmPassword) {
      alert("Password dan Konfirmasi Password tidak cocok!");
      return;
  }


  const userData = { username, email, password };
  localStorage.setItem("user", JSON.stringify(userData));


  alert("Registrasi berhasil! Silakan login.");
  window.location.href = "login.html"; 
});
