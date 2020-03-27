let temp = ["", "", ""];

let pendient = false;

const findNumber = str => {
  let exp = 0;
  let result = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    let code = str.codePointAt(i) - 48;
    result += code * Math.pow(10, exp);
    exp++;
  }
  return result;
};

const solve = arr => {
  let num1 = findNumber(arr[0]);
  let num2 = findNumber(arr[2]);
  let signo = arr[1];
  if (signo === "*") {
    return num1 * num2;
  } else if (signo === "/") {
    return num1 / num2;
  } else if (signo === "+") {
    return num1 + num2;
  }
  return num1 - num2;
};

export default char => {
  let code = char.codePointAt(0);
  if (code > 47 && code < 58) {
    if (pendient) {
      temp[2] += char;
    } else {
      temp[0] += char;
    }
    console.log(temp);
  } else {
    if (pendient) {
      temp[0] = solve(temp) + "";
      temp[1] = char;
      temp[2] = "";
      console.log(temp);
    } else {
      pendient = !pendient;
    }
    temp[1] = char;
  }
};
