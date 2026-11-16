let openDialogs = document.querySelectorAll(".openDialog");
let closeDialogs = document.querySelectorAll(".closeDialog");
let dropdownbutton = document.getElementById("customDropdownButton")
let dropdownmenu = document.getElementById("customDropdownMenu")
let menuButton = document.getElementById("menuButton");
let navbarCollapse = document.getElementById("navbarMenuCollapse");

openDialogs.forEach((openDialog) => {
    openDialog.addEventListener("click", () => {
        const dialog = document.getElementById(openDialog.getAttribute("data-dialog"));
        dialog.showModal();
    });
});

closeDialogs.forEach((closeDialog) => {
    closeDialog.addEventListener("click", () => {
        const dialog = document.getElementById(closeDialog.getAttribute("data-dialog"));
        dialog.close();
    });
});

dropdownbutton.addEventListener("click", () => {
    dropdownmenu.classList.toggle("custom-active");
});
console.log(dropdownbutton);
console.log(dropdownmenu);
console.log(menuButton);
console.log(navbarCollapse);

menuButton.addEventListener("click", () => {
    navbarCollapse.classList.toggle("menu-open");

    console.log("Botão clicado!");
});
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("mensagem", mensagem);

    alert("Mensagem enviada com sucesso!");
    formulario.reset();
    console.log("Formulário enviado:", { nome, email, mensagem }); //Teste para ver se o codigo ta respondendo
});