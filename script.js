document.addEventListener('DOMContentLoaded', function () {
    const themeInput = document.getElementById('player1');

    const contrainteElements = document.querySelectorAll('.contraintes');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const randomColorButton = document.getElementById('randomColorButton');
    const randomColorDisplay = document.getElementById('randomColorDisplay');
    const randomDateButton = document.getElementById('randomDateButton');
    const randomDateDisplay = document.getElementById('randomDateDisplay');
    const randomLetterButton = document.getElementById('randomLetterButton');
    const randomLetterDisplay = document.getElementById('randomLetterDisplay');
    const randomFormeButton = document.getElementById('randomFormeButton');
    const randomFormeDisplay = document.getElementById('randomFormeDisplay');
    const randomTypoButton = document.getElementById('randomTypoButton');
    const randomTypoDisplay = document.getElementById('randomTypoDisplay');



    document.addEventListener('DOMContentLoaded', function() {
        // Sélectionnez tous les éléments avec la classe 'hover'
        let hoverElements = document.querySelectorAll('.hover');

        // Ajoutez des écouteurs d'événements pour le survol
        hoverElements.forEach(function(element) {
            element.addEventListener('mouseenter', function() {
                element.classList.add('flip');
            });

            element.addEventListener('mouseleave', function() {
                element.classList.remove('flip');
            });

            // Ajoutez également des écouteurs d'événements pour les écrans tactiles
            element.addEventListener('touchstart', function() {
                element.classList.add('flip');
            });

            element.addEventListener('touchend', function() {
                element.classList.remove('flip');
            });
        });
    });





    // Tableau pour stocker les formes déjà sélectionnées
    let selectedFormes = [];


    function fadeIn(element, content) {
        element.classList.remove('active'); // Supprimer la classe active pour déclencher une nouvelle transition
        setTimeout(function () {
            element.textContent = content;
            element.classList.add('active'); // Ajouter la classe active pour déclencher l'effet fade-in
        }, 10); // Délai court pour permettre le rendu initial sans transition
    }


    function getRandomTypo() {
        // Récupérer le tableau des formes
        let typo = ["Arial", "Times New Roman", "Verdana", "Helvetica", "Tahoma", "Trebuchet MS", "Impact", "Comic Sans MS", "Courier New", "Brush Script MT"];

        // Choisir trois formes aléatoires distinctes
        let randomTypo = [];
        for (let i = 0; i < 3; i++) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * typo.length);
            } while (selectedFormes.includes(typo[randomIndex]));

            randomTypo.push(typo[randomIndex]);
            selectedFormes.push(typo[randomIndex]);
        }

        // Réinitialiser le tableau des formes sélectionnées après avoir choisi trois formes
        selectedFormes = [];

        return randomTypo;
    }

    randomTypoButton.addEventListener('click', displayRandomTypo);


    function displayRandomTypo() {
        // Afficher la forme aléatoire
        randomTypoDisplay.textContent = "Random typo: " + getRandomTypo();
        fadeIn(randomTypoDisplay, "Random typo: " + getRandomTypo());
    }

// Fonction pour obtenir trois formes aléatoires distinctes
    function getRandomFormes() {
        // Récupérer le tableau des formes
        let formes = ["Square", "Round", "Triangle", "Rectangle", "Hexagon", "Octogon", "Lozenge"];

        // Choisir trois formes aléatoires distinctes
        let randomFormes = [];
        for (let i = 0; i < 3; i++) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * formes.length);
            } while (selectedFormes.includes(formes[randomIndex]));

            randomFormes.push(formes[randomIndex]);
            selectedFormes.push(formes[randomIndex]);
        }

        // Réinitialiser le tableau des formes sélectionnées après avoir choisi trois formes
        selectedFormes = [];

        return randomFormes;
    }

// Utilisation dans votre fonction d'affichage
    randomFormeButton.addEventListener('click', displayRandomForme);

    function displayRandomForme() {
        // Afficher la forme aléatoire
        randomFormeDisplay.textContent = "Random shape: " + getRandomFormes();
        fadeIn(randomFormeDisplay, "Random shape: " + getRandomFormes());

    }


// Tableau pour stocker les lettres déjà sélectionnées
    let selectedLetters = [];

// Fonction pour obtenir trois lettres aléatoires distinctes
    function getRandomLetters() {
        // Récupérer le tableau des lettres
        let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W"];

        // Choisir trois lettres aléatoires distinctes
        let randomLetters = [];
        for (let i = 0; i < 3; i++) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * letters.length);
            } while (selectedLetters.includes(letters[randomIndex]));

            randomLetters.push(letters[randomIndex]);
            selectedLetters.push(letters[randomIndex]);
        }

        // Réinitialiser le tableau des lettres sélectionnées après avoir choisi trois lettres
        selectedLetters = [];

        return randomLetters;
    }

// Utilisation dans votre fonction d'affichage
    randomLetterButton.addEventListener('click', displayRandomLetter);

    function displayRandomLetter() {
        // Afficher la lettre aléatoire
        randomLetterDisplay.textContent = "Random letter: " + getRandomLetters();
        fadeIn(randomLetterDisplay, "Random letter: " + getRandomLetters());
    }


    // Tableau pour stocker les dates déjà sélectionnées
    let selectedDates = [];

// Fonction pour obtenir trois dates aléatoires distinctes
    function getRandomDates() {
        // Récupérer le tableau des dates
        let dates = ["1500-1700", "1700-1900", "1900-2000", "2000-2020"];

        // Choisir trois dates aléatoires distinctes
        let randomDates = [];
        for (let i = 0; i < 3; i++) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * dates.length);
            } while (selectedDates.includes(dates[randomIndex]));

            randomDates.push(dates[randomIndex]);
            selectedDates.push(dates[randomIndex]);
        }

        // Réinitialiser le tableau des dates sélectionnées après avoir choisi trois dates
        selectedDates = [];

        return randomDates;
    }

// Utilisation dans votre fonction d'affichage
    randomDateButton.addEventListener('click', displayRandomDate);

    function displayRandomDate() {
        // Afficher la date aléatoire
        randomDateDisplay.textContent = "Random date: " + getRandomDates();
        fadeIn(randomDateDisplay, "Random date: " + getRandomDates());
    }

// Tableau pour stocker les couleurs déjà sélectionnées
    let selectedColors = [];

// Ajouter un gestionnaire d'événements pour le bouton de couleur aléatoire
    randomColorButton.addEventListener('click', displayRandomColor);

// Fonction pour afficher une couleur aléatoire
    function displayRandomColor() {
        // Afficher la couleur aléatoire
        randomColorDisplay.textContent = "Random colors : " + getRandomColors().join(', ');
        fadeIn(randomColorDisplay, "Random colors: " + getRandomColors().join(', '));
    }

// Fonction pour obtenir trois couleurs aléatoires distinctes
    function getRandomColors() {
        // Récupérer le tableau des couleurs
        let colors = ["red", "blue", "green", "yellow", "orange", "purple", "black", "white", "brown", "grey"];

        // Choisir trois couleurs aléatoires distinctes
        let randomColors = [];
        for (let i = 0; i < 3; i++) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * colors.length);
            } while (selectedColors.includes(colors[randomIndex])); // Vérifier si la couleur est déjà sélectionnée

            randomColors.push(colors[randomIndex]);
            selectedColors.push(colors[randomIndex]);
        }

        // Réinitialiser le tableau des couleurs sélectionnées après avoir choisi trois couleurs
        selectedColors = [];

        return randomColors;
    }


    // Ajouter un gestionnaire d'événements pour le commutateur de mode
    darkModeToggle.addEventListener('click', toggleDarkMode);

    function toggleDarkMode() {
        // Ajouter ou retirer la classe "dark-mode" du body
        body.classList.toggle('dark-mode');

        // Vous pouvez également stocker le choix de l'utilisateur dans un cookie ou local storage
    }


    

});
