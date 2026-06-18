/* ============================================================
   VoltEdge Solutions - Contact Form Validation and EmailJS
   Module: WEDE5020 - Web Development (Introduction)
   Description: Validates the contact form fields and sends
   the message silently in the background using EmailJS.

      NB!!

   view the email on this site https://yopmail.com/en/wm

   just search voltedgesolutions@yopmail.com
   ============================================================ */

/* ── EmailJS Configuration ── */
const EMAILJS_SERVICE_ID  = 'service_odeodrk';
const EMAILJS_TEMPLATE_ID = 'template_jkkpttx';
const EMAILJS_PUBLIC_KEY  = 'pnplEvnAddABTkTm-'; /* Replace with your public key */


/* ── Wait for the page to fully load before running ── */
document.addEventListener('DOMContentLoaded', function () {

    /* Initialise EmailJS with your public key */
    emailjs.init(EMAILJS_PUBLIC_KEY);

    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (e) {
        /* Stop the default form submission */
        e.preventDefault();

        /* Only send if all fields pass validation */
        if (validateContactForm()) {
            sendContactEmail();
        }
    });
});


/* ============================================================
   VALIDATION
   Checks each required field and shows an error message
   directly below the input if the value is missing or wrong.
   ============================================================ */

function validateContactForm() {

    clearErrors();

    let isValid = true;

    /* --- Full Name --- */
    const name = document.getElementById('contact-name').value.trim();
    if (name === '') {
        showError('contact-name', 'Please enter your full name.');
        isValid = false;
    }

    /* --- Email --- */
    const email = document.getElementById('contact-email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        showError('contact-email', 'Please enter your email address.');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        showError('contact-email', 'Please enter a valid email address.');
        isValid = false;
    }

    /* --- Phone - optional but validated if filled in --- */
    const phone = document.getElementById('contact-phone').value.trim();
    const phonePattern = /^[0-9+\s\-()]{7,15}$/;
    if (phone !== '' && !phonePattern.test(phone)) {
        showError('contact-phone', 'Please enter a valid phone number.');
        isValid = false;
    }

    /* --- Subject --- */
    const subject = document.getElementById('contact-subject').value.trim();
    if (subject === '') {
        showError('contact-subject', 'Please enter a subject.');
        isValid = false;
    }

    /* --- Message --- */
    const message = document.getElementById('contact-message').value.trim();
    if (message === '') {
        showError('contact-message', 'Please enter your message.');
        isValid = false;
    } else if (message.length < 10) {
        showError('contact-message', 'Please provide a bit more detail (at least 10 characters).');
        isValid = false;
    }

    return isValid;
}


/* ============================================================
   EMAIL - Sends silently using EmailJS in the background
   ============================================================ */

function sendContactEmail() {

    const name    = document.getElementById('contact-name').value.trim();
    const email   = document.getElementById('contact-email').value.trim();
    const phone   = document.getElementById('contact-phone').value.trim() || 'Not provided';
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    /* Build the message body mapped to {{message}} in the template */
    const fullMessage =
        'CONTACT DETAILS\n' +
        'Name: '    + name  + '\n' +
        'Phone: '   + phone + '\n\n' +
        'MESSAGE\n' +
        message;

    /* Parameters mapped to the EmailJS template variables */
    const templateParams = {
        name:    name,
        email:   email,
        title:   'General Contact - ' + subject,
        message: fullMessage
    };

    /* Disable the submit button while sending */
    const submitBtn = document.querySelector('#contact-form input[type="submit"]');
    submitBtn.value    = 'Sending...';
    submitBtn.disabled = true;

    /* Send silently using EmailJS */
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(function () {
            showSuccessMessage();
        })
        .catch(function (error) {
            submitBtn.value    = 'Send Message';
            submitBtn.disabled = false;
            alert('Something went wrong. Please try again or call us on +27 21 555 0182.\nError: ' + error.text);
        });
}


/* ============================================================
   HELPER FUNCTIONS
   ============================================================ */

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    field.style.borderColor = '#e53e3e';
    const error = document.createElement('span');
    error.className   = 'form-error';
    error.textContent = message;
    field.parentNode.insertBefore(error, field.nextSibling);
}

function clearErrors() {
    document.querySelectorAll('.form-error').forEach(function (el) { el.remove(); });
    document.querySelectorAll('input, select, textarea').forEach(function (el) { el.style.borderColor = ''; });
}

function showSuccessMessage() {
    const formSection = document.getElementById('contact-form');
    formSection.innerHTML =
        '<div class="form-success">' +
            '<h3>Message Sent!</h3>' +
            '<p>Thank you for getting in touch.</p>' +
            '<p>We will get back to you within one business day.</p>' +
            '<p>For urgent matters please call us directly on <strong>+27 21 555 0182</strong>.</p>' +
        '</div>';
}