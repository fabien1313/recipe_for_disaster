const Recipe = require('../models/User.js');

const recipeData =[
    {
        dish_name: 'Bacon and Cheese Egg Bites',
        ingredients: '6 slices thick-cut bacon, diced, 9 large eggs, 3 ounces cream cheese, 3/4 teaspoon kosher salt, 5 ounces Mozzarella cheese grated, Ground black pepper, to taste',
        prep_instructions: 'Dice bacon, Grate Cheese, Preheat oven to 375 degrees Fahrenheit, Grease muffin tin',
        prep_time:'5',
        cook_time:'30',
        cook_instructions:'Cook diced bacon, Blend eggs, cream cheese and salt, Add cheese and bacon into tin, Pour egg mixture into 3/4ths of tin, Mix eggs, cheese and bacon together inside of tin, Sprinkle black pepper, Bake 16-20 min',
        calories:'311',
        carbs:'2',
        total_fat:'24',
        protein:'21',
        sodium:'',
        sugar:'',
    },
    {
        dish_name:'Sheet Pan Pancakes',
        ingredients:'8 Tablespoons of unsalted butter, 2 1/2 Cup of all purpose flour, 1 Tablespoon of baking powder, 1 Teaspoon of baking soda, 1/2 Teaspoon of salt, 1/2 Cup brown sugar, 2 Cups buttermilk, 2 Large eggs, 1 Teaspoon of vanilla extract, 1 Cup blueberries, 1 Cup raspberries',
        prep_instructions:'Melt stick of butter then allow it to cool, Preheat oven to 425 degrees Fahrenheit, Grease a 15x10.5 inch baking sheet with 2 tablespons of melted butter',
        prep_time:'10',
        cook_time:'20',
        cook_instructions:'Sift dry ingredients (flour, baking powder, baking soda and salt), Whick wet ingredients (buttermilk, eggs, anilla and sugar), Fold wet and dry ingredients together adding 4 tablespoons of melted butter into mixture, Fold in half of fruit, Pour batter into sheet, Sprinkle rest of fruit on top, Bake for 15 - 20 min, Brish rest of butter on top of pancake',
        calories:'234',
        carbs:'33',
        total_fat:'9',
        protein:'5',
        sodium:'',
        sugar:'',
    },
    // {
    //     dish_name:'',
    //     ingredients:'',
    //     prep_instructions:'',
    //     prep_time:'',
    //     cook_time:'',
    //     cook_instructions:'',
    //     calories:'',
    //     carbs:'',
    //     total_fat:'',
    //     protein:'',
    //     sodium:'',
    //     sugar:'',
    // },
]

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;