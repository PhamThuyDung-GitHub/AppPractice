// Declare fruitShop with the correct type
interface FruitShop {
    getFruit(): string;
}

const fruitShop: FruitShop = {
    getFruit() {
        return 'apple';
    }
};

// Call getFruit method of fruitShop
console.log(fruitShop.getFruit());

// This would cause a runtime error because fruitShop is not a string
//console.log(fruitShop.toUpperCase());

// Define getGameStats function
const getGameStats = <T>(args: T): void => {
    // Do something with args here
};

// Call getGameStats with a number
// Note: You cannot directly call toUpperCase() on a number
getGameStats<number>(45);
