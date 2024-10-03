


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Send email using EmailJS
    // emailjs.sendForm('service_f1e1fxp', 'template_i98uw2x', this)
    //     .then(function(response) {
    //         console.log('SUCCESS!', response.status, response.text);
    //         document.getElementById('status').innerText = 'Email sent successfully!';
    //     }, function(error) {
    //         console.log('FAILED...', error);
    //         document.getElementById('status').innerText = 'Failed to send email. Please try again later.';
    //     });



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

