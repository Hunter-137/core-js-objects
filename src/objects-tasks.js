/* ************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */

/**
 * Returns shallow copy of an object.
 *
 * @param {Object} obj - an object to copy
 * @return {Object}
 *
 * @example
 *    shallowCopy({a: 2, b: 5}) => {a: 2, b: 5}
 *    shallowCopy({a: 2, b: { a: [1, 2, 3]}}) => {a: 2, b: { a: [1, 2, 3]}}
 *    shallowCopy({}) => {}
 */
function shallowCopy(obj) {
  return Object.assign(JSON.parse(JSON.stringify(obj)));
  // return obj2;
  // throw new Error('Not implemented');
}

/**
 * Merges array of objects into a single object. If there are overlapping keys, the values
 * should be summed.
 *
 * @param {Object[]} objects - The array of objects to merge
 * @return {Object} - The merged object
 *
 * @example
 *    mergeObjects([{a: 1, b: 2}, {b: 3, c: 5}]) => {a: 1, b: 5, c: 5}
 *    mergeObjects([]) => {}
 */
function mergeObjects(objects) {
  const map = new Map();
  objects.forEach((obj) => {
    // console.log(obj);
    const keys = Object.keys(obj);
    // console.log(keys);
    for (let i = 0; i < keys.length; i += 1) {
      map.set(
        keys[i],
        map.has(keys[i]) ? map.get(keys[i]) + obj[keys[i]] : obj[keys[i]]
      );
    }
  });
  return Object.fromEntries(map);
  // const arrKeyVal = [];
  // const result = [];
  // // console.log(map);
  // objects.forEach((obj) => {
  //   const keys = Object.keys(obj);
  //   // console.log(keys);
  //   for (let i = 0; i < keys.length; i += 1) {
  //     if (!result.includes(keys[i])) {
  //       result.push(keys[i]);
  //     } else {
  //     }
  //   }
  //   console.log(result);
  // });
  // const map = new Map();
  // objects.forEach((obj) => {
  //   const keys = Object.keys(obj);
  //   for (let i = 0; i < keys.length; i += 1) {
  //     map.set(
  //       keys[i],
  //       map.has(keys[i]) ? map.get(keys[i]) + obj[keys[i]] : obj[keys[i]]
  //     );
  //   }
  // });
  // return Object.fromEntries(map);
  // throw new Error('Not implemented');
  // let keyArray = [];
  // let valueArray = [];
  // objects.forEach((element) => {
  //   keyArray = [...keyArray, Object.keys(element)];
  // });
  // objects.forEach((element) => {
  //   valueArray = [...valueArray, Object.values(element)];
  // });
  // console.log(keyArray);
  // console.log(valueArray);
  // for (let i = 0; i < keyArray.length; i += 1) {
  //   for (let j = 0; j < keyArray.length; j += 1) {
  //     const elementObj1 = keyArray[i][j];
  //     console.log(elementObj1);
  //   }
  // }
  // return objects.reduce((acc, obj) => {
  //   for (const key in obj) {
  //     console.log(key);
  //     acc[key] = acc[key] ? acc[key] + obj[key] : obj[key];
  //   }
  //   return acc;
  // }, {});
  // let keyArr = [];
  // objects.forEach((keyElems) => {
  //   const keyElem = Object.keys(keyElems);
  //   // console.log(value);
  //   keyArr = [...keyArr, keyElem];
  // });
  // console.log(keyArr);
  // let valArr = [];
  // objects.forEach((valElems) => {
  //   const valElem = Object.values(valElems);
  //   // console.log(value);
  //   valArr = [...valArr, valElem];
  // });
  // console.log(valArr);
  // for (let i = 0; i < keyArr.length; i += 1) {
  //   console.log(keyArr[i + 1][i]);
  //   if (keyArr[i][i] === keyArr[1][i]) {
  //     // console.log(valArr[i][i] + valArr[1][i]);
  //   }
  // }
  // keyArr.forEach((elemArr) => {
  //   if (elemArr[])
  // });
}
// console.log(
//   mergeObjects([
//     { a: 1, b: 2 },
//     { b: 3, c: 5 },
//   ])
// );

/**
 * Removes a properties from an object.
 *
 * @param {Object} obj - The object from which to remove the property
 * @param {Array} keys - The keys of the properties to remove
 * @return {Object} - The object with the specified key removed
 *
 * @example
 *    removeProperties({a: 1, b: 2, c: 3}, ['b', 'c']) => {a: 1}
 *    removeProperties({a: 1, b: 2, c: 3}, ['d', 'e']) => {a: 1, b: 2, c: 3}
 *    removeProperties({name: 'John', age: 30, city: 'New York'}, 'age') => {name: 'John', city: 'New York'}
 *
 */
function removeProperties(obj, keys) {
  // throw new Error('Not implemented');
  // const prepare = Object.keys(obj).forEach((elem) => delete keys[elem]);
  // return prepare;

  // for (const key of keys) {
  //   delete obj[key];
  // }
  // return obj;

  // попробовать обычный for

  const filteredKeys = Object.keys(obj).filter((key) => !keys.includes(key));
  return Object.assign({}, ...filteredKeys.map((key) => ({ [key]: obj[key] })));
}

/**
 * Compares two source objects. Returns true if the objects are equal and false otherwise.
 * There are no nested objects.
 *
 * @param {Object} obj1 - The first object to compare
 * @param {Object} obj2 - The second object to compare
 * @return {boolean} - True if the objects are equal, false otherwise
 *
 * @example
 *    compareObjects({a: 1, b: 2}, {a: 1, b: 2}) => true
 *    compareObjects({a: 1, b: 2}, {a: 1, b: 3}) => false
 */
function compareObjects(obj1, obj2) {
  // throw new Error('Not implemented');
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

/**
 * Checks if the source object is empty.
 * Returns true if the object contains no enumerable own properties, false otherwise.
 *
 * @param {Object} obj - The object to check
 * @return {boolean} - True if the object is empty, false otherwise
 *
 * @example
 *    isEmptyObject({}) => true
 *    isEmptyObject({a: 1}) => false
 */
function isEmptyObject(obj) {
  const prepare = Object.keys(obj);
  if (prepare.length === 0) {
    return true;
  }
  return false;
}

/**
 * Makes the source object immutable by preventing any changes to its properties.
 *
 * @param {Object} obj - The source object to make immutable
 * @return {Object} - The immutable version of the object
 *
 * @example
 *    const obj = {a: 1, b: 2};
 *    const immutableObj = makeImmutable(obj);
 *    immutableObj.a = 5;
 *    console.log(immutableObj) => {a: 1, b: 2}
 *    delete immutableObj.a;
 *    console.log(immutableObj) => {a: 1, b: 2}
 *    immutableObj.newProp = 'new';
 *    console.log(immutableObj) => {a: 1, b: 2}
 */
function makeImmutable(obj) {
  // throw new Error('Not implemented');
  return Object.freeze(obj);
}

/**
 * Returns a word from letters whose positions are provided as an object.
 *
 * @param {Object} lettersObject - An object where keys are letters and values are arrays of positions
 * @return {string} - The constructed word
 *
 * @example
 *    makeWord({ a: [0, 1], b: [2, 3], c: [4, 5] }) => 'aabbcc'
 *    makeWord({ H:[0], e: [1], l: [2, 3, 8], o: [4, 6], W:[5], r:[7], d:[9]}) => 'HelloWorld'
 */
function makeWord(lettersObject) {
  const result = [];
  const keysArr = Object.keys(lettersObject);
  keysArr.forEach((element) => {
    // console.log(element);
    // console.log(lettersObject[element]);
    lettersObject[element].forEach((index) => {
      result[index] = element;
      // console.log(result[index]);
    });
  });
  return result.join('');
  // throw new Error('Not implemented');
  // const valueArr = Object.values(lettersObject);
  // console.log(valueArr);
  // const sort = valueArr.forEach((element) => {
  //   return element.sort((a, b) => a - b);
  // });
  // console.log(sort);
  // // 1. Combine all positions using reduce:
  // // console.log(valueArrs);
  // // console.log(keyArr);
  // // console.log(combineArrs);
  // // console.log(sortPositions);
  // const valueArrs = Object.values(lettersObject);
  // const keyArr = Object.keys(lettersObject);
  // const combineArrs = valueArrs.reduce((acc, elem) => {
  //   return [...acc, ...elem];
  // }, []);
  // // 2. Sort positions numerically:
  // const sortPositions = combineArrs.sort();
  // // 3. Build the word using reduce:
  // const result = sortPositions.reduce((acc, elem) => {
  //   const word = keyArr.find((letter) => lettersObject[letter].includes(elem));
  //   return word ? acc + word : acc;
  // }, '');
  // return result;
}
// console.log(makeWord({ a: [0, 1], b: [2, 3], c: [4, 5] }));
/**
 * There is a queue for tickets to a popular movie.
 * The ticket seller sells one ticket at a time strictly in order and give the change.
 * The ticket costs 25. Customers pay with bills of 25, 50, or 100.
 * Initially the seller has no money for change.
 * Return true if the seller can sell tickets, false otherwise
 *
 * @param {number[]} queue - The array representing the bills each customer pays with
 * @return {boolean} - True if the seller can sell tickets to everyone, false otherwise
 *
 * @example
 *    sellTickets([25, 25, 50]) => true
 *    sellTickets([25, 100]) => false (The seller does not have enough money to give change.)
 */
function sellTickets(queue) {
  // throw new Error('Not implemented');
  let change = 0;
  let flag = true;
  queue.forEach((money) => {
    if (money === 25) {
      change += 25;
      flag = true;
    }
    if (money > 25) {
      if (change - money < 0) {
        flag = false;
      }
    }
  });
  return flag;
  // console.log(change);
}

// console.log(sellTickets([25, 50]));

/**
 * Returns the rectangle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    const r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
  // throw new Error('Not implemented');
  class RectangleClass {
    constructor(widthC, heightC) {
      this.width = widthC;
      this.height = heightC;
    }

    getArea() {
      return this.width * this.height;
    }
  }
  return new RectangleClass(width, height);
}

// const r = new Rectangle(10, 20);
// console.log(r.width); // => 10
// console.log(r.height); // => 20
// console.log(r.getArea()); // => 200

/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
  const prepare = Object.assign(obj);
  return JSON.stringify(prepare);
}
// console.log(getJSON([1, 2, 3]));

/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    const r = fromJSON(Circle.prototype, '{"radius":10}');
 *
 */
function fromJSON(proto, json) {
  // throw new Error('Not implemented');
  const parse = JSON.parse(json);
  const newObj = Object.create(proto, parse);
  return newObj;
}
// const r = fromJSON(Circle.prototype, '{"radius":10}');
// console.log(r);

/**
 * Sorts the specified array by country name first and city name
 * (if countries are equal) in ascending order.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 *    ]
 */
function sortCitiesArray(/* arr */) {
  throw new Error('Not implemented');
}

/**
 * Groups elements of the specified array by key.
 * Returns multimap of keys extracted from array elements via keySelector callback
 * and values extracted via valueSelector callback.
 * See: https://en.wikipedia.org/wiki/Multimap
 *
 * @param {array} array
 * @param {Function} keySelector
 * @param {Function} valueSelector
 * @return {Map}
 *
 * @example
 *   group([
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Russia', city: 'Omsk' },
 *      { country: 'Russia', city: 'Samara' },
 *      { country: 'Belarus', city: 'Grodno' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland', city: 'Lodz' }
 *     ],
 *     item => item.country,
 *     item => item.city
 *   )
 *            =>
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"],
 *    "Poland" => ["Lodz"]
 *   }
 */
function group(/* array, keySelector, valueSelector */) {
  throw new Error('Not implemented');
}

/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class
 * and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurrences
 *
 * All types of selectors can be combined using the combination ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy
 * and implement the functionality to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string representation
 * according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple,
 * clear and readable as possible.
 *
 * @example
 *
 *  const builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()
 *    => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
 *    => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()
 *    => 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */

const cssSelectorBuilder = {
  element(/* value */) {
    throw new Error('Not implemented');
  },

  id(/* value */) {
    throw new Error('Not implemented');
  },

  class(/* value */) {
    throw new Error('Not implemented');
  },

  attr(/* value */) {
    throw new Error('Not implemented');
  },

  pseudoClass(/* value */) {
    throw new Error('Not implemented');
  },

  pseudoElement(/* value */) {
    throw new Error('Not implemented');
  },

  combine(/* selector1, combinator, selector2 */) {
    throw new Error('Not implemented');
  },
};

module.exports = {
  shallowCopy,
  mergeObjects,
  removeProperties,
  compareObjects,
  isEmptyObject,
  makeImmutable,
  makeWord,
  sellTickets,
  Rectangle,
  getJSON,
  fromJSON,
  group,
  sortCitiesArray,
  cssSelectorBuilder,
};
