import { useRef, useState } from "react";

import Button from "../ui/button";
import classes from "../events/events-search.module.css";

function ProductsSearch(props) {
  // const yearInputRef = useRef();
  // const monthInputRef = useRef();
  const [addedText, setAddedText] = useState("");
  function submitHandler(event) {
    event.preventDefault();

    // const selectedYear = yearInputRef.current.value;
    // const selectedMonth = monthInputRef.current.value;
    // console.log("search submit");

    props.onSearch(addedText);
  }
  // console.log("search page");

  const onChangeHandler = (e) => {
    setAddedText(e.target.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <input
          type="text"
          name="search"
          value={addedText}
          onChange={(e) => onChangeHandler(e)}
        />
        {/* <div className={classes.control}>
          <label htmlFor='year'>Year</label>
          <select id='year' ref={yearInputRef}>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
          </select>
        </div> */}
        {/* <div className={classes.control}>
          <label htmlFor='month'>Month</label>
          <select id='month' ref={monthInputRef}>
            <option value='1'>January</option>
            <option value='2'>February</option>
            <option value='3'>March</option>
            <option value='4'>April</option>
            <option value='5'>May</option>
            <option value='6'>June</option>
            <option value='7'>July</option>
            <option value='8'>August</option>
            <option value='9'>Septemer</option>
            <option value='10'>October</option>
            <option value='11'>November</option>
            <option value='12'>December</option>
          </select>
        </div> */}
      </div>
      <Button>Find Products</Button>
    </form>
  );
}

export default ProductsSearch;
