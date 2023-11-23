let typeTheme = {
    "Illustration": ["2D Animator", "User interface", "Designer", "2D Illustrator", "Storyboarder"],
    "Communication": ["Social Media Strategist", "Digital Marketing Specialist", "Content Manager", "UX/UI Designer", "Marketing Data Analyst"]
}


// Sélectionner le corps du document
const body = document.body;

// Parcourir chaque couleur dans le tableau colorTheme
for (const [color, brands] of Object.entries(typeTheme)) {
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