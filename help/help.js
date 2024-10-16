document.addEventListener("DOMContentLoaded", function() {
    const chatBody = document.getElementById("chatBody");
    const userInput = document.getElementById("userInput");
    const sendButton = document.getElementById("sendButton");
    let currentStep = 0; // Track the current step in the conversation

    function appendMessage(text, className) {
        const message = document.createElement("div");
        message.classList.add("message", className);
        message.innerHTML = text.replace(/\n/g, "<br>"); // Use innerHTML to interpret line breaks
        chatBody.appendChild(message);
        chatBody.scrollTop = chatBody.scrollHeight; // Scroll to bottom
    }

    function sendMessage() {
        const text = userInput.value.trim();
        if (text) {
            appendMessage(text, "user-message");
            userInput.value = "";
            handleResponse(text);
        }
    }

    function handleResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        let botMessage = "";

        // Greeting responses
        if (lowerMessage === "hi" || lowerMessage === "hello") {
            botMessage = "Hello! How can I assist you today? 😊 -- any issue: type 'help'";
            appendMessage(botMessage, "bot-message");
            return; // Early return to prevent further checks
        }

        // Help response
        if (lowerMessage === "help") {
            botMessage = "Please select an option:\n" +
                "Option 1: How to use the website\n" +
                "Option 2: What is the use of this website\n" +
                "Option 3: Any issues in the website";
            appendMessage(botMessage, "bot-message");
            currentStep = 1; // Set to waiting for valid input
            return; // Early return to prevent further checks
        }

        // Thank you response
        if (lowerMessage === "thank you" || lowerMessage === "thanks") {
            botMessage = "You're welcome! 🌟 Have a great day ahead!";
            appendMessage(botMessage, "bot-message");
            return; // Early return to prevent further checks
        }

        // Goodbye response
        if (lowerMessage === "bye") {
            const quotes = [
                "“Good bye, The best way to predict the future is to create it.” – Peter Drucker",
                "“Good bye, Success is not the key to happiness. Happiness is the key to success.” – Albert Schweitzer",
                "“Good bye, Life is 10% what happens to us and 90% how we react to it.” – Charles R. Swindoll",
                "“Good bye, Every event is a learning opportunity. Embrace it!”",
                "“Good bye, Participating in virtual events opens doors to endless possibilities!”"
            ];
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            botMessage = randomQuote;
            appendMessage(botMessage, "bot-message");
            return; // Early return to prevent further checks
        }

        // Main conversation flow based on the current step
        if (currentStep === 1) {
            // Check for valid option
            if (lowerMessage === "1") {
                botMessage = "Welcome to our website! Here’s a brief overview of the five main pages you’ll find:\n" +
                    "- Home: An introductory page that welcomes you to the site. You’ll also find links to our social media platforms, including Instagram, Facebook, and Twitter.\n" +
                    "- Types: This page showcases the various types of events that can be conducted or attended. Explore the options available for your interests!\n" +
                    "- Events: Here, you can discover global events taking place around the world. Whether you're an admin, organizer, or participant, you can view and engage with upcoming events.\n" +
                    "- Dashboard: This section provides insights into your activities. You can see how many events you’ve participated in, organized, or hosted, along with graphical representations to visualize your profile statistics.\n" +
                    "- Help: I’m here to assist you! This page will guide you in navigating the website and help address any issues you might be facing.\n" +
                    "Feel free to explore each section to make the most out of your experience!";
                appendMessage(botMessage, "bot-message");
                currentStep = 0; // Reset conversation steps
            } else if (lowerMessage === "2") {
                botMessage = "This website helps you manage and organize events efficiently. You can:\n" +
                    "- Discover various events happening around the globe.\n" +
                    "- Participate, host, or organize events easily.\n" +
                    "- Access detailed insights about your activities and event statistics.\n" +
                    "- Connect with others through a user-friendly dashboard.\n" +
                    "Feel free to explore and utilize all the features available!";
                appendMessage(botMessage, "bot-message");
                currentStep = 0; // Reset conversation steps
            } else if (lowerMessage === "3") {
                botMessage = "Please provide your username.";
                appendMessage(botMessage, "bot-message");
                currentStep = 2; // Move to the next step for username input
            } else {
                botMessage = "Please select a valid option (1, 2, or 3).";
                appendMessage(botMessage, "bot-message");
            }
        } else if (currentStep === 2) {
            // Store the username and ask for the issue
            const username = userMessage;
            appendMessage(`Username: ${username}`, "user-message");
            botMessage = "What issue are you facing?";
            appendMessage(botMessage, "bot-message");
            currentStep = 3; // Move to the next step for issue input
        } else if (currentStep === 3) {
            // Now we capture the issue
            appendMessage(`Issue: ${userMessage}`, "user-message");
            appendMessage("Thank you for your feedback! We will address it soon.", "bot-message");
            currentStep = 0; // Reset conversation steps
        } else {
            // Default response for unrecognized messages
            appendMessage("Hello! How can I assist you today? 😊 -- any issue: type 'help'", "bot-message");
        }
    }

    // Automatic greeting message on page load
    appendMessage("Hello! How can I assist you today? 😊 -- any issue: type 'help'", "bot-message");
    sendButton.addEventListener("click", sendMessage);
    userInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
