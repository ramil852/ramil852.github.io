const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // предотвращаем переход по якорю

    const targetId = link.getAttribute('href').substring(1);

    sections.forEach(section => {
      section.classList.toggle('active', section.id === targetId);
    });
  });
});