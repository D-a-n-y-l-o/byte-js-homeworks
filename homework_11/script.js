// Task 1;

const products = [
    {
      name: "Iphone 12",
      brand: "Apple",
      price: 3200000,
      properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
    },
    {
      name: "Galaxy S20 Ultra",
      brand: "Samsung",
      price: 2900000,
      properties: ["120 hz screen", "Water resistance"],
    },
    {
      name: "MI 9",
      brand: "Xiaomi",
      price: 1300000,
      properties: ["Best price", "Pay less - get more!"],
    },
];

const obj =     {
    name: "Iphone 12",
    brand: "Apple",
    price: 3200000,
    properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
};


function createCard (obj) {
    let priceOfProduct = obj.price;
    priceOfProduct = priceOfProduct.toString();

    let propertiesHTML = obj.properties.map((item) => `<li>${item}</li>`).join('');

    let createdCard = `
    <div>
        <h1>${obj.name}</h1>
        <h3>${obj.brand}</h3>
        <h3>Price: ${priceOfProduct} $</h3>
        <div>
            <ul>
                ${propertiesHTML}
            </ul>
        </div>
    </div>
    `;

    return createdCard;
};

function createListOfCards (array) {
    const cardContainer = document.createElement('div');

    let resultList = array.map((item) => createCard(item)).join('');

    cardContainer.innerHTML = resultList;

    console.log(cardContainer);

    document.body.append(cardContainer);

    return cardContainer;
};

createListOfCards(products);

