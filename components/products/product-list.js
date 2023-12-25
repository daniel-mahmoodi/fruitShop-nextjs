import ProductItem from './product-item';
import classes from '../events/event-list.module.css';

function ProductList(props) {
  const { items } = props;

  return (
    <ul className={classes.list} >
      {items.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          // location={product.location}
          // date={product.date}
          image={product.imageUrl}
        />
      ))}
    </ul>
  );
}

export default ProductList;
