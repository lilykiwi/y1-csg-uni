function main(val) {
  switch (val) {
    case 1:
      var str = "I'm learning JavaScript in my web development module.";
      domainLog(`out-${val}`, `str = "${str}"`);
      domainLog(`out-${val}`, `str is ${str.length} characters long`);

      domainLog(
        `out-${val}`,
        `"JavaScript" starts at ${str.indexOf("JavaScript")}`
      );

      var counter = 0;
      for (const char in str) {
        if (Object.hasOwnProperty.call(str, char)) {
          const element = str[char];
          if (element == "e" || element == "E") {
            counter += 1;
          }
        }
      }
      domainLog(`out-${val}`, `str has ${counter} e's`);

      var last = 0;
      while (last < str.length) {
        last = str.indexOf("m", last) + 1;
        domainLog(`out-${val}`, `m at ${last}`);
        if (str.indexOf("m", last) == -1) {
          break;
        }
      }

      var newString = "";
      for (let i = str.length; i >= 0; i--) {
        newString += str.charAt(i);
      }
      domainLog(`out-${val}`, `${newString}`);

      break;

    case 2:
      var url = window.location.href;
      domainLog(`out-${val}`, `${url}`);

      if (url.startsWith("http:")) {
        domainLog(
          `out-${val}`,
          `url.startsWith("http:") is true: you're insecure`
        );
      }

      if (url.startsWith("https:")) {
        domainLog(
          `out-${val}`,
          `url.startsWith("https:") is true: good security`
        );
      }

      if (url.startsWith("file:")) {
        domainLog(
          `out-${val}`,
          `url.startsWith("file:") is true: you downloaded the site!`
        );
      }

      break;

    default:
      break;
  }
}

function domainLog(destination, string) {
  console.log(string);
  document.getElementById(destination).innerHTML += string + `\n`;
}
