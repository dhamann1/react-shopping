const STOREAPI = {
  fetchProductsAndOrder: function () {
    const fetchProducts = fetch('/api/products').then(data => data.json());
    const fetchOrder = fetch('/api/order').then(data => data.json());
    return Promise.all([fetchProducts, fetchOrder]).catch(err => console.log(err));
  },

  addProduct: function (productId, orderId) {
    let URI = '/api/addproduct';
    return fetch(URI, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        productId,
        orderId
      })
    }).then(data => {
      return data.json(); 
    });
  },

  removeProduct: function (productId, orderId) {
    let URI = '/api/removeproduct';
    return fetch(URI, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        productId,
        orderId
      })
    }).then(data => {
      return data.json();
    });
  }
}

export default STOREAPI;
