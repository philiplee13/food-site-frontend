import React from "react";

/*
Formatting of all the extra items will be handled in the Family Dinner Component
We'll list out the price, item, and people in a single div
*/
function FamilyDinnerExtra(props) {
  return (
    <div className="details">
      <ul>{props.item}</ul>
    </div>
  );
}

export default FamilyDinnerExtra;
