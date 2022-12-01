import {
  connect,
  disconnect,
  createSingleItemTable,
  createComboItemTable,
} from "./db/connect.js";
import express from "express";

const app = express();
const port = 8000;

// app.listen(port, () => {
//   console.log(`server stared on port ${port}`);
// });

// get credentials and create table
const pool = connect();
createSingleItemTable(pool);
createComboItemTable(pool);
disconnect(pool);
