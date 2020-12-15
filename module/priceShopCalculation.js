import { MyPrice } from '../module/priceCalculation.js';
/**
 * 
 * @author Boris Bokan
 * @description Class that calculates final selling prices. Includes discount and state tax.
 * Extends the MyPrice class
 * 
 * @version 1.0
 * 
 */

export class MyShopPrice extends MyPrice {
    _discounPercent = 0.00;
    _stateTax = 0.00;
    _sumValueOfDiscount = 0.00;
    _priceWithDiscount = 0.00;
    _sumValueOfTaxes = 0.00;
    _sumEndPrice = 0.00;
    /**
     * Obtaining the final, selling price
     * @param {decima} discounPercent My discount value, value of percentage  (n.00 %)
     * @param {decimal} stateTax Value of mandatory tax paid to the state,value of percentage  (n.00 %)
     */
    constructor(purchasePrice, interestPercent, discounPercent = 0, stateTax = 0) {
        super(purchasePrice, interestPercent);
        this._discounPercent = discounPercent;
        this._stateTax = stateTax;

        this._calculateMyShopPrice();
    }

    _calculateMyShopPrice() {


        this._sumValueOfDiscount = this.getPrice() * this._discounPercent / 100;
        this._priceWithDiscount = this.getPrice() - this._sumValueOfDiscount;

        //calculating taxes
        this._sumValueOfTaxes = (this._priceWithDiscount * this._stateTax) / 100
        this._sumEndPrice = this._priceWithDiscount + this._sumValueOfTaxes;
    }
    //Getting price without discount
    getPriceWithDiscount() { return this._priceWithDiscount; }
    //Obtaining value of calculation taxes in percent %
    getValueOfTax() { returnthis._stateTax };
    //Obtaining the sum of the total value from taxes
    getSumOfTaxes() { return this._sumValueOfTaxes }
    //Obtaining the sum of the total value of the discount
    getSumOfDiscount() { return this._sumValueOfDiscount; }
    //Obtaining value of discount in percent %
    getDiscountPercent() { return this._discounPercent };
    //Whole price . Price with earn percent, diskount and tax
    getEndPrice() { return this._sumEndPrice; }

}
