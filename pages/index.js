import { getFeaturedProducts } from '../helpers/api-util';
import ProductList from '../components/products/product-list';

function HomePage(props) {
  return (
    <div>
      <ProductList items={props.products} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredProducts = await getFeaturedProducts();

  return {
    props: {
      products: featuredProducts
    },
    revalidate: 1800
  }
}

export default HomePage;
