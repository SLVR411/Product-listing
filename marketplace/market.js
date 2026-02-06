document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('#search');
    const productList = document.querySelectorAll('.product');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();

        productList.forEach(product => {
            const productName = product.querySelector('h2').textContent.toLowerCase();
            const productDescription = product.querySelector('p').textContent.toLowerCase();

            if (productName.includes(query) ) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
                
            }
        });
    });


//2. JS Cookie to identify returning users (Privacy requirement)
function acceptCookies() {
    document.cookie = "user_consent=accepted; max-age=" + 60*60*24*30;
    document.getElementById('privacy-banner').style.display = 'none';
}

// 3. Form Validation & Ethical Data Handling
document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    
    if (email.includes("@")) {
        alert("Registration successful! Your data is handled per the Data Protection Act (2019).");
    } else {
        alert("Please enter a valid email.");
    }
});
});