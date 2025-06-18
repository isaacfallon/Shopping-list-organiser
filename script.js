const shoppingItems = document.querySelector('#shoppingItems');
const organiseButton = document.querySelector('#organiseButton');

const aisleZeroText = document.querySelector('#aisleZero');
const aisleOneText = document.querySelector('#aisleOne');
const aisleTwoText = document.querySelector('#aisleTwo');
const aisleThreeText = document.querySelector('#aisleThree');
const aisleFourText = document.querySelector('#aisleFour');
const aisleFiveText = document.querySelector('#aisleFive');
const aisleSixText = document.querySelector('#aisleSix');
const aisleSevenText = document.querySelector('#aisleSeven');
const aisleEightText = document.querySelector('#aisleEight');
const aisleNineText = document.querySelector('#aisleNine');
const aisleTenText = document.querySelector('#aisleTen');
const noCategoryText = document.querySelector('#noCategory');

// Aisle 0: Fruit veg and meat
const aisleZero = ['blueberries', 'strawberries', 'apples', 'green onions', 'green beans', 'cucumber', 'broccoli', 'cauliflower', 'cabbage', 'carrots', 'celery', 'pumpkin', 'tomatoes', 'capsicum', 'mushrooms', 'brown onions', 'red onions', 'potatoes', 'pork mince', 'beef mince', 'lamb mince', 'mince', 'chicken thigh', 'chicken breast', 'beef strips', 'salmon'];

// Aisle 1. Yogurt cheese butter juice cream
const aisleOne = ['juice', 'yoghurt', 'cheese', 'cream', 'unsalted butter', 'butter', 'olive oil spread'];

// Aisle 2: Cereal, bread, bars, spreads
const aisleTwo = ['bread', 'fruit loaf', 'bars', 'oats', 'jam', 'honey', 'peanut butter'];

// Aisle 3: Chocolate, coffee, tea, biscuits
const aisleThree = ['chocolate', 'coffee beans', 'tea', 'drinking chocolate', 'marshmallows', 'digestives', 'mint slice'];

// Aisle 4: Soft drink, cordial, chips, popcorn
const aisleFour = ['cordial', 'blackcurrant cordial'];

// Aisle 5: Asian food, pasta, rice, canned veg
const aisleFive = ['soy sauce', 'dark soy sauce', 'rice wine vinegar', 'kecap mantis', 'kewpie mayo', 'pasta', 'noodles', 'pesto'];

// Aisle 6: Sauces, cooking oils, spices, kitchenware, eggs
const aisleSix = ['smokey barbecue sauce', 'worcestershire sauce', 'bagel seasoning', 'cooking salt', 'salt', 'pepper', 'minced ginger', 'minced garlic', 'baking paper', 'flour', 'self raising flour', 'almond flour'];

// Aisle 7: Toiletries, cosmetics, oral care, medicinal
const aisleSeven = ['toothpaste', 'neurofen', 'panadol', 'hydralyte', 'shampoo', 'body wash', 'hand sanitiser'
];

// Aisle 8: Milk, toilet rolls, paper towels
const aisleEight = ['tissues', 'toilet paper', 'flushable wipes', 'paper towel', 'milk'];

// Aisle 9: Laundry and dishwashing, bin bags
const aisleNine = ['dishwasher powder', 'toilet cleaner', 'drano'];

// Aisle 10: Frozen - ice cream, frozen chicken strips, dog food, frozen berries
const aisleTen = ['ice cream', 'shortcrust pastry', 'frozen spinach', 'frozen peas', 'dog food'];

const allPossibleItems = [...aisleZero, ...aisleOne, ...aisleTwo, ...aisleThree, ...aisleFour, ...aisleFive, ...aisleSix, ...aisleSeven, ...aisleEight, ...aisleNine, ...aisleTen];

const organiseItems = () => {
    // Gather all entered items into one array and convert to lowercase for clean filtering
    const itemsEntered = shoppingItems.value.toLowerCase().split('\n');

    // Remove any whitespaces before or after any items entered
    const unorganisedList = itemsEntered.map(str => str.trim());

    // Define an array of aisle data to loop through
    const aisles = [
        { items: aisleZero, textElement: aisleZeroText },
        { items: aisleOne, textElement: aisleOneText },
        { items: aisleTwo, textElement: aisleTwoText },
        { items: aisleThree, textElement: aisleThreeText },
        { items: aisleFour, textElement: aisleFourText },
        { items: aisleFive, textElement: aisleFiveText },
        { items: aisleSix, textElement: aisleSixText },
        { items: aisleSeven, textElement: aisleSevenText },
        { items: aisleEight, textElement: aisleEightText },
        { items: aisleNine, textElement: aisleNineText },
        { items: aisleTen, textElement: aisleTenText }
    ];

    // Process each aisle dynamically
    aisles.forEach(aisle => {
        const filteredItems = unorganisedList.filter(item => aisle.items.includes(item));
        const sortedItems = filteredItems.sort((a, b) => aisle.items.indexOf(a) - aisle.items.indexOf(b));
        aisle.textElement.innerText = sortedItems.join('\n ');
    });

    // Uncategorised items:
    const noCategoryItems = unorganisedList.filter(item => !allPossibleItems.includes(item));
    noCategoryText.innerText = noCategoryItems.join('\n ');
};

organiseButton.addEventListener("click", organiseItems)
