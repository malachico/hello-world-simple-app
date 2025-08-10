document.addEventListener('DOMContentLoaded', () => {
    const alertButton = document.getElementById('alertButton');

    if (alertButton) {
        alertButton.addEventListener('click', () => {
            alert('Hello from JavaScript!');
        });
    }
});
