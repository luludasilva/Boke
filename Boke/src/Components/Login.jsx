
document.getElementById("loginBtn").addEventListener("click", function () {
    document.getElementById("loginPopup").style.display = "block";
  });
  
  document
    .getElementById("loginPopup")
    .addEventListener("mouseleave", function () {
      this.style.display = "none";
    });