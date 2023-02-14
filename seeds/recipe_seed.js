const Recipe = require("../models/Recipe.js");

const recipeData = [
  {
    dish_name: "Bacon and Cheese Egg Bites",
    ingredients:
      "6 slices thick-cut bacon, diced, 9 large eggs, 3 ounces cream cheese, 3/4 teaspoon kosher salt, 5 ounces Mozzarella cheese grated, Ground black pepper, to taste",
    prep_instructions:
      "Dice bacon, Grate Cheese, Preheat oven to 375 degrees Fahrenheit, Grease muffin tin",
    prep_time: 5,
    cook_time: 30,
    cook_instructions:
      "Cook diced bacon, Blend eggs, cream cheese and salt, Add cheese and bacon into tin, Pour egg mixture into 3/4ths of tin, Mix eggs, cheese and bacon together inside of tin, Sprinkle black pepper, Bake 16-20 min",
    calories: 311,
    carbs: 2,
    total_fat: 24,
    protein: 21,
    sodium: 6,
    sugar: 1,
  },
  {
    dish_name: "Sheet Pan Pancakes",
    ingredients:
      "8 Tablespoons of unsalted butter, 2 1/2 Cup of all purpose flour, 1 Tablespoon of baking powder, 1 Teaspoon of baking soda, 1/2 Teaspoon of salt, 1/2 Cup brown sugar, 2 Cups buttermilk, 2 Large eggs, 1 Teaspoon of vanilla extract, 1 Cup blueberries, 1 Cup raspberries",
    prep_instructions:
      "Melt stick of butter then allow it to cool, Preheat oven to 425 degrees Fahrenheit, Grease a 15x10.5 inch baking sheet with 2 tablespons of melted butter",
    prep_time: 10,
    cook_time: 20,
    cook_instructions:
      "Sift dry ingredients (flour, baking powder, baking soda and salt), Whick wet ingredients (buttermilk, eggs, anilla and sugar), Fold wet and dry ingredients together adding 4 tablespoons of melted butter into mixture, Fold in half of fruit, Pour batter into sheet, Sprinkle rest of fruit on top, Bake for 15 - 20 min, Brish rest of butter on top of pancake",
    calories: 234,
    carbs: 33,
    total_fat: 9,
    protein: 5,
    sodium: 5,
    sugar: 1,
  },
  {
    dish_name: "New England Clam Chowder",
    ingredients: "4 ounces (3 to 4 slices) thick-cut bacon, cut into 1/4-inch pieces, 1 large yellow onion, diced, 2 stalks celery, diced, 1 cup water, 1/2 teaspoon salt, plus more to taste, 2 russet potatoes (about 1 pound) peeled and cut into 1/2-inch cubes, 1 pound (about 2 cups) frozen chopped clam meat, defrosted overnight in the refrigerator, 1 cup heavy cream, Freshly ground black pepper, to taste, Oyster crackers, for serving",
    prep_instructions: "Dice bacon, onion and celery, Peel and dice russet potatoes",
    prep_time: "10",
    cook_time: "35",
    cook_instructions: "Cook bacon till it releases fat, Add vegetables and cook till softened, Add liquids and potatoes then simmer for 15 min, Add clams and cream and simmer for 2 to 3 minutes, Serve with oyster crackers",
    calories: "331",
    carbs: "21",
    total_fat: "17",
    protein: "24",
    sodium: "",
    sugar: "",
  },
  {
    dish_name: "Microwaved Sweet Potatoes",
    ingredients: "1 Medium Sweet Potato, 1/2 Teaspoon of oil, 1/4 Teaspoon kosher",
    prep_instructions: "Prick potato 4 to 5 times all over",
    prep_time: "5",
    cook_time: "5",
    cook_instructions: "Moisten paper towel and wring out, Tightly wrap the potato on a microwave safe plate, Microwave potato for 5 minutes, If not tender after 5 minutes add more to microwave",
    calories: "255",
    carbs: "59",
    total_fat: "0",
    protein: "6",
    sodium: "",
    sugar: "",
  },
  {
    dish_name: "Lemon Pepper Chicken Breasts",
    ingredients: "2 Large chicken breasts, 1 1/2 Tablespoons of Lemon Pepper Seasoning, 1/2 teaspoon of Salt, 3/4 Cup All-Purpose Flour, 1 1/2 Tablespoons Vegetable Oil, 4 Tablespoons Unsalted Butter, 2 Cloves of Garlic, 1/2 Cup Chicken Stock, 1/3 Cup Lemon Juice, 1/4 Cup Italian Parsley",
    prep_instructions: "Cut chicken into cutlets",
    prep_time: "12",
    cook_time: "15",
    cook_instructions: "Combine seasonings, Add flour to seperate shallow dish, Season both sides of chicken then dredge in the flour, Add half of butter and oil to pan and pan-fry the chicken 3 minutes on each side, Discard darkened fat from skillet then return skillet and add rest of butter, Oce butter has melted then add garlic and saute for 30-45 seconds, Add chicken stock and lemon to skillet and allow to boil while fixing till thicked for about 1 minute, Coat chicken in sauce and serve with parsley",
    calories: "440",
    carbs: "12",
    total_fat: "18",
    protein: "55",
    sodium: "",
    sugar: "",
  },
  {
    dish_name: "Shrimp and Mushroom Stir-Fry",
    ingredients: "12 Ounces of Preferred Mushrooms, 1 Pound Large Shrimp, 2 Tablespoons of Olive Oil, 3 Scallions, 1 1/2 Cups Chicken Stock, 3 CLoves of Garlic, 1/4 Cup Soy Sauce, 2 Tablespoons of Cornstarch, Cooked White Rice",
    prep_instructions: "Make stir fry sauce by whisking together chicken stock, garlic, soy sauce and cornstarch in a bowl and set aside, chop mushrooms and scallions",
    prep_time: "10",
    cook_time: "25",
    cook_instructions: "Add olive oil to skillet and cook mushrooms for 8 minutes, Add shrimp and cook for 2-3 minutes until no longer translucent, Add stir-fry sauce and cook until thickend, Stir in chopped scallions",
    calories: "232",
    carbs: "16",
    total_fat: "9",
    protein: "23",
    sodium: "",
    sugar: "",
  },
  {
    dish_name: "Spaghetti Aglio e Olio (Pasta with Garlic and Oil)",
    ingredients: "1 Teaspoon of Salt, 1 Pound of Spaghetti, 1/3 Cup Extra-Virgin Olive Oil, 4 Large Cloves of Garlic, 1/2 Teaspoon Crushed Red Pepper, 1/2 Cup Parmesan Cheese",
    prep_instructions: "Peel and very thinly slice garlic, Finely grate parmesan cheese",
    prep_time: "6",
    cook_time: "15",
    cook_instructions: "Fill large pot with water and salt and cook pasta till desired doneness and drain, Scoop one cup of pasta water out after you are done cooking it, Return pot tp oven and set to medium heat, Add olive oil and allow to heat up then add garlic and red pepper flakes, Stir and allow garlic to slightly brown for 2 minutes, Add cup of reserved pasta water to oil and toss in pasta, Allow sauce to thivken then add parmesan and remove from heat",
    calories: "308",
    carbs: "30",
    total_fat: "18",
    protein: "8",
    sodium: "",
    sugar: "",
  },
  {
    dish_name: "Air Fryer Salmon",
    ingredients: "Nonstick spray, 4 Skin on Salmon Fillets, 1 Tablespoon Olive Oil, 1 Teaspoon Lemon Pepper Seasoning, 1/2 Teaspoon Salt, 1/4 Teaspoon Black Pepper",
    prep_instructions: "Lightly spray air fryer basket",
    prep_time: "5",
    cook_time: "10",
    cook_instructions: "Add olive oil and seasoning to salmon and place skin side down in plate, Put salmon in air fryer basket skin side down anf fry for 8 minutes at 350 degrees Fahrenheit",
    calories: "372",
    carbs: "16",
    total_fat: "21",
    protein: "33",
    sodium: "",
    sugar: "",
  },
  {
    dish_name: "Grilled Pork Chops",
    ingredients: "4 Bone in Pork Chops, 1 1/2 Teaspoons Salt, 1 Teaspoon Cumin, 1/2 Teaspoon Sweet Paprika, 1 Tablespoon Vegetable Oil",
    prep_instructions: "Heat grill",
    prep_time: "10",
    cook_time: "28",
    cook_instructions: "Rub pork with oil and season both sides, grill pork chops till it registers 145 degrees Fahrenheit, Allow pork to rest for 5 minutes",
    calories: "585",
    carbs: "0",
    total_fat: "37",
    protein: "59",
    sodium: "",
    sugar: "",
  },
  {
    dish_name: "BLT Wraps",
    ingredients: "Bacon, Butter Lettuce, Tomato, Burrito Sized Tortillas",
    prep_instructions: "Cook bacon, tear lettuce and slice tomato",
    prep_time: "6",
    cook_time: "6",
    cook_instructions: "Lay tortilla down and add bacon, lettuce and tomato then wrap tightly",
    calories: "400",
    carbs: "46",
    total_fat: "12",
    protein: "44",
    sodium: "",
    sugar: "",
  },
  {
    dish_name: "",
    ingredients: "",
    prep_instructions: "",
    prep_time: "",
    cook_time: "",
    cook_instructions: "",
    calories: "",
    carbs: "",
    total_fat: "",
    protein: "",
    sodium: "",
    sugar: "",
  },
  {
    dish_name: "",
    ingredients: "",
    prep_instructions: "",
    prep_time: "",
    cook_time: "",
    cook_instructions: "",
    calories: "",
    carbs: "",
    total_fat: "",
    protein: "",
    sodium: "",
    sugar: "",
  },
  {
    dish_name: "",
    ingredients: "",
    prep_instructions: "",
    prep_time: "",
    cook_time: "",
    cook_instructions: "",
    calories: "",
    carbs: "",
    total_fat: "",
    protein: "",
    sodium: "",
    sugar: "",
  },
  {
    dish_name: "",
    ingredients: "",
    prep_instructions: "",
    prep_time: "",
    cook_time: "",
    cook_instructions: "",
    calories: "",
    carbs: "",
    total_fat: "",
    protein: "",
    sodium: "",
    sugar: "",
  },
  {
    dish_name: "",
    ingredients: "",
    prep_instructions: "",
    prep_time: "",
    cook_time: "",
    cook_instructions: "",
    calories: "",
    carbs: "",
    total_fat: "",
    protein: "",
    sodium: "",
    sugar: "",
  },
  {
    dish_name: "",
    ingredients: "",
    prep_instructions: "",
    prep_time: "",
    cook_time: "",
    cook_instructions: "",
    calories: "",
    carbs: "",
    total_fat: "",
    protein: "",
    sodium: "",
    sugar: "",
  },
  {
    dish_name: "",
    ingredients: "",
    prep_instructions: "",
    prep_time: "",
    cook_time: "",
    cook_instructions: "",
    calories: "",
    carbs: "",
    total_fat: "",
    protein: "",
    sodium: "",
    sugar: "",
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;