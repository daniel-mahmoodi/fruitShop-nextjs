import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllProducts, getFeaturedProducts } from "../../helpers/api-util";
import ProductList from "../../components/products/product-list";
// import ProductList from "../../components/events/event-list";
import ProductsSearch from "../../components/products/products-search";

function AllProductsPage(props) {
    const router = useRouter();
  const { products } = props;
  console.log("products:", products);
  function findProductsHandler(text) {
    console.log("findProductsHandler:", text);
    const fullPath = `/products/search`;

    router.push(fullPath);
    console.log('rout',router);
  }
  console.log("allproducts");
  return (
    <Fragment>
      <ProductsSearch onSearch={findProductsHandler} />
      <ProductList items={products} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const products = await getAllProducts();

  return {
    props: {
      products: products,
    },
    revalidate: 60,
  };
}

export default AllProductsPage;
