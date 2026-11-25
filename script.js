  
const projects = [
    {
        title: "Duelo local de tanques",
        summary: "Dos jugadores se enfrentan en una arena usando movimiento y disparos con física.",
        image: "Imagenes/tanque.jpg",
        symbol: "🎮",
        description: "Juego multijugador local en el que cada jugador controla un tanque. Los disparos se cargan antes de lanzar proyectiles con física; las explosiones aplican daño y empuje, y la cámara sigue la partida.",
        features: [
            "Aprendí a controlar dos tanques con entradas independientes y físicas de Rigidbody.",
            "Aprendí a crear disparos cargables, proyectiles y explosiones con daño en área.",
            "Aprendí a programar vida, rondas, ganador y reaparición de jugadores.",
            "Aprendí a ajustar la cámara según la distancia entre los jugadores.",
            "Aprendí a integrar efectos de sonido y partículas."
        ]
    },
    {
        title: "Survival Shooter",
        summary: "Un shooter de supervivencia en el que el jugador lucha contra enemigos que lo persiguen.",
        image: "Imagenes/proyecto2.jpg",
        symbol: "🕹️",
        description: "Shooter de supervivencia donde el jugador se mueve y apunta mientras combate enemigos que lo persiguen. Incluye gestión de vida, puntuación y fin de partida.",
        features: [
            "Aprendí a controlar el movimiento del jugador con teclado y a apuntar con el ratón.",
            "Aprendí a implementar disparos con raycast, efectos y detección de enemigos.",
            "Aprendí a usar NavMeshAgent para perseguir al jugador y generar enemigos aleatoriamente.",
            "Aprendí a gestionar vida, puntuación, feedback visual de daño y reinicio de partida."
        ]
    },
    {
        title: "Exploración en primera persona",
        summary: "Una experiencia 3D centrada en explorar e interactuar con el entorno.",
        image: "Imagenes/ImagenProyectoPersonal.png",
        symbol: "🚀",
        description: "Proyecto de exploración en primera persona con movimiento, linterna y objetos interactivos como puertas, cajones e interruptores.",
        features: [
            "Aprendí a implementar movimiento en primera persona con CharacterController, cámara, carrera y agacharse.",
            "Aprendí a detectar objetos con raycasts y una interfaz reutilizable de interacción.",
            "Aprendí a animar puertas y cajones con corutinas y a controlar luces con interruptores.",
            "Aprendí a alternar una linterna y definir datos de objetos con ScriptableObject."
        ]
    }
];

let currentProject = 0;

// Elementos HTML
const projectArt = document.getElementById("projectArt");
const projectImage = document.getElementById("projectImage");
const projectSymbol = document.getElementById("projectSymbol");
const projectTitle = document.getElementById("projectTitle");
const projectSummary = document.getElementById("projectSummary");
const dots = document.querySelectorAll(".dot");

const previous = document.getElementById("previous");
const next = document.getElementById("next");

const dialog = document.getElementById("projectDialog");
const openDetails = document.getElementById("openDetails");
const closeDialog = document.getElementById("closeDialog");
const modalArt = document.getElementById("modalArt");
const modalImage = document.getElementById("modalImage");
const modalSymbol = document.getElementById("modalSymbol");

// Cambiar proyecto
function showProject(index) {
    currentProject = (index + projects.length) % projects.length;

    const project = projects[currentProject];

    projectArt.classList.toggle("art-two", currentProject === 1);
    projectArt.classList.toggle("art-three", currentProject === 2);
    projectImage.hidden = !project.image;
    projectSymbol.hidden = Boolean(project.image);
    if (project.image) {
        projectImage.src = project.image;
        projectImage.alt = "Imagen de " + project.title;
    }
    projectSymbol.textContent = project.symbol;

    projectTitle.textContent = project.title;
    projectSummary.textContent = project.summary;

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", currentProject === index);
    });
}

// Botón anterior
previous.addEventListener("click", () => {
    showProject(currentProject - 1);
});

// Botón siguiente
next.addEventListener("click", () => {
    showProject(currentProject + 1);
});

// Abrir información del proyecto
openDetails.addEventListener("click", () => {
    const project = projects[currentProject];

    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalDescription").textContent = project.description;

    modalArt.classList.toggle("art-two", currentProject === 1);
    modalArt.classList.toggle("art-three", currentProject === 2);
    modalImage.hidden = !project.image;
    modalSymbol.hidden = Boolean(project.image);
    if (project.image) {
        modalImage.src = project.image;
        modalImage.alt = "Imagen de " + project.title;
    }
    modalSymbol.textContent = project.symbol;

    // Mostrar lo aprendido
    const features = document.getElementById("modalFeatures");
    features.innerHTML = "";

    project.features.forEach(feature => {
        const li = document.createElement("li");
        li.textContent = feature;
        features.appendChild(li);
    });

    dialog.showModal();
});

// Cerrar información
closeDialog.addEventListener("click", () => {
    dialog.close();
});

// Mostrar el primer proyecto al iniciar
showProject(0);
