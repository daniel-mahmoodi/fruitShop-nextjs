import classes from '../event-detail/event-summary.module.css';

function ProductSummary(props) {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default ProductSummary;