/* ============================================================
   VoltEdge Solutions - About Page JavaScript
   Module: WEDE5020 - Web Development (Introduction)
   Description: Handles the team photo gallery lightbox.
   Clicking a team portrait opens it in a full screen overlay
   with the persons name and role displayed below the image.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
    setupLightbox();
});


/* ============================================================
   LIGHTBOX
   Builds the lightbox overlay once and reuses it for all
   portrait images. Clicking a portrait opens the lightbox
   with that persons photo, name, and role.
   ============================================================ */

function setupLightbox() {

    /* Create the lightbox overlay element and add it to the page */
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML =
        '<div id="lightbox-content">' +
            '<button id="lightbox-close" aria-label="Close photo viewer">&times;</button>' +
            '<img id="lightbox-img" src="" alt="" />' +
            '<div id="lightbox-caption">' +
                '<p id="lightbox-name"></p>' +
                '<p id="lightbox-role"></p>' +
            '</div>' +
        '</div>';
    document.body.appendChild(lightbox);

    /* Add a click listener to every portrait image */
    document.querySelectorAll('.portrait img').forEach(function (img) {

        /* Show a pointer cursor so users know the image is clickable */
        img.style.cursor = 'pointer';

        img.addEventListener('click', function () {

            /* Get the persons name and role from the card */
            const card = this.closest('.team-card');
            const name = card.querySelector('h3').textContent;
            const role = card.querySelector('.role').textContent;

            /* Populate the lightbox with this persons details */
            document.getElementById('lightbox-img').src   = this.src;
            document.getElementById('lightbox-img').alt   = 'Portrait photo of ' + name;
            document.getElementById('lightbox-name').textContent = name;
            document.getElementById('lightbox-role').textContent = role;

            /* Show the lightbox */
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    /* Close lightbox when clicking the X button */
    document.getElementById('lightbox-close').addEventListener('click', closeLightbox);

    /* Close lightbox when clicking outside the image */
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    /* Close lightbox with the Escape key */
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}