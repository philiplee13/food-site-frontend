const comboPlatesForOneData = [
  {
    id: 1,
    name: "Option One",
    price: "$8.35",
    items: [
      "B.B.Q. Pork Chow Mein",
      "B.B.Q. Pork Fried Rice",
      "Sweet and Sour Pork",
    ],
  },
  {
    id: 2,
    name: "Option Two",
    price: "$8.95",
    items: [
      "B.B.Q. Pork Chow Mein",
      "B.B.Q. Pork Fried Rice",
      "Garlic Fried Chicken (2)",
    ],
  },
  {
    id: 3,
    name: "Option Three",
    price: "$9.05",
    items: ["B.B.Q. Pork Chow Mein", "Fried Prawns (4)", "Chicken in Foil (3)"],
  },
  {
    id: 4,
    name: "Option 4",
    price: "$9.05",
    items: ["B.B.Q. Pork Chow Mein", "Fried Prawns (4)", "Almond Chicken"],
  },
];

const specialComboPlatesForOneData = [
  {
    id: 1,
    name: "Option One",
    price: "$10.55",
    items: [
      "Broccoli with Chicken",
      "Broccoli with Beef",
      "Mixed Vegetable with Chicken",
      "Almond Chicken",
      "Kung Pao Chicken",
    ],
  },
];

const miniComboData = [
  {
    id: 1,
    name: "Option One",
    price: "$7.89",
    items: [
      "B.B.Q. Pork Chow Mein",
      "B.B.Q. Pork Fried Rice",
      "Sweet and Sour Pork",
      "Almond Chicken",
      "Garlic Fried Chicken (2)",
      "Egg Roll (2)",
      "Chicken in Foil (2)",
      "Egg Foo Yung (2)",
      "Steamed White Rice",
    ],
  },
];

const familyDinnerData = [
  {
    id: 1,
    name: "Cantonese Dinner for 2",
    price: "$22.15",
    items: [
      "Fried Prawns (8)",
      "Sweet and Sour Pork",
      "B.B.Q. Pork Fried Rice",
      "B.B.Q. Pork Chow Mein",
    ],
    extra: [
      {
        id: 1,
        people: 3,
        price: "$34.75",
        item: "Garlic Fried Chicken",
      },
      {
        id: 2,
        people: 4,
        price: "$45.75",
        item: "Broccoli Beef",
      },
      {
        id: 3,
        people: 5,
        price: "$56.50",
        item: "Shrimps with Chop Suey",
      },
    ],
    additional: "$11.15",
  },
  {
    id: 2,
    name: "Royal Cuisine Dinner for 2",
    price: "$23.35",
    items: [
      "Pot Stickers (4)",
      "Fried Wontons (8)",
      "B.B.Q. Pork Fried Rice",
      "B.B.Q. Pork Chow Mein",
      "Mongolian Beef",
    ],
    spicy: true,

    extra: [
      {
        id: 1,
        people: 3,
        price: "$35.95",
        item: "Fried Prawns (10)",
      },
      {
        id: 2,
        people: 4,
        price: "$47.75",
        item: "Garlic Fried Chicken",
      },
      {
        id: 3,
        people: 5,
        price: "59.25",
        item: "Spicy Prawns",
        spicy: true,
      },
    ],
    additional: "$11.85",
  },
];

const appetizerData = [
  {
    id: 1,
    name: "Pan Fried Noodles",
    price: "$5.55",
  },
  {
    id: 2,
    name: "Egg Roll (3) with Sauce",
    price: "$6.95",
  },
  {
    id: 3,
    name: "Fried Prawns (10)",
    price: "$9.95",
  },
  {
    id: 4,
    name: "Pot Stickers (6)",
    price: "$8.20",
  },
  {
    id: 5,
    name: "Fried Wontons (12) with Sauce",
    price: "$5.95",
  },
  {
    id: 6,
    name: "Crab Rangoon (10) with Sauce",
    price: "$8.20",
  },
  {
    id: 7,
    name: "B.B.Q. Pork",
    price: "$9.55",
  },
  {
    id: 8,
    name: "Deep Fried Chicken Strips (10)",
    price: "$8.95",
  },
  {
    id: 9,
    name: "Deep Fried Broccoli",
    price: "$8.55",
  },
  {
    id: 10,
    name: "Deep Fried Mixed Vegetables",
    price: "$8.55",
  },
  {
    id: 11,
    name: "Deep Fried Green Beans",
    price: "$8.55",
  },
  {
    id: 12,
    name: "Deep Fried Zucchini",
    price: "$8.95",
  },
  {
    id: 13,
    name: "Deep Fried Asparagus",
    price: "Seasonal",
  },
];

const soupData = [
  {
    id: 1,
    name: "Egg Flower Soup",
    price: "$7.75",
  },
  {
    id: 2,
    name: "Seaweed Soup",
    price: "$8.15",
  },
  {
    id: 3,
    name: "Wonton Soup",
    price: "$9.15",
  },
  {
    id: 4,
    name: "Hot and Sour Soup",
    price: "$9.25",
    spicy: true,
  },
  {
    id: 5,
    name: "B.B.Q. Pork Noodle Soup",
    price: "$8.25",
  },
  {
    id: 6,
    name: "Chicken Noodle Soup",
    price: "$8.25",
  },
  {
    id: 7,
    name: "Combination Wonton (Wor) Soup",
    price: "$9.65",
  },
];

const chowMeinNoodleData = [
  {
    id: 1,
    name: "Vegetable Chow Mein",
    price: "$8.25",
  },
  {
    id: 2,
    name: "B.B.Q. Pork Chow Mein",
    price: "$8.25",
  },
  {
    id: 3,
    name: "Chicken Chow Mein",
    price: "$8.65",
  },
  {
    id: 4,
    name: "Almond Chicken Chow Mein",
    price: "$9.15",
  },
  {
    id: 5,
    name: "Beef Chow Mein",
    price: "$9.15",
  },
  {
    id: 6,
    name: "Tomato Beef Chow Mein",
    price: "$9.25",
  },
  {
    id: 7,
    name: "Shrimp Chow Mein",
    price: "$9.55",
  },
  {
    id: 8,
    name: "House Chow Mein",
    price: "$9.55",
  },
  {
    id: 9,
    name: "Beef Chow Fun",
    price: "$9.95",
  },
  {
    id: 10,
    name: "Singapore Style Rice Noodles",
    price: "$9.95",
  },
];

const sweetAndSourData = [
  {
    id: 1,
    name: "Sweet and Sour Pork",
    price: "$9.25",
  },
  {
    id: 2,
    name: "Sweet and Sour Chicken",
    price: "$9.55",
  },
  {
    id: 3,
    name: "Sweet and Sour Shrimp",
    price: "$10.55",
  },
];

const friedRiceData = [
  {
    id: 1,
    name: "Vegetarian Fried Rice",
    price: "$8.05",
  },
  {
    id: 2,
    name: "B.B.Q. Pork Fried Rice",
    price: "$8.05",
  },
  {
    id: 3,
    name: "Chicken Fried Rice",
    price: "$8.25",
  },
  {
    id: 4,
    name: "Shrimp Fried Rice",
    price: "$9.15",
  },
  {
    id: 5,
    name: "House Fried Rice",
    price: "$9.15",
  },
  {
    id: 6,
    name: "Beef Fried Rice",
    price: "$9.15",
  },
  {
    id: 7,
    name: "Egg Fried Rice",
    price: "$8.05",
  },
  {
    id: 8,
    name: "Steamed White Rice (S)",
    price: "$4.65",
  },
  {
    id: 9,
    name: "Steamed White Rice (L)",
    price: "$5.20",
  },
];

const beefData = [
  {
    id: 1,
    name: "Green Bean with Beef",
    price: "$9.55",
  },
  {
    id: 2,
    name: "Broccoli with Beef",
    price: "$9.05",
  },
  {
    id: 4,
    name: "Black Mushroom with Beef",
    price: "$10.55",
  },
  {
    id: 5,
    name: "Tomato Beef",
    price: "$9.95",
  },
  {
    id: 6,
    name: "Ginger Beef",
    price: "$10.05",
  },
  {
    id: 7,
    name: "Curry Beef",
    price: "$9.95",
  },
  {
    id: 8,
    name: "Oyster Sauce Beef",
    price: "$10.05",
  },
  {
    id: 9,
    name: "Mongolian Beef",
    price: "$10.05",
    spicy: true,
  },
  {
    id: 11,
    name: "Kung Pao Beef",
    price: "$10.05",
    spicy: true,
  },
  {
    id: 12,
    name: "Szechuan Beef",
    price: "$10.05",
    spicy: true,
  },
  {
    id: 13,
    name: "Sesame Beef",
    price: "$10.65",
  },
  {
    id: 14,
    name: "Sauteed Bean Sprouts with Beef",
    price: "$9.05",
  },
];

const chickenData = [
  {
    id: 1,
    name: "Lemon Chicken",
    price: "$9.55",
  },
  {
    id: 2,
    name: "Orange Chicken",
    price: "$10.25",
  },
  {
    id: 3,
    name: "Green Bean with Chicken",
    price: "$9.55",
  },
  {
    id: 4,
    name: "Cashew Nut Chicken",
    price: "$9.75",
  },
  {
    id: 5,
    name: "Broccoli with Chicken",
    price: "$9.05",
  },
  {
    id: 6,
    name: "Bean Cake (Tofu) with Chicken",
    price: "$9.05",
  },
  {
    id: 7,
    name: "Garlic Fried Chicken (6)",
    price: "$10.55",
  },
  {
    id: 8,
    name: "Spicy Dried Fried Chicken",
    price: "$9.25",
    spicy: true,
  },
  {
    id: 9,
    name: "Almond Chicken",
    price: "$9.05",
  },
  {
    id: 10,
    name: "Kung Pao Chicken",
    price: "$9.25",
    spicy: true,
  },
  {
    id: 11,
    name: "Curry Chicken",
    price: "$9.05",
  },
  {
    id: 12,
    name: "Chicken in Tin Foil (10)",
    price: "$9.55",
  },
  {
    id: 13,
    name: "Hunan Chicken",
    price: "$9.45",
    spicy: true,
  },
  {
    id: 15,
    name: "Szechuan Chicken",
    price: "$9.75",
  },
  {
    id: 16,
    name: "Mongolian Chicken",
    price: "$10.05",
  },
  {
    id: 17,
    name: "Black Mushroom with Chicken",
    price: "$10.65",
  },
  {
    id: 18,
    name: "Tossed Chicken Salad",
    price: "$8.85",
  },
  {
    id: 19,
    name: "Walnut Chicken",
    price: "$10.95",
  },
  {
    id: 20,
    name: "Sauteeed Bean Sprouts with Chicken",
    price: "$9.05",
  },
  {
    id: 21,
    name: "Salt and Pepper Chicken Wings (10)",
    price: "$11.95",
  },
  {
    id: 22,
    name: "Fried Chicken Wings (10)",
    price: "$11.45",
  },
  {
    id: 23,
    name: "Sesame Chicken",
    price: "$10.65",
  },
];

const seafoodData = [
  {
    id: 1,
    name: "Green Bean with Shrimp",
    price: "$10.55",
  },
  {
    id: 2,
    name: "Prawns with Chinese Green",
    price: "$10.25",
  },
  {
    id: 4,
    name: "Spicy Prawns",
    price: "$10.25",
    spicy: true,
  },
  {
    id: 5,
    name: "Garlic Prawns",
    price: "$10.45",
  },
  {
    id: 6,
    name: "Broccoli Prawns",
    price: "$10.25",
  },
  {
    id: 7,
    name: "Curry Prawns",
    price: "$10.55",
  },
  {
    id: 8,
    name: "Szechuan Prawns",
    price: "$10.55",
    spicy: true,
  },
  {
    id: 9,
    name: "Kung Pao Prawns",
    price: "$10.55",
    spicy: true,
  },
  {
    id: 10,
    name: "Cashew Nut Shrimp",
    price: "$10.75",
  },
  {
    id: 11,
    name: "Walnut Prawns",
    price: "$12.75",
  },
];

const veggieData = [
  {
    id: 1,
    name: "Vegetable Deluxe",
    price: "$8.55",
  },
  {
    id: 2,
    name: "Black Mushroom with Chinese Green",
    price: "$9.75",
  },
  {
    id: 4,
    name: "Braised Bean Curd",
    price: "$9.05",
  },
  {
    id: 5,
    name: "Egg Foo Young (3)",
    price: "$8.05",
  },
  {
    id: 6,
    name: "Sauteed Bean Sprouts",
    price: "$8.05",
  },
  {
    id: 7,
    name: "Steamed Mixed Vegtables",
    price: "$8.55",
  },
];

const chopSueyData = [
  {
    id: 1,
    name: "Pork Chop Suey",
    price: "$8.55",
  },
  {
    id: 2,
    name: "Chicken Chop Suey",
    price: "$9.05",
  },
  {
    id: 3,
    name: "Beef Chop Suey",
    price: "$9.25",
  },
  {
    id: 4,
    name: "Shrimp Chop Suey",
    price: "$10.25",
  },
  {
    id: 5,
    name: "House Chop Suey",
    price: "$10.25",
  },
  {
    id: 6,
    name: "Sauteed Bean Sprouts with BBQ Pork",
    price: "$8.55",
  },
];

const weightWatchersData = [
  {
    id: 1,
    name: "Sauteed Chicken with Vegetable",
    price: "$10.15",
  },
  {
    id: 2,
    name: "Sauteed Beef with Vegetable",
    price: "$10.65",
  },
  {
    id: 3,
    name: "Sauteed Shrimp with Vegetable",
    price: "$10.85",
  },
  {
    id: 4,
    name: "Sauteed Mixed Vegetables",
    price: "$9.65",
  },
];

export default comboPlatesForOneData;
export {
  specialComboPlatesForOneData,
  miniComboData,
  familyDinnerData,
  appetizerData,
  soupData,
  chowMeinNoodleData,
  sweetAndSourData,
  friedRiceData,
  beefData,
  chickenData,
  seafoodData,
  veggieData,
  chopSueyData,
  weightWatchersData,
};
