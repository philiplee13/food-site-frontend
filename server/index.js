import {
  connect,
  disconnect,
  createSingleItemTable,
  createComboItemTable,
  dropTable
} from "./db/connect.js";
import {
  insertSingleMenuItem,
  getSingleMenuItem,
  getAllSingleMenuItems,
  deleteSingleMenuItem,
  updateSingleMenuItem
} from "./db/queries.js";
import express from "express";

const app = express();
const port = 8000;

// app.listen(port, () => {
//   console.log(`server stared on port ${port}`);
// });

const itemParams = {
  name: "Pan Fried Noodles",
  category: "Appetizer",
  price: 4.55,
  spicy: false,
};

const singleItem = {
  name: "Egg Roll (3) with Sauce",
  category: "Appetizer",
  price: 5.95,
  spicy: false,
};

// const pool = connect();
// createSingleItemTable(pool);
// createComboItemTable(pool);
// insertSingleMenuItem(pool, singleItem);
// getAllSingleMenuItems(pool);
// let singleItemQuery = await getSingleMenuItem(pool, "Egg Roll (3) with Sauce");
// console.log("result from singleItemQuery is", singleItemQuery)
// await deleteSingleMenuItem(pool, singleItemQuery.id)
// dropTable(pool, "single_item")
// dropTable(pool, "combo_item")
// disconnect(pool);
