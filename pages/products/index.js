import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllProducts, getFeaturedProducts } from "../../helpers/api-util";
import ProductList from "../../components/products/product-list";
// import EventList from "../../components/events/event-list";
// import EventsSearch from '../../components/events/events-search';

function AllProductsPage(props) {
  //   const router = useRouter();
  const { products } = props;
console.log('products:',products);
  //   function findEventsHandler(year, month) {
  //     const fullPath = `/events/${year}/${month}`;

  //     router.push(fullPath);
  //   }

  
  return (
    <Fragment>
      {/* <EventsSearch onSearch={findEventsHandler} /> */}
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
