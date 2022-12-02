/**
 * This file will handle the queries for dynamodb
 * GET
 * PUT
 * POST
 * DELETE
 */

export const getAllSingleMenuItems = async (pool) => {
  try {
    const results = await pool.query(`SELECT * FROM single_item`);
    console.log(
      "results from getting all single menu items are",
      results["rows"]
    );
    return results["rows"];
  } catch (error) {
    console.log("Error happened when trying to query all single items", error);
    return;
  }
};

export const getSingleMenuItem = async (pool, itemName) => {
  try {
    const result = await pool.query(
      `SELECT * FROM single_item WHERE name = $1`,
      [itemName]
    );
    console.log("Selected record for", itemName);
    return result["rows"][0];
  } catch (error) {
    console.log("Error happened when trying to query for", itemName, error);
    return;
  }
};

export const insertSingleMenuItem = async (pool, itemParams) => {
  try {
    await pool.query(
      `
        INSERT INTO single_item (name, category, price, spicy)
        VALUES ($1, $2, $3, $4)`,
      [itemParams.name, itemParams.category, itemParams.price, itemParams.spicy]
    );
    console.log(`Inserting record for ${itemParams}`);
    return true;
  } catch (error) {
    console.log("Error happened when trying to insert", error);
    return false;
  }
};

export const updateSingleMenuItem = async (pool, updateItemParams, itemId) => {
    try {
        await pool.query(
            `UPDATE single_item SET (name = $1, category = $2, price = $3, spicy = $4) WHERE id = $5`,
            [updateItemParams.name, updateItemParams.category, updateItemParams.price, updateItemParams.spicy, itemId]
        );
        console.log("Updated item successfully")
        return true;
    } catch (error) {
        console.log("Error happened when trying to update item...", error);
        return false;
    }
};

export const deleteSingleMenuItem = async (pool, itemId) => {
  try {
    await pool.query(`DELETE FROM single_item WHERE id = $1`, [itemId]);
    return true;
  } catch (error) {
    console.log("Error happened when trying to delete record...", error);
    return false;
  }
};

const getAllComboMenuItems = (pool) => {};
