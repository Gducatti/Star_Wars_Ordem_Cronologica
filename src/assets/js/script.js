const cards = document.querySelectorAll(".box");

cards.forEach(card => {
    card.addEventListener("click", () => {
        alert("Você clicou em um item da timeline!");
    });
});
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.style.border = "2px solid gold";
    });
});