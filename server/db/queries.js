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
      [
        updateItemParams.name,
        updateItemParams.category,
        updateItemParams.price,
        updateItemParams.spicy,
        itemId,
      ]
    );
    console.log("Updated item successfully");
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

export const getAllComboMenuItems = async (pool) => {
  try {
    const results = await pool.query("SELECT * FROM combo_item");
    console.log(
      "results from getting all combo menu items are",
      results["rows"]
    );
    return results["rows"];
  } catch (error) {
    console.log(
      "Error happened when trying to retrive all records from combo menu",
      error
    );
    return;
  }
};
export const getSingleComboMenuItems = async (pool, itemName) => {
  try {
    const result = await pool.query(
      "SELECT * FROM combo_item WHERE name = $1",
      [itemName]
    );
    console.log("Got single item from combo menu");
    console.log(result["rows"]);
    console.log("extras are", result["rows"][0]["extras"]);
    return result["rows"][0];
  } catch (error) {
    console.log("Error happened when trying to retrieve", itemName, error);
    return;
  }
};
export const insertComboMenuItem = async (pool, itemParams) => {
  try {
    console.log("item params are", itemParams);
    console.log(JSON.stringify(itemParams.extras));
    await pool.query(
      `INSERT into combo_item (name, category, price, spicy, items, extras)
            VALUES ($1, $2, $3, $4, $5, $6)`,
      [
        itemParams.name,
        itemParams.category,
        itemParams.price,
        itemParams.spicy,
        itemParams.items,
        JSON.stringify(itemParams.extras),
      ]
    );
    return true;
  } catch (error) {
    console.log("Error happened when trying to insert item", itemParams, error);
    return false;
  }
};
export const updateComboMenuItemWithoutExtras = async (
  pool,
  updateItemParams,
  itemId
) => {
  try {
    await pool.query(
      `UPDATE combo_item SET name = $1, category = $2, price = $3, spicy = $4, items = $5 WHERE id = $7`,
      [
        updateItemParams.name,
        updateItemParams.category,
        updateItemParams.price,
        updateItemParams.spicy,
        updateItemParams.items,
        itemId,
      ]
    );
    console.log("Updated item successfully");
    return true;
  } catch (error) {
    console.log("Error happened when trying to update item...", error);
    return false;
  }
};

export const updateComboMenuItemWithExtras = async (
  pool,
  updateItemParams,
  itemId
) => {
  try {
    await pool.query(
      `UPDATE combo_item SET name = $1, category = $2, price = $3, spicy = $4, items = $5, extras = $6 WHERE id = $7`,
      [
        updateItemParams.name,
        updateItemParams.category,
        updateItemParams.price,
        updateItemParams.spicy,
        updateItemParams.items,
        JSON.stringify(updateItemParams.extras),
        itemId,
      ]
    );
    console.log("Updated item successfully");
    return true;
  } catch (error) {
    console.log("Error happened when trying to update item...", error);
    return false;
  }
};

export const deleteComboMenuItem = async (pool, itemId) => {
  try {
    await pool.query(`DELETE FROM combo_item WHERE id = $1`, [itemId]);
    console.log("Deleted item from combo_item menu", itemId);
    return true;
  } catch (error) {
    console.log("Error happened when trying to delete record...", error);
    return false;
  }
};
