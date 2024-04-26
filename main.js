const increaseButton=document.querySelector(".arttir");
const decreaseButton=document.querySelector(".azalt");
const number=document.querySelector(".numara");
let numaraa=0;

increaseButton.addEventListener("click", () => {
    numaraa++;
    number.innerHTML = `<i>${numaraa}</i>`;
});

decreaseButton.addEventListener("click", () => {
    numaraa--;
    number.innerHTML = `<i>${numaraa}</i>`;
});
