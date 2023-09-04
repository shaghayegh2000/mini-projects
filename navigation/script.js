const links = document.querySelectorAll('.nav-link');

links.forEach((link) => {
    link.addEventListener('click', () => {
        links.forEach((link) => {
            link.className = "nav-link";
        })
        link.classList.add('change');

        link.previousElementSibling.classList.add('prevElChange');
        link.nextElementSibling.classList.add('nexElChange');

    })
})