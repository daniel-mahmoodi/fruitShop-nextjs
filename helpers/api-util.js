const apiUrl = process.env.REACT_APP_API_ENDPOINT;
import axios from "axios";
export async function getAllProducts() {
  const response = await fetch(
    `${apiUrl}/api/Product/GetProducts?PageNumber=1&RowCount=12`
  );
  const data = await response.json();

  // const products = [];

  // for (const key in data) {
  //   products.push({
  //     id: key,
  //     ...data[key]
  //   });
  // }

  const products = data.data;
  return products;
}

export async function getFeaturedProducts() {
  const allProducts = await getAllProducts();
  // return allProducts.filter((product) => product.isEnabled);
  return allProducts;
}

export async function getProductById(id) {
  const response = await fetch(
    `${apiUrl}/api/Product/GetProduct?Id=${id}`
  );
  const data = await response.json();
  return data
  // return  axios.get(`${apiUrl}/api/Product/GetProduct?Id=${id}`)
 
  // axios({
  //   method: "get",
  //   url: `${apiUrl}/api/Product/GetProduct?Id=${id}`,
  //   responseType: "stream",
  // })
  //   .then(function (response) {
  //     return response.data;
  //   })
  //   .catch(function (error) {
  //     // dispatch(
  //     //   uiActions.showNotification({
  //     //     status: "error",
  //     //     title: "خطا",
  //     //     message: "مشکل در دریافت اطلاعات، لطفا دوباره اقدام کنید",
  //     //   })
  //     // );
  //     return null;
  //   });
  // return null;
  // return;
  // const allProducts = await getAllProducts();
  // return allProducts.find((product) => product.id === id);
}

export async function getFilteredProducts(dateFilter) {
  const { year, month } = dateFilter;

  const allProducts = await getAllProducts();

  let filteredProducts = allProducts.filter((product) => {
    const productDate = new Date(product.date);
    return (
      productDate.getFullYear() === year && productDate.getMonth() === month - 1
    );
  });

  return filteredProducts;
}
