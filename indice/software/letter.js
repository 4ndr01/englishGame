let letterTheme = {
    "A": ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Adobe XD", "Adobe Premiere Pro", "Adobe After Effects", "Adobe Lightroom", "Adobe Dreamweaver", "Adobe Animate", "Adobe Audition", "Adobe Dimension", "Adobe Acrobat", "Adobe Bridge", "Adobe Character Animator", "Adobe Fuse", "Adobe InCopy", "Adobe Media Encoder", "Adobe Prelude", "Adobe Spark", "Adobe Stock", "Adobe Story", "Adobe XD"],
    "B": ["Blender", "Balsamiq", "Bootstrap", "Blocs"],
    "C": ["Cinema 4D", "Clip Studio Paint", "Coda", "Crello"],
    "D": ["DaVinci Resolve", "Dreamweaver"],
    "F": ["Final Cut Pro", "Figma", "Framer"],
    "G": ["Gimp", "Gravit Designer"],
    "H": ["Hype"],
    "I": ["InVision", "Inkscape"],
    "K": ["Keynote"],
    "L": ["Lightroom", "Lightworks"],
    "M": ["Maya", "Muse"],
    "P": ["Paint", "Photoshop", "Premiere Pro", "Procreate"],
    "S": ["Sketch", "Spark", "Sublime Text"],
    "T": ["Tumult Hype"],
    "W": ["WordPress"],
    "X": ["Xcode"]

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