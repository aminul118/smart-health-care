/*
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

        try {
            emailjs.sendForm('service_p5kh1pz', 'template_xuuycsf', this) 
                .then(function(response) {
                    console.log('res', response);
                    console.log('SUCCESS!', response.status, response.text);
                    document.getElementById('statusSuccess').innerText = 'Thank you for contacting with us';
                }, function(error) {
                    console.log('FAILED...', error);
                    document.getElementById('statusFail').innerText = 'Failed to send email.';
                });
        } catch (error) {
            console.error('Error sending email:', error);
            document.getElementById('statusFail').innerText = 'An error occurred.';
        }

});

*/

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Form validation: Check if any required field is empty
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementsByName('last_name')[0].value.trim(); // Using getElementsByName for last_name
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!firstName || !lastName || !phone || !email || !message) {
        document.getElementById('statusFail').innerText = 'Please fill in all the fields.';
        document.getElementById('statusSuccess').innerText = ''; // Clear any previous success message
        return; // Stop execution if validation fails
    }

    // Initialize EmailJS (Make sure to use your own public key)
    emailjs.init('BZByS6Z5lLL0E1OfW');

    // Attempt to send the email using EmailJS
    try {
        emailjs.sendForm('service_p5kh1pz', 'template_xuuycsf', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById('statusSuccess').innerText = 'Thank you for contacting us!';
                document.getElementById('statusFail').innerText = ''; // Clear any previous failure message

                // Clear all form fields
                document.getElementById('contact-form').reset();
            }, function(error) {
                console.log('FAILED...', error);
                document.getElementById('statusFail').innerText = 'Failed to send email. Please try again.';
                document.getElementById('statusSuccess').innerText = ''; // Clear any previous success message
            });
    } catch (error) {
        console.error('Error sending email:', error);
        document.getElementById('statusFail').innerText = 'An unexpected error occurred.';
        document.getElementById('statusSuccess').innerText = ''; // Clear any previous success message
    }
});
