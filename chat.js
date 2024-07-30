document.addEventListener('DOMContentLoaded', () => {
    const peopleList = document.getElementById('people-list');
    const chatBox = document.getElementById('chat-box');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    // Example people data
    const people = ['Alice', 'Bob', 'Charlie', 'Dave','rudra'];

    // Add people to the list
    people.forEach(person => {
        const li = document.createElement('li');
        li.textContent = person;
        li.addEventListener('click', () => {
            alert(`Chat with ${person}`);
        });
        peopleList.appendChild(li);
    });

    // Send message function
    const sendMessage = () => {
        const message = messageInput.value.trim();
        if (message) {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            chatBox.appendChild(messageElement);
            messageInput.value = '';
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    };

    // Send message on button click
    sendButton.addEventListener('click', sendMessage);

    // Send message on Enter key press
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});

