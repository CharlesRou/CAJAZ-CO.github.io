// Fonction pour gérer l'affichage des sections
function toggleSection(sectionId) {
    // Cacher toutes les sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Afficher la section sélectionnée
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
        
        // Ajouter une animation de fade in
        selectedSection.style.opacity = '0';
        setTimeout(() => {
            selectedSection.style.opacity = '1';
        }, 100);
    }
}

// Afficher la section d'accueil par défaut
document.addEventListener('DOMContentLoaded', () => {
    toggleSection('accueil');
    
    // Animation des images au survol
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.3s ease';
        });
        
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });
});

// Effet de parallaxe pour les étoiles
window.addEventListener('mousemove', (e) => {
    const stars = document.querySelector('.stars');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    stars.style.transform = `translate(-${x * 50}px, -${y * 50}px)`;
});
