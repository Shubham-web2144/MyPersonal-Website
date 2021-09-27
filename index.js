const headerIcon = document.querySelector('.header_navicon');
const headerMenu = document.querySelector('.header_nav');

headerIcon.addEventListener('click', () => {
    headerMenu.classList.toggle('show_menu');
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '45px',
    duration: 1400,
    reset: true
});

sr.reveal('.home_img', {});
sr.reveal('.home_content', {delay: 80});

sr.reveal('h3', {delay : 120});
sr.reveal('p', {delay : 150});
sr.reveal('.about_btn', {delay : 180});

sr.reveal('h3', {delay: 200});
sr.reveal('.project_list', {delay : 230});
sr.reveal('.project_list_1',{delay: 240});
sr.reveal('.project_list_1',{delay: 240});

sr.reveal('h3', {delay : 250});
sr.reveal('.progress_bar', {delay : 280});
sr.reveal('.progress_box',{delay: 290});

sr.reveal('h3', {delay : 300});
sr.reveal('.input_field', {delay : 330});
sr.reveal('.contact_btn', {delay: 250});