const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Variable para controlar si se ha hecho clic en el botón "Sí" anteriormente
let hasClickedYes = false;

yesBtn.addEventListener("click", () => {
  if (!hasClickedYes) {
    question.innerHTML = "Te amo, sabía que ibas a decir que sí. ¡Muak!";
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
    
    // Marcar que se ha hecho clic en el botón "Sí"
    hasClickedYes = true;
  } else {
    // Si ya se ha hecho clic en el botón "Sí", redirigir a "carta.html"
    window.location.href = "carta.html";
  }
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
