/* ============================================================
   VoltEdge Solutions - Enquiry Form Validation and EmailJS
   Module: WEDE5020 - Web Development (Introduction)
   Description: Validates all enquiry form fields and sends
   the enquiry silently in the background using EmailJS.
   No redirect or email client is opened.

   NB!!

   view the email on this site https://yopmail.com/en/wm

   just search voltedgesolutions@yopmail.com
   ============================================================ */

/* ── EmailJS Configuration ── */
const EMAILJS_SERVICE_ID  = 'service_odeodrk';
const EMAILJS_TEMPLATE_ID = 'template_jkkpttx';
const EMAILJS_PUBLIC_KEY  = 'pnplEvnAddABTkTm-';


/* ── Wait for the page to fully load before running ── */
document.addEventListener('DOMContentLoaded', function () {

    /* Initialise EmailJS with your public key */
    emailjs.init(EMAILJS_PUBLIC_KEY);

    const form = document.getElementById('enquiry-form');

    form.addEventListener('submit', function (e) {
        /* Stop the default form submission */
        e.preventDefault();

        /* Only send if all fields pass validation */
        if (validateEnquiryForm()) {
            sendEnquiryEmail();
        }
    });
});


/* ============================================================
   VALIDATION
   Checks each required field and shows an error message
   directly below the input if the value is missing or wrong.
   ============================================================ */

function validateEnquiryForm() {

    /* Clear any previous error messages before checking again */
    clearErrors();

    let isValid = true;

    /* --- First Name --- */
    const firstName = document.getElementById('first-name').value.trim();
    if (firstName === '') {
        showError('first-name', 'Please enter your first name.');
        isValid = false;
    }

    /* --- Last Name --- */
    const lastName = document.getElementById('last-name').value.trim();
    if (lastName === '') {
        showError('last-name', 'Please enter your last name.');
        isValid = false;
    }

    /* --- Email --- */
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        showError('email', 'Please enter your email address.');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        showError('email', 'Please enter a valid email address.');
        isValid = false;
    }

    /* --- Phone - optional but validated if filled in --- */
    const phone = document.getElementById('phone').value.trim();
    const phonePattern = /^[0-9+\s\-()]{7,15}$/;
    if (phone !== '' && !phonePattern.test(phone)) {
        showError('phone', 'Please enter a valid phone number.');
        isValid = false;
    }

    /* --- Property Address --- */
    const address = document.getElementById('address').value.trim();
    if (address === '') {
        showError('address', 'Please enter the property address.');
        isValid = false;
    }

    /* --- Service Category --- */
    const serviceType = document.getElementById('service-type').value;
    if (serviceType === '') {
        showError('service-type', 'Please select a service category.');
        isValid = false;
    }

    /* --- Message --- */
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        showError('message', 'Please describe your issue or project.');
        isValid = false;
    } else if (message.length < 20) {
        showError('message', 'Please provide a bit more detail (at least 20 characters).');
        isValid = false;
    }

    return isValid;
}


/* ============================================================
   EMAIL - Sends silently using EmailJS in the background
   Maps form values to the template variables EmailJS expects:
   {{name}}, {{email}}, {{title}}, {{message}}
   ============================================================ */

function sendEnquiryEmail() {

    /* Collect values */
    const firstName    = document.getElementById('first-name').value.trim();
    const lastName     = document.getElementById('last-name').value.trim();
    const email        = document.getElementById('email').value.trim();
    const phone        = document.getElementById('phone').value.trim() || 'Not provided';
    const address      = document.getElementById('address').value.trim();
    const serviceEl    = document.getElementById('service-type');
    const serviceLabel = serviceEl.options[serviceEl.selectedIndex].text;
    const urgencyEl    = document.getElementById('urgency');
    const urgencyLabel = urgencyEl.value ? urgencyEl.options[urgencyEl.selectedIndex].text : 'Not specified';
    const preferredEl  = document.getElementById('preferred-time');
    const preferredLabel = preferredEl.value ? preferredEl.options[preferredEl.selectedIndex].text : 'Not specified';
    const howHeardEl   = document.getElementById('how-heard');
    const howHeardLabel = howHeardEl.value ? howHeardEl.options[howHeardEl.selectedIndex].text : 'Not specified';
    const message      = document.getElementById('message').value.trim();

    /* Build the full message body that maps to {{message}} in the template */
    const fullMessage =
        'CLIENT DETAILS\n' +
        'Name: '             + firstName + ' ' + lastName + '\n' +
        'Phone: '            + phone + '\n' +
        'Property Address: ' + address + '\n\n' +
        'SERVICE DETAILS\n' +
        'Service Required: ' + serviceLabel + '\n' +
        'Urgency: '          + urgencyLabel + '\n' +
        'Preferred Time: '   + preferredLabel + '\n\n' +
        'PROJECT DESCRIPTION\n' +
        message + '\n\n' +
        'HOW THEY HEARD ABOUT US: ' + howHeardLabel;

    /* Parameters mapped to the EmailJS template variables */
    const templateParams = {
        name:    firstName + ' ' + lastName,
        email:   email,
        title:   'Service Enquiry - ' + serviceLabel,
        message: fullMessage
    };

    /* Disable the submit button while sending */
    const submitBtn = document.querySelector('#enquiry-form input[type="submit"]');
    submitBtn.value    = 'Sending...';
    submitBtn.disabled = true;

    /* Send silently using EmailJS */
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(function () {
            showSuccessMessage();
        })
        .catch(function (error) {
            submitBtn.value    = 'Submit Enquiry';
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
    const formSection = document.getElementById('enquiry-form');
    formSection.innerHTML =
        '<div class="form-success">' +
            '<h3>Thank You for Your Enquiry!</h3>' +
            '<p>Your enquiry has been sent successfully.</p>' +
            '<p>One of our specialists will get back to you within one to two business days.</p>' +
            '<p>For urgent matters please call us directly on <strong>+27 21 555 0182</strong>.</p>' +
        '</div>';
}