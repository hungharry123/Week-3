export default {
  getCategories() {
    return fetch("http://api.demo.nordiccoder.com/api/categories");
  },
  getProducts() {
    return fetch("http://api.demo.nordiccoder.com/api/products");
  }
}