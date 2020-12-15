/**
 *
 * @author Boris Bokan
 * @description A class that calculates a basic selling price based on a percentage
 * @version 1.0
 * 
 * @example const price = new MyPrice(140.65, 35.0); //MyPrice(Purchase price, Interest percent)
 * @example price.getPrice()... +
 *
 */
export class MyPrice {
  _purchaseprice = 0.00;
  _interestPercent = 0.00;
  _sumInterest = 0.00;
  _myPrice = 0.00;

  /**
   *
   * @param {decimal} purchaseprice Purchase price for me
   * @param {decima} interestPercent My inerest percent
   */
  constructor(purchasePrice, interestPercent) {
    this._purchasePrice = purchasePrice;
    this._interestPercent = interestPercent;
    this._calculate();
  }

  _calculate() {
    this._sumInterest = this._purchasePrice * this._interestPercent / 100;
    this._myPrice = this._purchasePrice + this._sumInterest;
  }


  /** 
   * Display of the purchase price from the supplier 
   * */
  getPurchasePrice() {
    let result = this._purchasePrice ? this._purchasePrice : 0.0;
    return result;
  }
  /**
   * Returns the value of the entered percentage of earnings
   */
  getInterestPercent() {
    let result = this._interestPercent ? this._interestPercent : 0.0;
    return result;
  }

  /**
   * Get my finnaly price with my interest
   */
  getPrice() {
    return this._myPrice;
  }

  /**
   * My earnings of new price
   */
  getSumInterest() {
    return this._sumInterest;
  }
}



