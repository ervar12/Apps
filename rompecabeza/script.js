// Configuración del juego
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

let game;
let selectedImage;

// Inicializar el juego
window.onload = function() {
    game = new Phaser.Game(config);
};

function preload() {
    // Configurar eventos para el input de archivo
    document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
}

function create() {
    // Configurar el atributo 'willReadFrequently' en true para mejorar el rendimiento
    this.sys.canvas.context.canvas.willReadFrequently = true;

    // Agregar la imagen seleccionada al juego
    if (selectedImage) {
        this.add.image(400, 300, 'selectedImage');
    }
}

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const image = new Image();
            image.onload = function() {
                // Crear una textura con la imagen cargada
                const texture = game.textures.addImage('selectedImage', image);
                selectedImage = true;
            };
            image.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}
