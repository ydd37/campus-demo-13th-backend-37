var num = 10;
var star = "";

for (var i = (num*2) - 1 ; i >= 1; i -= 2) {
  for (var j = 1; j < ((num * 2) - i) / 2; j++) {
    star += " ";
  }
  for (var l = i; l >= 1; l--) {
    star += "*";
  }
  for (var k = 1; k < ((num * 2) - i) / 2; k++) {
    star += " ";
  }
  star += "\n";
}
console.log(star);