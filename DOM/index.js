const box = document.querySelector(".box");
box.addEventListener("click" , () => {
    const boxColorCambiado = document.querySelector(".box--color");
    boxColorCambiado.classList.toggle("active");
});