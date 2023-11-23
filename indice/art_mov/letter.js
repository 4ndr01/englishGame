let letterTheme = {
    "a": ["Abstract", "Expressionism" , "Art Nouveau", "Arte Povera" , "Ashcan School" , "Aestheticism"],
    "b": ["Baroque", "Byzantine art", "Bauhaus", "Biedermeier", "Birmingham Group", "Birmingham Group"],
    "c": ["Cubism", "Classicism", "Conceptual art", "Constructivism", "Cubism", "Classicism"],
    "d": ["Dada"],
    "u": ["Ukiyo-e"],
    "v": ["Video Art"],
    "w": ["Western Art"]


};

// Sélectionner le corps du document
const body = document.body;

// Parcourir chaque couleur dans le tableau colorTheme
for (const [color, brands] of Object.entries(letterTheme)) {
    // Créer un élément de titre pour la couleur
    const colorTitle = document.createElement('h2');
    colorTitle.textContent = color.charAt(0).toUpperCase() + color.slice(1); // Mettre la première lettre en majuscule
    body.appendChild(colorTitle);

    // Créer une liste ordonnée pour les marques de cette couleur
    const brandList = document.createElement('ol');

    // Parcourir chaque marque dans la liste des marques associées à cette couleur
    for (const brand of brands) {
        // Créer un élément de liste pour chaque marque
        const brandItem = document.createElement('li');
        brandItem.textContent = brand;

        // Ajouter l'élément de liste à la liste ordonnée
        brandList.appendChild(brandItem);
    }

    // Ajouter la liste ordonnée à la page
    body.appendChild(brandList);
}