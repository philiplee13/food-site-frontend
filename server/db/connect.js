/**
 * This file handles the db connection and creates initial tables
 */

import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pg;
const connectionString = process.env.DATABASE_URL;

export const connect = () => {
  try {
    const pool = new Pool({
      connectionString,
    });
    console.log("Successfully connected");
    return pool;
  } catch (error) {
    console.log("Error when trying to connect", error);
  }
};

export const disconnect = async (pool) => {
  await pool.end();
  console.log("Ending db connection");
};


export const createSingleItemTable =  async (pool) => {
  try {
    await pool.query(
      `CREATE TABLE IF NOT EXISTS single_item
      (
        id serial primary key, 
        name varchar(250),
        category varchar(250),
        price numeric (5,2), 
        spicy boolean
        )`
    );
    console.log("Created table successfully");
    return;
  } catch (error) {
    console.log(
      "Error happened when trying to create single item table",
      error
    );
    return;
  }
};

export const createComboItemTable = async (pool) => {
  try {
    await pool.query(
      `CREATE TABLE IF NOT EXISTS combo_item
      (
        id serial primary key, 
        name varchar(250), 
        category varchar(250),
        price numeric (5,2), 
        spicy boolean, 
        items text[], 
        extras jsonb
        )`
    );
    console.log("Created Combo Item Table Successfully");
    return;
  } catch (error) {
    console.log("Error happened when trying to create combo item table", error);
    return;
  }
};

export const dropTable = async (pool, tableName) => {
  try {
    await pool.query(`DROP TABLE IF EXISTS ${tableName}`);
    console.log("Dropped table successfully");
    return;
  } catch (error) {
    console.log("Error happened when dropping table", tableName, error);
    return;
  }
}
