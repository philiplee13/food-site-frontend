import {
  connect,
  disconnect,
  createSingleItemTable,
  createComboItemTable,
  dropTable,
} from "./db/connect.js";
import {
  insertSingleMenuItem,
  getSingleMenuItem,
  getAllSingleMenuItems,
  deleteSingleMenuItem,
  updateSingleMenuItem,
  getAllComboMenuItems,
  getSingleComboMenuItems,
  insertComboMenuItem,
  updateComboMenuItem,
  deleteComboMenuItem
} from "./db/queries.js";
import express from "express";

const app = express();
const port = 8000;

// app.listen(port, () => {
//   console.log(`server stared on port ${port}`);
// });

const singleItemOne = {
  name: "Pan Fried Noodles",
  category: "Appetizer",
  price: 4.55,
  spicy: false,
};

const singleItemTwo = {
  name: "Egg Roll (3) with Sauce",
  category: "Appetizer",
  price: 5.95,
  spicy: false,
};

const comboItemOne = {
  name: "Option One",
  category: "Combo Plates for One",
  price: 7.35,
  spicy: false,
  items: [
    "B.B.Q. Pork Chow Mein",
    "B.B.Q. Pork Fried Rice",
    "Sweet and Sour Pork",
  ]
};

const updatedComboItemOne = {
    name: "Option One",
    category: "Combo Plates for One",
    price: 20.00,
    spicy: true,
    items: [
      "B.B.Q. Pork Chow Mein",
      "B.B.Q. Pork Fried Rice",
      "Sweet and Sour Pork",
    ]
  };

const comboItemTwo = {
    name: "Cantonese Dinner for 2",
    category: "Family Dinner",
    price: 20.15,
    spicy: false,
    items: [
      "Fried Prawns (8)",
      "Sweet and Sour Pork",
      "B.B.Q. Pork Fried Rice",
      "B.B.Q. Pork Chow Mein",
    ],
    extras: [
      {
        "id": 1,
        "people": 3,
        "price": 31.85,
        "item": "Garlic Fried Chicken",
      },
      {
        "id": 2,
        "people": 4,
        "price": 41.75,
        "item": "Broccoli Beef",
      },
      {
        "id": 3,
        "people": 5,
        "price": 51.50,
        "item": "Shrimps with Chop Suey",
      },
    ],
  };

// const pool = connect();
// await createSingleItemTable(pool);
// await createComboItemTable(pool);
// insertSingleMenuItem(pool, singleItemOne);
// insertSingleMenuItem(pool, singleItemTwo);
// getAllSingleMenuItems(pool);
// let singleItemQuery = await getSingleMenuItem(pool, "Egg Roll (3) with Sauce");
// console.log("result from singleItemQuery is", singleItemQuery)
// await deleteSingleMenuItem(pool, singleItemQuery.id)
// await insertComboMenuItem(pool, comboItemOne);
// await insertComboMenuItem(pool, comboItemTwo);
// const singleItemQuery = await getSingleComboMenuItems(pool, "Option One");
// console.log("result from query is", singleItemQuery);
// await getSingleComboMenuItems(pool, "Cantonese Dinner for 2");
// await updateComboMenuItem(pool, updatedComboItemOne, singleItemQuery.id);
// await deleteComboMenuItem(pool, singleItemQuery.id)
// await getAllComboMenuItems(pool)
// dropTable(pool, "single_item")
// dropTable(pool, "combo_item")
// disconnect(pool);
