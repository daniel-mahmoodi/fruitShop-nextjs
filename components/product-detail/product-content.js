import classes from '../event-detail/event-content.module.css';

function ProductContent(props) {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default ProductContent;
