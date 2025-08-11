const showGreeting = (name) => {
    alert(`Welcome, ${name}!`);
};

const handleFormSubmit = (event) => {
    event.preventDefault();

    alert('More Info');
};

const form = document.getElementById("btn-contact");
form.addEventListener("click", handleFormSubmit);