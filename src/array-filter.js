export function fiveAndGreaterOnly(arr) {
    return arr.filter((number) => number >= 5);
  }
  
export function evensOnly(arr) {
    return arr.filter(number => number % 2 === 0);
    
};

export function fiveCharactersOrFewerOnly(arr) {
  return arr.filter(word => {
      return word.length <= 5;
  });

}

export function peopleWhoBelongToTheIlluminati(arr) {
    return arr.filter(illuminatus => {
        return illuminatus.member === true;
    });
};

export function ofAge(arr) {
    return arr.filter(name => {
        return name.age >= 18;
        
    });
}