/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here 
fetch('http://localhost:5000/products', {
    method: "POST",
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
//   .then(response => response.body.json())
  .then(data => console.log("Product added:", data.json()))
  .catch(error => console.error("Error:", error));





/* ============================== Phase 2 ============================== */

// Your code here 
fetch('http://localhost:5000/products', {
    method: 'POST',
    body: new URLSearchParams({
      name: 'Caribbean Delight Coffee',
      description: 'Made by Manatee Coffee',
      price: 11.99,
      categories: 'grocery'
    }).toString(),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(response => {
    console.log('Status:', response.status);
    console.log('Content-Type:', response.headers.get('Content-Type'));
    console.log('URL:', response.url);
    console.log('Redirected:', response.redirected);
    return response.json();
  })
  .then(data => console.log('Product added:', data))
  .catch(error => console.error('Error:', error));



/* ============================== Phase 3 ============================== */

// Your code here 
const params = new URLSearchParams({
    name: 'Caribbean Delight Coffee',
    description: 'Made by Manatee Coffee',
    price: 11.99,
    categories: 'grocery'
  });
  
  fetch('http://localhost:5000/products', {
    method: 'POST',
    body: params.toString(),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(response => response.json())
  .then(data => console.log('Product added:', data))
  .catch(error => console.error('Error:', error));
  
  // Example for a GET request to list products
fetch('http://localhost:5000/products')
.then(response => response.json())
.then(data => console.log('Products:', data))
.catch(error => console.error('Error:', error));

// Example for a DELETE request to remove a product by ID
fetch('http://localhost:5000/products/1', {
method: 'DELETE'
})
.then(response => response.json())
.then(data => console.log('Product deleted:', data))
.catch(error => console.error('Error:', error));