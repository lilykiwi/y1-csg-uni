function main(val) {
  switch (val) {
    case 1:
      questionOne(val);
      break;
    case 2:
      questionTwo(val);
      break;
    case 3:
      questionThree(val);
      break;
    case 4:
      questionFour(val);
      break;
    case 5:
      questionFive(val);
      break;
    default:
      break;
  }
}

function questionOne(val) {
  domainLog(val, "354 * 875 = " + mulValues(354, 875));
  domainLog(val, "9876.543 * 765.123 = " + mulValues(9876.543, 765.123));
  domainLog(val, "1 = " + mulValues(1));
  domainLog(val, "1 * 2 * 3 = " + mulValues(1, 2, 3));
  domainLog(val, "Multiplying a value by undefined makes it become NaN");
  domainLog(
    val,
    "Extra parameters are dropped. This can be countered using ..."
  );
  domainLog(
    val,
    "undefined is where a variable is initialised but not assigned to."
  );
  domainLog(
    val,
    "NaN is a number that contains no numeric information (i.e. string assignment)"
  );
}

function mulValues(a, b) {
  return a * b;
}

function questionTwo(val) {
  domainLog(val, `countChar("l", "hello"): ` + countChar("l", "hello"));
}

function countChar(c, s) {
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    const element = s.charAt(i);
    if (element.toUpperCase() == c.toUpperCase()) {
      counter++;
    }
  }
  return counter;
}

function questionThree(val) {
  domainLog(
    val,
    'countStr("cream", "I scream, you scream, we all scream for icecream!"): ' +
      countStr("cream", "I scream, you scream, we all scream for icecream!")
  );

  domainLog(
    val,
    `countStr("sea", "She sells sea shells on the sea shore. The shells that she sells are sea shells I'm sure. So if she sells sea shells on the sea shore, I'm sure that the shells are sea shore shells"): ` +
      countStr(
        "sea",
        "She sells sea shells on the sea shore. The shells that she sells are sea shells I'm sure. So if she sells sea shells on the sea shore, I'm sure that the shells are sea shore shells"
      )
  );
}

function countStr(val, str) {
  let tempString = str;
  let counter = 0;

  while (true) {
    firstPos = tempString.indexOf(val);

    if (firstPos != -1) {
      tempString = tempString.substring(firstPos + val.length);
      counter++;
    } else {
      break;
    }
  }

  return counter;
}

function questionFour(val) {
  domainLog(
    val,
    `rotate(["Harry", "Sarah", "Oscar", "Tina"], 2): ` +
      rotate(["Harry", "Sarah", "Oscar", "Tina"], 2)
  );
}

function rotate(arr, num) {
  for (let i = 0; i < num; i++) {
    tempVal = arr.pop();
    arr.unshift(tempVal);
  }

  return arr;
}

function questionFive(val) {
  let arr = [12, 9, 33, 8, 71, 2, 41, 5];
  domainLog(val, "doing a calculation (alphabetical)");
  domainLog(
    val,
    "temp value = " +
      (function () {
        return arr.sort();
      })()
  );

  domainLog(val, "doing a calculation (numerical)");
  domainLog(
    val,
    "temp value = " +
      (function () {
        return arr.sort(function (a, b) {
          return a - b;
        });
      })()
  );

  domainLog(val, "doing a calculation (reverse numerical)");
  domainLog(
    val,
    "temp value = " +
      (function () {
        return arr
          .sort(function (a, b) {
            return a - b;
          })
          .reverse();
      })()
  );
}

function domainLog(destination, string) {
  console.log(string);
  document.getElementById("out-" + destination).innerHTML += string + `\n`;
}
