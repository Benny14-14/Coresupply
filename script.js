document.getElementById('searchBtn').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchInput').value;
    alert('Suche nach: ' + searchTerm);
});

document.getElementById('loginBtn').addEventListener('click', function() {
    alert('Login angeklickt');
});

const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Produkt wurde in den Warenkorb gelegt!');
    });
});
