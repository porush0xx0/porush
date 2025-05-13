document.getElementById("yesBtn").addEventListener("click", function () {
  const confetti = document.getElementById("confetti");
  confetti.innerHTML = "She said YES!";
  confetti.style.fontSize = "2em";
  confetti.style.marginTop = "20px";
  confetti.style.color = "#fff";
  confetti.style.animation = "fadeIn 1s ease-in";
});