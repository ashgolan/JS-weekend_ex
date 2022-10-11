console.log(`-------------------  1.1  ------------------`);

const YesNo = function (value) {
  const resault = value === true ? "Yes" : "No";
  return resault;
};

//console.log(YesNo(false));

console.log(`-------------------  2.1  ------------------`);

const TwoMinimum = function (arr) {
  const resault = arr.sort((a, b) => a - b);
  return resault[0] + resault[1];
};

// console.log(TwoMinimum([10, 343445353, 3453445, 3453545353453]));

console.log(`-------------------  2.2  ------------------`);

const binaryArr = function (arr) {
  return arr.reverse().reduce((total, current, index) => {
    return total + current * 2 ** index;
  }, 0);
};

// console.log(binaryArr([0, 0, 1, 0, 1, 1, 0]));

console.log(`-------------------  2.3  ------------------`);

const findNextSquare = function (number) {
  const sqrtOfNumber = Math.sqrt(number);
  return sqrtOfNumber % 1 === 0 ? Math.pow(sqrtOfNumber + 1, 2) : -1;
};

// console.log(findNextSquare(121));

console.log(`-------------------  2.4  ------------------`);

const findDifferent = function (arr) {
  const sorted = arr.sort((a, b) => a - b);
  return sorted[0] === sorted[1] ? sorted[sorted.length - 1] : sorted[0];
};

// console.log(findDifferent([0, 0, 0.55, 0, 0]));

console.log(`-------------------  2.5  ------------------`);

const summation = function (number) {
  const arrOfNnumbers = new Array(number);
  for (let i = 0; i < arrOfNnumbers.length; i++) {
    arrOfNnumbers[i] = i + 1;
  }

  const reduced = arrOfNnumbers.reduce((total, current) => {
    return total + current;
  });
  return reduced;
};

// console.log(summation(8));

console.log(`-------------------  2.6  ------------------`);

const YearsandCenturies = function (year) {
  const restNumber = (100 - (year % 100)) / 100;
  return year % 100 === 0 ? year / 100 : year / 100 + restNumber;
};

// console.log(YearsandCenturies(2000));

console.log(`-------------------  2.7  ------------------`);

const calc = function (funcChar, num1, num2) {
  return funcChar === "+"
    ? num1 + num2
    : funcChar === "-"
    ? num1 - num2
    : funcChar === "*"
    ? num1 * num2
    : funcChar === "/"
    ? num1 / num2
    : "Wrong Input";
};

// console.log(calc("*", 15, 3));

console.log(`-------------------  3.1  ------------------`);

const nb_years = function (p0, percent, aug, p) {
  const convertPercent = percent / 100;
  let count = 0;
  while (p0 < p) {
    p0 = p0 + p0 * convertPercent + aug;
    count++;
  }
  return count;
};

// console.log(nb_years(1500000, 2.5, 10000, 2000000));

console.log(`-------------------  3.2  ------------------`);

const peopleInBus = function (arr) {
  const reduced = arr.reduce((total, current) => {
    return total + current[0] - current[1];
  }, 0);
  return reduced;
};

console.log(
  peopleInBus([
    [5, 0],
    [3, 1],
    [8, 0],
  ])
);

console.log(`-------------------  4.1  ------------------`);

const fibonacci = function (startWith, num) {
  const arr = [];
  startWith === 0 ? arr.push(0, 1) : arr.push(1, 1);

  for (let i = 2; i <= num; i++) {
    let sum = arr[i - 1] + arr[i - 2];
    arr.push(sum);
  }
  return arr[num];
};

// console.log(fibonacci(1, 13));

console.log(`-------------------  4.2  ------------------`);

const tribonacci = function (signature, num) {
  const triboArr = [];
  if (signature[0] === 0 && signature[1] === 0 && signature[2] === 1) {
    triboArr.push(0, 0, 1);
  } else if (signature[0] === 1 && signature[1] === 1 && signature[2] === 1) {
    triboArr.push(1, 1, 1);
  } else return "the input array in not correct";

  for (let i = 3; i < num; i++) {
    let sum = triboArr[i - 1] + triboArr[i - 2] + triboArr[i - 3];
    triboArr.push(sum);
  }
  return triboArr;
};

// console.log(tribonacci([1, 1, 1], 13));

console.log(`-------------------  5.1  ------------------`);

const removefirstAndLast = function (str) {
  const sliceFirst = str.slice(1, str.length - 1);

  return sliceFirst;
};

// console.log(removefirstAndLast("golaneno"));

console.log(`-------------------  5.2  ------------------`);

const repeatText = function (number, str) {
  return str.repeat(number);
};

// console.log(repeatText(5, "Hello"));

console.log(`-------------------  5.3  ------------------`);

const toCamelCase = function (str) {
  str = str[0] + str.slice(1).toLowerCase();
  const splited = str.split(/\-?\_/);
  let newArr = splited.map((m, index) => {
    if (index !== 0) return m[0].toUpperCase() + m.slice(1);
    return m;
  });
  return newArr.join("");
};

// console.log(toCamelCase("I_want_to_go_to_the_course_in_the_next_month"));

console.log(`-------------------  5.4  ------------------`);

const toWeirdCase2 = function (text) {
  let haveAspaceBefore;
  let counter = 0;
  const mapping2 = text.split("").map((letter) => {
    if (letter === " ") {
      haveAspaceBefore = true;
      counter = 0;
    } else {
      if (counter % 2 === 0 || haveAspaceBefore) {
        haveAspaceBefore = false;
        counter++;
        return letter.toUpperCase();
      }
      counter++;
      return letter.toLowerCase();
    }
    return " ";
  });
  return mapping2.join("");
};

// console.log(toWeirdCase2("alaa shaalan"));

console.log(`-------------------  5.5  ------------------`);

const Abbreviate = function (name, family) {
  const resault = name[0].toUpperCase() + "." + family[0].toUpperCase();
  return resault;
};

// console.log(Abbreviate("alaa", "shaalan"));

console.log(`-------------------  5.6  ------------------`);

const maskify = function (secretNumber) {
  if (secretNumber.length >= 4) {
    const last4chars = [...secretNumber]
      .slice(secretNumber.length - 4)
      .join("");
    const maskedChars = "#".repeat(secretNumber.length - 4);
    return maskedChars.concat(last4chars);
  }
  return secretNumber;
};

// console.log(maskify("6485216524321516"));

console.log(`-------------------  5.7  ------------------`);

const shortestWord = function (sentence) {
  const splitedSentence = sentence.split(" ");
  min = splitedSentence[0].length;
  splitedSentence.forEach((element) => {
    if (element.length < min) min = element.length;
  });
  return min;
};

// console.log(shortestWord("alaa shaalan from ein kynia in the Golan heights"));

console.log(`-------------------  6.1  ------------------`);

const accum = function (str) {
  const splitStr = [...str.toLowerCase()];
  const mappingAccum = splitStr.map((letter, index) => {
    const firstLetter = letter.toUpperCase();
    const repeatedLetter = firstLetter + letter.repeat(index);
    return repeatedLetter;
  });
  return mappingAccum.join("-");
};

// console.log(accum("cwAt"));

console.log(`-------------------  6.2  ------------------`);

const Duplicates = function (str) {
  const sortingArr = str.toLowerCase().split("").sort();

  countingObj = {};
  count = 0;
  resaultText = "";

  sortingArr.forEach((element) => {
    countingObj[element] ? countingObj[element]++ : (countingObj[element] = 1);
  });

  for (let [key, value] of Object.entries(countingObj)) {
    if (value > 1) {
      resaultText += ` "${key}" occurs ${value} times`;
      count++;
    }
  }
  console.log(count + " # : " + resaultText);
  return countingObj;
};

// Duplicates("aabbc");

console.log(`-------------------  6.3  ------------------`);

const longest = function (a, b) {
  return [...new Set([...a].concat([...b]).sort())].join("");
};

// console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));

console.log(`-------------------  6.4  ------------------`);

const isIsogram = function (str) {
  const sortingArr = str.toLowerCase().split("").sort();
  const countingObj = {};
  count = 0;
  sortingArr.forEach((element) => {
    countingObj[element] ? countingObj[element]++ : (countingObj[element] = 1);
  });
  for (let value in countingObj) {
    if (countingObj[value] > 1) count++;
  }
  return count === 0 ? true : false;
};

// console.log(isIsogram("moOse"));

console.log(`-----------------  THE END  ----------------`);
