document.getElementById('send-button').addEventListener('click', sendMessage);

document.addEventListener('DOMContentLoaded', (event) => {
    loadChatHistory();
});

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (message) {
        appendMessage(message, 'user');
        input.value = '';

        // Simulate bot response
        setTimeout(() => {
            appendMessage('hii', 'bot');
        }, 1000);
    }
}

function appendMessage(message, sender) {
    const chatBody = document.getElementById('chat-body');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    messageElement.textContent = message;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;

    saveMessageToLocalStorage(message, sender);
}

function saveMessageToLocalStorage(message, sender) {
    let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    chatHistory.push({ message, sender });
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}

function loadChatHistory() {
    let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    chatHistory.forEach((chat) => {
        appendMessage(chat.message, chat.sender);
    });
}
