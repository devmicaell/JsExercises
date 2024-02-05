document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("modeToggle");
    const lampImage = document.getElementById("lampada");

    modeToggle.addEventListener("change", function () {
        document.body.classList.toggle("dark-mode");
        
        if (document.body.classList.contains("dark-mode")) {
            lampImage.src = "Imagens/lampada-realista-com-eletricidade_23-2149129410-removebg-preview.png";
        } else {
            lampImage.src = "Imagens/istockphoto-185099361-170667a__1_-removebg-preview.png";
        }
    });
});
