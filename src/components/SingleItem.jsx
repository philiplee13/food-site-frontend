import React from "react";
import chiliPepper from "../images/chiliPepper.jpeg";

/*
Component to display the data
*/
function SingleItem(props) {
  return (
    <div className="details">
      <ul>
        {props.name} - {props.price}
        {props.spicy ? (
          <img
            src={chiliPepper}
            alt="red-chili"
            className="chiliPepper"
          />
        ) : null}
      </ul>
    </div>
  );
}

/*
Function to create the component
*/
function createSingleItems(data) {
  return (
    <SingleItem
      key={data.id}
      name={data.name}
      price={data.price}
      spicy={data.spicy}
    />
  );
}

export default createSingleItems;
