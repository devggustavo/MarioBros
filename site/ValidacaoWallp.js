 // Função para abrir a imagem em uma nova janela
 function openImage(imageUrl, imageName) {
    window.open(imageUrl, '_blank');
}

// Função para baixar a imagem
async function downloadImage(imageUrl, imageName) {
    try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = imageName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Erro ao baixar a imagem:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os itens da galeria
    const galleryItems = document.querySelectorAll('.gallery-items');

    // Adiciona eventos para cada item da galeria
    galleryItems.forEach(item => {
        const image = item.querySelector('img');
        const downloadIcon = document.createElement('div');
        downloadIcon.className = 'download-icon';
        downloadIcon.innerHTML = '<i class="material-icons">cloud_download</i>';

        downloadIcon.addEventListener('click', (event) => {
            event.stopPropagation();
            const imageUrl = image.src;
            const imageName = image.alt;
            downloadImage(imageUrl, imageName);
        });

        item.appendChild(downloadIcon);

        // Adiciona eventos para abrir a imagem em uma nova janela
        item.addEventListener('click', () => {
            const imageUrl = image.src;
            const imageName = image.alt;
            openImage(imageUrl, imageName);
        });
    });
});

function toggleMenu() {
    var navigation = document.querySelector('.navigation');
    navigation.classList.toggle('show');
}

// Fecha o menu se um item for clicado 
var navigationLinks = document.querySelectorAll('.navigation_link');
navigationLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        var navigation = document.querySelector('.navigation');
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
    var navigation = document.querySelector('.navigation');
    navigation.classList.toggle('show');

    // Se o menu estiver sendo exibido, oculte os ícones de redes sociais
    var socialIconsContainer = document.querySelector('.navigation_social');
    if (navigation.classList.contains('show')) {
        socialIconsContainer.classList.add('hide_social_icons');
    } else {
        socialIconsContainer.classList.remove('hide_social_icons');
    }
}

window.addEventListener('resize', function () {
    var socialIconsContainer = document.querySelector('.navigation_social');
    var navigation = document.querySelector('.navigation');

    if (window.innerWidth < 768 && navigation.classList.contains('show')) {
        socialIconsContainer.classList.add('hide_social_icons');
    } else {
        socialIconsContainer.classList.remove('hide_social_icons');
    }
});