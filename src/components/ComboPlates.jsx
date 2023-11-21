import React from "react";

/*
Component to display data
*/
function ComboPlates(props) {
  return (
    <div className="details">
          <h4>
            {props.name} - {props.price}
          </h4>
          <ul>{props.items}</ul>
    </div>
  );
}

/*
Component to create the secion
*/
function createComboPlates(data) {
    return (
        <ComboPlates
        key={data.id}
        name={data.name}
        price={data.price}
        items={data.items.map(element => {
          return <ul>{element}</ul>
        })}
        />
    );
}

export default createComboPlates;