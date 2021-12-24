function main(val) {
  switch (val) {
    case 1:
      var a = 5;
      domainLog(`out-${val}`, `a = ${a}`);
      var b = 3;
      domainLog(`out-${val}`, `b = ${b}`);
      domainLog(`out-${val}`, `a * b = ${a * b}`);
      break;

    case 2:
      var s1 = "Hello";
      var s2 = "Charlotte";

      domainLog(`out-${val}`, "(s1 + s2):");
      domainLog(`out-${val}`, s1 + s2);

      domainLog(`out-${val}`, '(s1 + " " + s2):');
      domainLog(`out-${val}`, s1 + " " + s2);

      break;

    case 3:
      var a = 5;
      domainLog(`out-${val}`, '(a + " squared is " + a * a):');
      domainLog(`out-${val}`, a + " squared is " + a * a);
      break;

    default:
      break;
  }
}

function domainLog(destination, string) {
  console.log(string);
  document.getElementById(destination).innerHTML += string + `\n`;
}
