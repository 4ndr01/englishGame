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

    randomFormeButton.addEventListener('click', displayRandomForme);

    function displayRandomForme() {
        // Afficher la forme aléatoire
        randomFormeDisplay.textContent = "Forme aléatoire : " + getRandomForme();
    }

    function getRandomForme(){
        // Récupérer le tableau des formes
        let formes = ["Carré", "Rond", "Triangle", "Rectangle", "Ovale", "Hexagone", "Octogone", "Losange", "Coeur", "Etoile", "Croix", "Pentagone", "Trapeze", "Parallélogramme", "Cercle", "Cone", "Cylindre", "Cube", "Pyramide", "Sphère", "Prisme", "Diamant", "Losange", "Ovale"];

        // Choisir une forme aléatoire
        let randomForme = [];
        for (let i = 0; i < 3; i++) {
            let randomIndex = Math.floor(Math.random() * formes.length);
            randomForme.push(formes[randomIndex]);
        }

        return randomForme;
    }



    randomLetterButton.addEventListener('click', displayRandomLetter);

    function displayRandomLetter() {
        // Afficher la lettre aléatoire
        randomLetterDisplay.textContent = "Lettre aléatoire : " + getRandomLetter();

    }

    function getRandomLetter() {
        // Récupérer le tableau des lettres
        let letters = ["A", "B", "C", "D", "E", "F", "G", "H","I","J","K","L","M","N","O","P","Q","R","S","T","U", "V", "W", "X", "Y", "Z"];

        let randomLetter = [];
        for (let i = 0; i < 3; i++) {
            // Choisir une lettre aléatoire
            let randomIndex = Math.floor(Math.random() * letters.length);
            randomLetter.push(letters[randomIndex]);
        }

        return randomLetter;
    }


    randomDateButton.addEventListener('click', displayRandomDate);

    function displayRandomDate() {
        // Afficher la date aléatoire
        randomDateDisplay.textContent = "Date aléatoire : " + getRandomDate();
    }

    function getRandomDate() {
        // Récupérer le tableau des dates
        let dates = ["1998", "2000", "2002", "2004", "2006", "2008", "2010", "2012","2014","2016","2018","2020"];

        // Choisir une date aléatoire
        let randomDate = [];
        for (let i = 0; i < 3; i++) {
            let randomIndex = Math.floor(Math.random() * dates.length);
            randomDate.push(dates[randomIndex]);
        }

        return randomDate;
    }

    // Ajouter un gestionnaire d'événements pour le bouton de couleur aléatoire
    randomColorButton.addEventListener('click', displayRandomColor);

    // Fonction pour afficher une couleur aléatoire
    function displayRandomColor() {
        // Afficher la couleur aléatoire
        randomColorDisplay.textContent = "Couleur aléatoire : " + getRandomColor();
    }

    // Fonction pour obtenir une couleur aléatoire
    function getRandomColor() {
        // Récupérer le tableau des couleurs
        let colors = ["red", "blue", "green", "yellow", "orange", "purple", "black", "white"];

        // Choisir une couleur aléatoire
        let randomColor = [];
        for (let i = 0; i < 3; i++) {
            let randomIndex = Math.floor(Math.random() * colors.length);
            randomColor.push(colors[randomIndex]);
        }

        return randomColor;
    }

    // Ajouter un gestionnaire d'événements pour le commutateur de mode
    darkModeToggle.addEventListener('click', toggleDarkMode);

    function toggleDarkMode() {
        // Ajouter ou retirer la classe "dark-mode" du body
        body.classList.toggle('dark-mode');

        // Vous pouvez également stocker le choix de l'utilisateur dans un cookie ou local storage
    }



    // Définir les contraintes pour chaque thème
    let constraintsByTheme = {
        "Mouvement Artistique": ["Dates", "Lettres"],
        "Logos": ["Couleurs", "Formes", "Dates", "Types", "Lettres"],
        "Logiciel de création": ["Dates", "Types", "Lettres"],
        "Typographie": ["Formes", "Lettres"],
        "Métiers": ["Types", "Lettres"],
        "logo": ["Couleurs", "Formes", "Dates", "Types", "Lettres"],
        "Logo": ["Couleurs", "Formes", "Dates", "Types", "Lettres"],
        "metier": ["Types", "Lettres"],
        "Metier": ["Types", "Lettres"],
        "metiers": ["Types", "Lettres"],
        "Metiers": ["Types", "Lettres"],
        "Mouvement":["Dates", "Lettres"],
        "mouvement":["Dates", "Lettres"],
        "mouv":["Dates", "Lettres"],
        "Typo":["Formes", "Lettres"],
        "typo": ["Formes", "Lettres"],
        "Logiciel": ["Dates","Types","Lettres",],
        "logiciel": ["Dates", "Types", "Lettres"],


    };

    // Ajouter un gestionnaire d'événements pour détecter les changements dans le champ de texte
    themeInput.addEventListener("input", updateConstraints);

    function updateConstraints() {
        // Obtenir la valeur saisie dans le champ de texte
        let enteredTheme = themeInput.value.trim();

        // Vérifier si le thème saisi existe dans la liste des thèmes
        if (constraintsByTheme.hasOwnProperty(enteredTheme)) {
            let contraintes = constraintsByTheme[enteredTheme];

            // Mettre à jour le contenu des éléments avec la classe "contraintes"
            contrainteElements.forEach(function (element, index) {
                if (index < contraintes.length) {
                    element.textContent = "Contrainte " + (index + 1) + ": " + contraintes[index];
                } else {
                    element.textContent = "";
                }
            });
        } else {
            // Si le thème n'existe pas, effacer les contraintes
            contrainteElements.forEach(function (element) {
                element.textContent = "";
            });
        }
    }
});
