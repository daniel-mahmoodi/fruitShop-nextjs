// import AddressIcon from '../icons/address-icon';
// import DateIcon from '../icons/date-icon';
// import LogisticsItem from './logistics-item';
import classes from '../event-detail/event-logistics.module.css';
const apiUrl = process.env.REACT_APP_API_ENDPOINT
function ProductLogistics(props) {
  const { date, address, image, imageAlt } = props;

//   const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
//     day: 'numeric',
//     month: 'long',
//     year: 'numeric',
//   });
//   const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`${apiUrl}${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        {/* <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem> */}
      </ul>
    </section>
  );
}

export default ProductLogistics;
