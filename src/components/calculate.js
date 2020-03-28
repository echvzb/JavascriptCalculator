const checkHighOperations = str => {
  let items = str.split(" ");
  let temp = [];
  items.forEach((item, index) => {
    let result = 0;
    if (item === "X" || item === "/") {
      let num1 = 0;
      let num2 = Number(items[index + 1]);
      if (items[index - 1] === "") {
        num1 = temp[temp.length - 1];
      } else {
        num1 = Number(items[index - 1]);
      }
      if (item === "X") {
        result = num1 * num2;
      } else {
        result = num1 / num2;
      }
      temp = [...temp.slice(0, temp.length - 1), result + ""];
      items[index + 1] = "";
      return;
    }
    if (item === "") return;
    temp.push(item);
  });
  return temp;
};

export default (str = "+ 5 + 2 - 3 + 4 * 2 + 20 / 2 * 5") => {
  let add = checkHighOperations(str);
  let result = 0;
  add.forEach((elem, index) => {
    if (elem === "+" || elem === "-") {
      let num = Number(add[index + 1]);
      if (elem === "+") {
        result += num;
      } else if (elem === "-") {
        result -= num;
      }
    }
  });
  return result
};
