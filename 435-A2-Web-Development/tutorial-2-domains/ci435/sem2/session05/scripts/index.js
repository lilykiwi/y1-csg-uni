function main(val) {
  switch (val) {
    case 1:
      one(val);
      break;
    case 2:
      two(val);
      break;
    default:
      break;
  }
}

function one(val) {
  let friends = ["Benjamin", "Lily", "Emily", "Gabriel"];
  domainLog(val, "Initial array state:");
  domainLog(val, friends);

  // add Isabella and Charlotte
  friends.push("Isabella");
  friends.push("Charlotte");
  domainLog(val, "1) Pushed Isabella and Charlotte");
  domainLog(val, friends);

  // change last element to Miles
  friends[friends.length - 1] = "Miles";
  domainLog(val, "2) Changed last element to Miles");
  domainLog(val, friends);

  // splice array to replace 2nd and third index with Aria
  friends.splice(1, 2, "Aria");
  domainLog(val, "3) Spliced string at 1, by 2, replaced with Aria");
  domainLog(val, friends);

  // pop() last element and insert it at the beginning with unshift()
  let tempFriend = friends.pop();
  friends.unshift(tempFriend);
  domainLog(val, "4) pop() array and unshift() the return value");
  domainLog(val, friends);

  // reverse the process, use shift() to remove the first element and
  // push to add it to the end
  tempFriend = friends.shift();
  friends.push(tempFriend);
  domainLog(val, "5) shift() array and push() the return value");
  domainLog(val, friends);

  // using indexOf() find index of Aria
  let index = friends.indexOf("Aria");
  domainLog(val, "6) indexOf(Aria);");
  domainLog(val, index);

  // using indexOf log true to console if Bob is present, false otherwise.
  // Do this in a single line.
  domainLog(val, 'friends.indexOf("Bob") == null:');
  domainLog(val, friends.indexOf("Bob") == null);

  // sort() to sort alphabetically
  friends.sort();
  domainLog(val, "friends.sort():");
  domainLog(val, friends);

  // concat all strings with ", " using join()
  domainLog(val, 'join all strings with ", "');
  domainLog(val, friends.join(", "));
}

function two(val) {
  let count = 0;
  let friends = ["Aria", "Benjamin", "Gabriel", "Isabella", "Miles"];

  friends.forEach((element) => {
    count += element.length;
  });
  domainLog(val, "The variable friends has:");
  domainLog(val, friends.length + " names");
  domainLog(val, count + " characters total");
  domainLog(val, count / friends.length + " average characters per name");
}

function domainLog(destination, string) {
  console.log(string);
  document.getElementById("out-" + destination).innerHTML += string + `\n`;
}
