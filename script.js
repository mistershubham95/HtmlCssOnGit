document.getElementById('loginBtn').addEventListener('click', openLoginModal);

function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Simulate login logic here (check credentials, etc.)
    alert('Simulated Login Successful!');
    closeModal();
});
