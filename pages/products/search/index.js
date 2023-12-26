import { Fragment, useEffect, useState } from "react";
// import { useRouter } from "next/router";
import useSWR from "swr";
import { getFilteredProducts } from "../../../helpers/api-util";
import ProductList from "../../../components/products/product-list";
// import ResultsTitle from "../../components/events/results-title";
import Button from "../../../components/ui/button";
import ErrorAlert from "../../../components/ui/error-alert";
import { axios } from "axios";

const apiUrl = process.env.REACT_APP_API_ENDPOINT;
function FilteredProductsPage(props) {
  // const { events, hasError } = props;
  // console.log("events", events);

  // console.log("FilteredProductsPage:", props,data,hasError);
  const [loadedProducts, setLoadedProducts] = useState();
  // const router = useRouter();

  // const filterData = router.query.slug;

  const { events, hasError } = useSWR(
    `${apiUrl}/api/Product/GetByName?SearchText=سیب&PageNumber=1&RowCount=10`,
    (url) => fetch(url).then((res) => res.json())
  );
  console.log("data,error", events, hasError);
  // useEffect(() => {
  //   console.log("useEffect");
  //   fetch(
  //     "https://core.api.alpha.mivekani.com/api/Product/GetByName?SearchText=س&PageNumber=1&RowCount=10"
  //   )
  //     .then((response) => {
  //       console.log("response", response);
      
  //     })
  //     .catch((error) => {
     
  //       console.error("Error sending data:", error);
  //     });
  // }, []);
  useEffect(() => {
    if (events) {
      // const events = [];

      // for (const key in events.data) {
      //   events.push({
      //     id: key,
      //     ...events.data[key],
      //   });
      // }

      setLoadedProducts(events.data);
    }
  }, [events]);

  if (!loadedProducts && !hasError) {
    return <p className="center">Loading...</p>;
  }

  // const filteredYear = filterData[0];
  // const filteredMonth = filterData[1];

  // const numYear = +filteredYear;
  // const numMonth = +filteredMonth;

  if (
    hasError
    // isNaN(numYear) ||
    // isNaN(numMonth) ||
    // numYear > 2030 ||
    // numYear < 2021 ||
    // numMonth < 1 ||
    // numMonth > 12 ||
    // error
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Products</Button>
        </div>
      </Fragment>
    );
  }

  // const filteredProducts = loadedProducts.filter((event) => {
  //   const eventDate = new Date(event.date);
  //   return (
  //     eventDate.getFullYear() === numYear &&
  //     eventDate.getMonth() === numMonth - 1
  //   );
  // });

  if (!loadedProducts || loadedProducts.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Products</Button>
        </div>
      </Fragment>
    );
  }

  // const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      {/* <ResultsTitle date={date} /> */}
      <ProductList items={loadedProducts} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  // const { params } = context;
  // const filterData = params.slug;
  const filterData = "";

  //   const filteredYear = filterData[0];
  //   const filteredMonth = filterData[1];

  //   const numYear = +filteredYear;
  //   const numMonth = +filteredMonth;

  if (
    !filterData
    //     isNaN(numYear) ||
    //     isNaN(numMonth) ||
    //     numYear > 2030 ||
    //     numYear < 2021 ||
    //     numMonth < 1 ||
    //     numMonth > 12
  ) {
    return {
      props: { hasError: true },
      // notFound: true,
      // redirect: {
      //   destination: '/error'
      // }
    };
  }

  const filteredProducts = await getFilteredProducts(filterData);

  return {
    props: {
      events: filteredProducts,
      //  date: {
      //    year: numYear,
      //    month: numMonth,
      //  },
    },
  };
}

export default FilteredProductsPage;
