// add.js

document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const userName = document.getElementById('user-name').value;
    const taskName = document.getElementById('task-name').value;
    


    if (!userName || !taskName   ) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate saving the task (e.g., send to a server or log in the console)
    console.log('Task Added:', {
        userName,
        taskName,
        
    });

    alert('Task successfully added!');

    // Clear the form fields
    document.getElementById('task-form').reset();
});
