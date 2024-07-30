document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dateOfBirth = document.getElementById('dateofbirth').value;
    const userName = document.getElementById('user-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const cPassword = document.getElementById('cpassword').value;

    if (!userName || !firstName ||  !lastName || !dateOfBirth  || !email || !password || !phone || !cPassword) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate saving the task (e.g., send to a server or log in the console)
    console.log('Profile Added:', {
        firstName,
        lastName,
        dateOfBirth,
        userName,
        email,
        password,
        phone,
        cPassword
    });

    alert('Profile successfully added!');

    // Clear the form fields
    document.getElementById('profile-form').reset();
});
