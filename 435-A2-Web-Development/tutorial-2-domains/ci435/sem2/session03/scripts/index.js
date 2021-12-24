function domainLog(destination, string) {
  console.log(string);
  document.getElementById(destination).innerHTML += string + `\n`;
}

function main(val) {
  switch (val) {
    case 1:
      domainLog(`out-${val}`, `(1 == true):`);
      domainLog(`out-${val}`, 1 == true);

      domainLog(`out-${val}`, `(1 === true):`);
      domainLog(`out-${val}`, 1 === true);

      break;
    case 2:
      var x = 3;
      var y = 5;
      domainLog(`out-${val}`, `x <= y: ${x <= y}`);
      domainLog(`out-${val}`, `x > 4 && y > 4: ${x > 4 && y > 4}`);
      domainLog(`out-${val}`, `x > 4 || y > 4: ${x > 4 || y > 4}`);
      domainLog(`out-${val}`, `!(x > 4 || y > 4): ${!(x > 4 || y > 4)}`);
      domainLog(`out-${val}`, `x != y && y > 0: ${x != y && y > 0}`);
      domainLog(`out-${val}`, `x * y < 15: ${x * y < 15}`);
      domainLog(`out-${val}`, `x * y <= 15: ${x * y <= 15}`);
      break;
    case 3:
      var x = 3;
      var y = 5;
      domainLog(`out-${val}`, `if (${x} > ${y}):`);
      if (x > y) {
        domainLog(`out-${val}`, `x is greater than y`);
      } else {
        domainLog(`out-${val}`, `x is less than or equal to y`);
      }
      break;

    case 4:
      var x = 3;
      var y = 5;
      if (x > y) {
        domainLog(`out-${val}`, `${x} / ${y} = ${x / y}`);
      } else {
        domainLog(`out-${val}`, `no output, as ${x} <= ${y} == true`);
      }
      break;

    case 5:
      var x = 3;
      var y = 5;

      while (y < 100) {
        y += x;
      }
      domainLog(`out-${val}`, `while (y < 100) { y += x; }`);
      domainLog(`out-${val}`, `${y}`);
      break;

    case 6:
      var x = 3;
      var y = 5;

      while (y < 100) {
        y += x;
      }

      for (let i = 0; i < y; i++) {
        domainLog(`out-${val}`, `Hello ${i}`);
      }
      break;

    case 7:
      var dayNames = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
      var day = Math.floor(Math.random() * 7);
      domainLog(`out-${val}`, `using array index: ${dayNames[day]}`);

      switch (day) {
        case 0:
          domainLog(`out-${val}`, `using switch: Monday`);
          break;
        case 1:
          domainLog(`out-${val}`, `using switch: Tuesday`);
          break;
        case 2:
          domainLog(`out-${val}`, `using switch: Wednesday`);
          break;
        case 3:
          domainLog(`out-${val}`, `using switch: Thursday`);
          break;
        case 4:
          domainLog(`out-${val}`, `using switch: Friday`);
          break;
        case 5:
          domainLog(`out-${val}`, `using switch: Saturday`);
          break;
        case 6:
          domainLog(`out-${val}`, `using switch: Sunday`);
          break;
        default:
          break;
      }
      break;

    default:
      break;
  }
}
