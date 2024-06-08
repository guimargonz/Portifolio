const botaoMostrarProjetos = document.querySelector(".btn-mostrar-projetos");
const botaoEsconderProjetos = document.querySelector(".btn-esconder-projetos");
const projetos = document.querySelectorAll(".projeto");

botaoMostrarProjetos.addEventListener("click", () => {
    mostrarMaisProjetos();
    botaoMostrarProjetos.style.display = "none";
    botaoEsconderProjetos.style.display = "block";
});

botaoEsconderProjetos.addEventListener("click", () => {
    esconderProjetos();
    botaoMostrarProjetos.style.display = "block";
    botaoEsconderProjetos.style.display = "none";
});

function mostrarMaisProjetos() {
    projetos.forEach(projeto => {
        projeto.classList.add("ativo");
    });
}

function esconderProjetos() {
    projetos.forEach((projeto, index) => {
        if (index >= 4) {
            projeto.classList.remove("ativo");
        }
    });
}
