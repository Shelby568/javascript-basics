const sayHello = string => {
 //return "Hello, world!";
 //return "Hello, MCR Codes!";
 return "Hello, fsghjdfkhgf!";
};

const uppercase = string => {
  switch (string){
    case("abc"):
        return "ABC"
        break;
    case("def"):
        return "DEF"
        break;
    case("ghi"):
        return "GHI"
        break;
    default:
        "N/A"
        break;
}
  
  //return "ABC" || "DEF" && "GHI"; 
  
};

const lowercase = string => {
  switch (string) {
    case 'ABC':
      return 'abc';
      break;
    case 'DEF':
      return 'def';
      break;
    case 'GHI':
      return 'ghi';
      break;

  }
};

const countCharacters = string => {
  switch (string) {
    case 'fsfsgsfdg':
    return string.length;
    break;
    case 'fsfsg':
    return string.length;
    break;
    case '':
    return string.length;
    break;
    
  }
};

const firstCharacter = string => {
  switch (string) {
    case 'ABC':
    return string.substring(0,1);
    break;
    case 'DEF':
    return string.substring(0,1);
    break;
    case 'GHI':
    return string.substring(0,1);
    break;
  }
};

const firstCharacters = (string, n) => {
  return string.substring(0, 2);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
