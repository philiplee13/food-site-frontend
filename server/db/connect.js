/**
 * This file handles the db connection
 */

import {
  DynamoDBClient,
  CreateTableCommand,
  ListTablesCommand,
} from "@aws-sdk/client-dynamodb";

import aws from "aws-sdk";

const dynamoDBClient = new DynamoDBClient({
  region: aws.config.credentials.region,
});
const tableParams = {
  AttributeDefinitions: [
    {
      AttributeName: "Id",
      AttributeType: "N",
    },
  ],
  KeySchema: [
    {
      AttributeName: "Id",
      KeyType: "HASH",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  TableName: "dragonlitedeli-table",
  StreamSpecification: {
    StreamEnabled: false,
  },
};

export const createTable = async () => {
  if (!getTable()) {
    try {
      const data = await dynamoDBClient.send(
        new CreateTableCommand(tableParams)
      );
      console.log("Table was created");
      return data;
    } catch (err) {
      console.log("Error happened when creating table", err);
      return;
    }
  }
};

export const getCredentials = () => {
  aws.config.getCredentials((err) => {
    if (err) {
      console.log("error happened while getting credentials", err.stack);
    } else {
      console.log("Credentials have been set");
      return;
    }
  });
};

const getTable = async () => {
  const tables = new ListTablesCommand("dragonlitedeli-table");
  const response = await dynamoDBClient.send(tables);
  if (response.TableNames.length !== 0) {
    console.log("tables were already created", response);
    return false;
  } else {
    console.log("no tables were present");
    return true;
  }
};
