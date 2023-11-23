let letterTheme = {
    "A": ["Art director", "Artistic director", "Artisan", "Artisan"],
    "B": ["Brand manager", "Book designer"],
    "C": ["Creative director", "concepte-artist"],
    "d": ["Digital designer", "Design manager"],
    "e": ["Editorial designer"],
    "f": ["Fashion designer"],
    "g": ["Graphic designer"],
    "h": ["Human factors designer"],
    "i": ["Illustrator", "Industrial designer"],
    "j": ["Jewelry designer"],
    "k": ["Kitchenware designer"],
    "l": ["Lighting designer"],
    "m": ["Multimedia designer"],
    "n": ["Nail art"],
    "o": ["Ornament designer"],
    "p": ["Package designer", "Product designer"],
    "q": ["Quilt designer"],
    "r": ["Retail designer"],
    "s": ["Set decorator", "Set designer", "Signage designer", "Sound designer", "Stage designer", "Sustainable design"],
    "t": ["Textile designer"],
    "u": ["User interface designer"],
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