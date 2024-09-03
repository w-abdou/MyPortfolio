function toggleFile(fileId) {
    var fileContent = document.getElementById(fileId);
    if (fileContent.style.display === 'block') {
        fileContent.style.display = 'none';
    } else {
        var offsetX = Math.floor(Math.random() * 200) - 100; 
        var offsetY = Math.floor(Math.random() * 200) - 100; 
        fileContent.style.display = 'block';
        fileContent.style.top = `calc(50% + ${offsetY}px)`;
        fileContent.style.left = `calc(50% + ${offsetX}px)`;
        fileContent.style.transform = 'translate(-50%, -50%)';
        bringToFront(fileContent);
    }
}

function bringToFront(element) {
    var contents = document.querySelectorAll('.content');
    contents.forEach(content => content.style.zIndex = 0);
    element.style.zIndex = 10;
}

function toggleFullscreen(fileId) {
    var fileContent = document.getElementById(fileId);
    if (fileContent.classList.contains('fullscreen')) {
        fileContent.classList.remove('fullscreen');
        fileContent.style.width = '300px';
        fileContent.style.height = '300px';
        fileContent.style.top = '50%';
        fileContent.style.left = '50%';
        fileContent.style.transform = 'translate(-50%, -50%)';
    } else {
        fileContent.classList.add('fullscreen');
        fileContent.style.width = '80%';
        fileContent.style.height = '80%';
        fileContent.style.top = '50%';
        fileContent.style.left = '50%';
        fileContent.style.transform = 'translate(-50%, -50%)';
        bringToFront(fileContent);
    }
}

function toggleIcons() {
    var smallIcons = document.querySelector('.small-icon-container');
    smallIcons.style.display = (smallIcons.style.display === 'none' || smallIcons.style.display === '') ? 'flex' : 'none';
}

function toggleBubble() {
    var bubble = document.getElementById('bubble');
    var iconRight = document.querySelector('#icon-right img:first-child');

    bubble.style.display = (bubble.style.display === 'none') ? 'block' : 'none';

    if (bubble.style.display === 'none') {
        iconRight.src = 'icons/vee waving not.svg'; 
    } else {
        iconRight.src = 'icons/vee waving 2.svg'; 
    }
}
