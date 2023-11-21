document.addEventListener('DOMContentLoaded', function () {
    const themeInput = document.getElementById('player1');
    const contrainteElements = document.querySelectorAll('.contraintes');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

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
