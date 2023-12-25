import { Fragment } from "react";

import { getProductById, getFeaturedProducts } from "../../helpers/api-util";
import ProductSummary from "../../components/product-detail/product-summary";
import ProductLogistics from "../../components/product-detail/product-logistics";
import ProductContent from "../../components/product-detail/product-content";
import ErrorAlert from "../../components/ui/error-alert";

function ProductDetailPage(props) {
  const product = props.selectedProduct;
 
  if (!product) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      {product.id}
      <div>product</div>
      <ProductSummary title={product.title} />
       <ProductLogistics
        date={product.date}
        address={product.location}
        image={product.image}
        imageAlt={product.title}
      />
      <ProductContent>
        <p>{product.description}</p>
      </ProductContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const productId = context.params.productId;

  const product = await getProductById(productId);

  return {
    props: {
      selectedProduct: product,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const products = await getFeaturedProducts();

  const paths = products.map((product) => ({
    params: { productId: product.id.toString() },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default ProductDetailPage;
