// Obtém todos os elementos com a classe 'nav'
const navLinks = document.querySelectorAll('.nav');

// Adiciona um event listener de click para cada elemento
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove a classe 'nav-active' de todos os elementos com a classe 'nav'
    navLinks.forEach(link => link.classList.remove('nav-active'));
    // Adiciona a classe 'nav-active' ao elemento que foi clicado
    link.classList.add('nav-active');
  });
});
