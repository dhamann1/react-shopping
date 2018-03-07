const STOREAPI = {
  fetchProductsAndOrder: function () {
    const fetchProducts = fetch('/api/products').then(data => data.json());
    const fetchOrder = fetch('/api/order').then(data => data.json());
    return Promise.all([fetchProducts, fetchOrder]).catch(err => console.log(err));
  }
}

export default STOREAPI; 