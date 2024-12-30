import React from "react";
import FamilyDinnerExtra from "./FamilyDinnerExtra";
import chiliPepper from "../images/chiliPepper.jpeg";

/*
Componenet for Family Dinners
*/
function FamilyDinner(props) {
  return (
    <div className="details">
      <h4>
        {props.name} - {props.price}
      </h4>
      <ul>
        {props.items}{" "}
        {props.spicy ? (
          <img
            src={chiliPepper}
            alt="red-chili"
            className="chiliPepper mongolianBeef"
          />
        ) : null}
      </ul>
    </div>
  );
}

/*
Create Family Dinner Component
*/
function createFamilyDinner(data) {
  return (
    <div>
      <FamilyDinner
        key={data.id}
        name={data.name}
        price={data.price}
        items={data.items.map((element) => {
          return <ul>{element}</ul>;
        })}
        spicy={data.spicy}
      />
      <h4>Extras</h4>
      <FamilyDinnerExtra
        key={data.extra.map((data) => {
          return <ul>{data.id}</ul>;
        })}
        item={data.extra.map((data) => {
          return (
            <div>
              <ul>People - {data.people}</ul>
              <ul>Price - {data.price}</ul>
              <ul>
                Add - {data.item}{" "}
                {data.spicy ? (
                  <img
                    src={chiliPepper}
                    alt="red-chili"
                    className="chiliPepper"
                  />
                ) : null}
              </ul>
            </div>
          );
        })}
        spicy={data.spicy}
      />
      <div>Each additional Person ${data.additional}</div>
    </div>
  );
}

export default createFamilyDinner;
