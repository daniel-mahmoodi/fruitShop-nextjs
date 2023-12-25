import Button from '../ui/button';
// import DateIcon from '../icons/date-icon';
// import AddressIcon from '../icons/address-icon';
// import ArrowRightIcon from '../icons/arrow-right-icon';
import classes from '../events/event-item.module.css';

function ProductItem(props) {
  const { title, image, id } = props;
console.log('id',id);
//   const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
//     day: 'numeric',
//     month: 'long',
//     year: 'numeric',
//   });
//   const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/products/${id}`;

  return (
    <li className={classes.item}>
      <img src={`https://core.api.alpha.mivekani.com/${image}`} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          {/* <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div> */}
          {/* <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div> */}
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Product</span>
            {/* <span className={classes.icon}>
              <ArrowRightIcon />
            </span> */}
          </Button>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
