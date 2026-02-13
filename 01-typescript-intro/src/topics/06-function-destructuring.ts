interface Product {
    description: string;
    price: number;
}
const phone: Product = {
    description: 'Nokia A1',
    price: 150,
};

const tablet: Product = {
    description: 'iPad Air',
    price: 350,
};

interface TaxtCalculationOptions {
    products: Product[];
    tax: number;
}

//function taxtCalculation(options: TaxtCalculationOptions): [number, number] {
//function taxtCalculation({tax, products}: TaxtCalculationOptions): [number, number] {
function taxtCalculation(options: TaxtCalculationOptions): [number, number] {
    const {tax, products} = options;
    let total = 0;
    products.forEach(({price}) => {
        total += price;
    });
    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, totalTax] = taxtCalculation({ 
    products: shoppingCart, 
    tax: tax 
}); 
console.log('Total', total);
console.log('Tax', totalTax);

export{};