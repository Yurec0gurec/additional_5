module.exports = function check(str, bracketsConfig) {
  var leng = bracketsConfig.length;
  var pair = str.length * 0.5;
  for (var i = 0; i < pair; i++) {
      for (var b = 0; b < str.length; b++) {
          for (var k = 0; k < leng; k++) {
              if (str[b] === bracketsConfig[k][0] && str[b + 1] === bracketsConfig[k][1]) {
                  var helpArr = [];
                  for (var j = 0; j < str.length; j++) {
                      if(j === b || j === b + 1) continue;
                     helpArr.push(str[j]);
                  }
                  str = helpArr;
              }
          }
      }
  }

  if (str.length === 0) return true;

  else return false;
}

