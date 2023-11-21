// Funções para a Navbar
function toggleMenu() {
    var navigation = document.querySelector('.navigationindex');
    navigation.classList.toggle('show');
}

// Fecha o menu se um item for clicado 
var navigationLinks = document.querySelectorAll('.navigation_link');
navigationLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        var navigation = document.querySelector('.navigationindex');
        navigation.classList.remove('show');

    });
});

// Exibi o botão do menu em telas menores que 768 pixels
var menuButton = document.querySelector('.menu_button');
var navigationContainer = document.querySelector('.navigation_container');

window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
        menuButton.style.display = 'block';
        navigationContainer.style.display = 'none';
    } else {
        menuButton.style.display = 'none';
        navigationContainer.style.display = 'flex';
    }
});



function toggleMenu() {
    var navigation = document.querySelector('.navigationindex');
    navigation.classList.toggle('show');

    // Se o menu estiver sendo exibido, oculte os ícones de redes sociais
    var socialIconsContainer = document.querySelector('.navigation_social1');
    if (navigation.classList.contains('show')) {
        socialIconsContainer.classList.add('hide_social_icons');
    } else {
        socialIconsContainer.classList.remove('hide_social_icons');
    }
}

window.addEventListener('resize', function () {
    var socialIconsContainer = document.querySelector('.navigation_social1');
    var navigation = document.querySelector('.navigationindex');

    if (window.innerWidth < 768 && navigation.classList.contains('show')) {
        socialIconsContainer.classList.add('hide_social_icons');
    } else {
        socialIconsContainer.classList.remove('hide_social_icons');
    }
});