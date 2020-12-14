import { MyPrice } from '../module/priceCalculation.js';
import { MyShopPrice } from '../module/priceShopCalculation.js';

const price = new MyPrice(140.65, 35.0);
console.log(' ********************WITHOUT DISCOUNT AND TAXES**************************');
console.log(`    Purchase price is: ${price.getPurchasePrice().toFixed(2)} 📊
    my intereset percent is ${price.getInterestPercent().toFixed(2)} % 
    my profit is ${price.getSumInterest().toFixed(2)} 
    finaly my seling price is: ${price.getPrice().toFixed(2)}`);

const priceshop = new MyShopPrice(140.65, 35.0, 3.00, 18);

console.log('');
console.log(' ***************WITH DISCOUNT AND TAXES ********************************');
console.log(`
    Purchase price: ${priceshop.getPurchasePrice().toFixed(2)} 
    my profit percent ${priceshop.getInterestPercent().toFixed(2)} %
    The value of my profit: ${priceshop.getSumInterest().toFixed(2)}
    My price without discounts and taxes: ${priceshop.getPrice().toFixed(2)}
    ------------------------------------------------------------
    My discount percent: ${priceshop.getDiscountPercent().toFixed(2)} % ⤵
    Discount value: ${priceshop.getSumOfDiscount().toFixed(2)}
    Price with discount: ${priceshop.getPriceWithDscount().toFixed(2)}
    -------------------------------------------------------------
    Value of tax percent: ${priceshop.getSumOfTaxes().toFixed(2)} % ⬆
    My end price is: 💥 ${priceshop.getEndPrice().toFixed(2)} 💥`);
console.log('*****************************************************************');


const body = document.querySelector('.test');
body.innerText = ` ***************WITH DISCOUNT AND TAXES ******************************** 
Purchase price is: ${price.getPurchasePrice().toFixed(2)} 📊
my intereset percent is ${price.getInterestPercent().toFixed(2)} %
my profit is ${price.getSumInterest().toFixed(2)}
finaly my seling price is: ${price.getPrice().toFixed(2)} 


***************WITH DISCOUNT AND TAXES ********************************')

Purchase price: ${priceshop.getPurchasePrice().toFixed(2)}
my profit percent ${priceshop.getInterestPercent().toFixed(2)} %
    The value of my profit: ${priceshop.getSumInterest().toFixed(2)}
My price without discounts and taxes: ${priceshop.getPrice().toFixed(2)}
------------------------------------------------------------
    My discount percent: ${priceshop.getDiscountPercent().toFixed(2)} % ⤵
Discount value: ${priceshop.getSumOfDiscount().toFixed(2)}
Price with discount: ${priceshop.getPriceWithDscount().toFixed(2)}
-------------------------------------------------------------
    Value of tax percent: ${priceshop.getSumOfTaxes().toFixed(2)} % ⬆
My end price is: 💥 ${priceshop.getEndPrice().toFixed(2)} 💥`;




