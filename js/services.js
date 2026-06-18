/* ============================================================
   VoltEdge Solutions - Services Page JavaScript
   Module: WEDE5020 - Web Development (Introduction)
   Description: Handles collapsible service sections and
   a live search bar that filters services by keyword.
   ============================================================ */


document.addEventListener('DOMContentLoaded', function () {
    setupAccordions();
    setupSearch();
});


/* ============================================================
   ACCORDION
   Makes each service category section collapsible.
   Clicking the heading toggles the content open or closed.
   ============================================================ */

function setupAccordions() {

    /* Find all accordion toggle buttons */
    const toggles = document.querySelectorAll('.accordion-toggle');

    toggles.forEach(function (toggle) {
        toggle.addEventListener('click', function () {

            const section = this.closest('.accordion-section');
            const body    = section.querySelector('.accordion-body');
            const icon    = this.querySelector('.accordion-icon');
            const isOpen  = section.classList.contains('open');

            if (isOpen) {
                /* Close this section */
                section.classList.remove('open');
                body.style.maxHeight = null;
                icon.textContent = '+';
            } else {
                /* Open this section */
                section.classList.add('open');
                body.style.maxHeight = body.scrollHeight + 'px';
                icon.textContent = '-';
            }
        });
    });

    /* Open the first section by default so the page does not look empty */
    const first = document.querySelector('.accordion-section');
    if (first) {
        first.classList.add('open');
        const body = first.querySelector('.accordion-body');
        const icon = first.querySelector('.accordion-icon');
        body.style.maxHeight = body.scrollHeight + 'px';
        icon.textContent = '-';
    }
}


/* ============================================================
   SEARCH
   Listens for input in the search bar and hides any article
   cards that do not contain the search text. If no articles
   match within a section, the whole section is hidden too.
   Clears and shows everything when the search is empty.
   ============================================================ */

function setupSearch() {

    const searchInput = document.getElementById('service-search');

    searchInput.addEventListener('input', function () {

        const query = this.value.trim().toLowerCase();

        /* Get all service sections and articles */
        const sections  = document.querySelectorAll('.accordion-section');

        if (query === '') {
            /* Empty search - restore everything to original state */
            sections.forEach(function (section) {
                section.style.display = '';
                section.querySelectorAll('article').forEach(function (article) {
                    article.style.display = '';
                });
            });
            return;
        }

        /* Loop through each section and check its articles */
        sections.forEach(function (section) {

            const articles    = section.querySelectorAll('article');
            let sectionHasMatch = false;

            articles.forEach(function (article) {
                /* Search inside the article text */
                const text = article.textContent.toLowerCase();

                if (text.includes(query)) {
                    article.style.display = '';
                    sectionHasMatch = true;
                } else {
                    article.style.display = 'none';
                }
            });

            /* Also check if the section heading itself matches */
            const heading = section.querySelector('.accordion-toggle span:first-child');
            if (heading && heading.textContent.toLowerCase().includes(query)) {
                sectionHasMatch = true;
                /* Show all articles in this section if the heading matches */
                articles.forEach(function (article) {
                    article.style.display = '';
                });
            }

            /* Hide the whole section if nothing in it matched */
            if (sectionHasMatch) {
                section.style.display = '';
                /* Auto open matched sections so results are visible */
                const body = section.querySelector('.accordion-body');
                const icon = section.querySelector('.accordion-icon');
                section.classList.add('open');
                body.style.maxHeight = body.scrollHeight + 'px';
                icon.textContent = '-';
            } else {
                section.style.display = 'none';
            }
        });

        /* Show a no results message if everything is hidden */
        const visible = document.querySelectorAll('.accordion-section[style=""],.accordion-section:not([style])');
        const noResults = document.getElementById('no-results');
        const allHidden = Array.from(sections).every(s => s.style.display === 'none');
        noResults.style.display = allHidden ? 'block' : 'none';
    });
}