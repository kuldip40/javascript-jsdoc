// @ts-check
const { add, multiply, subtract, divide } = require("./calculator");

/**
 * @file index.js is the root file for this example app
 * @author Kuldip Sathvara
 * @see <a href="https://kuldip.com">Kuldip Sarhvara</a>
 */

/**
 *  Student Name
 * @type {string}
 */
const studentName = "Kuldip Sathvara";

/**
 * Array of grades
 * @type {Array<number>}
 *
 */
const grades = [98, 97.7, 76, 89];

/**
 * Todo object
 * @type {{id: number|string, text: string}}
 */
const todo = { id: 1, text: "Hello" };

/**
 * Calculate tax
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage
 * @returns {string} - Total with a dollar sign
 */
const calculateTax = (amount, tax) => {
  return `$${amount + tax * amount}`;
};

/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student Name
 * @property {string|number} [age] - Student Age (optinal)
 * @property {boolean} isActive - Student is active
 */
/**
 * @type {Student}
 */
const student = { id: 1, name: "Kuldip", age: 20, isActive: true };

/**
 * Class to create a person object
 */
class Person {
  /**
   *
   * @param {Object} personInfo  Information about person
   *
   *
   */
  constructor(personInfo) {
    /**
     * @property {string} name Person name
     */
    this.name = personInfo.name;
    /**
     * @property {string} age Person age
     */
    this.age = personInfo.age;
  }

  /**
   * @property {Function} greet A greeting with name and age
   * @returns {void}
   */
  greet() {
    console.log(`Hello my name is ${this.name} and I am ${this.age}`);
  }
}

/**
 * See {@link Person}
 */

const person1 = new Person({ name: "Kuldip Sathvara", age: 23 });

console.log(add(20, 30));
