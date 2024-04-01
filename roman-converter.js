function roman_to_decimal(romanNumeral) {
 
  const digits = {
      I: 1,
      X: 10,
      C: 100,
      M: 1000,
      V: 5,
      L: 50,
      D: 500,
  };

  let result = 0;
  for (let i=0;i< romanNumeral.length; ++i) {
      let ch=romanNumeral[i];
      let nextCh =romanNumeral[i+1];
      if(typeof digits[nextCh]=== 'undefined' || digits[ch]>=digits[nextCh]){
      result += digits[ch];
      }else if (digits[ch]<digits[nextCh]){
        result-=digits[ch];
      }
  }

  return result;
}

module.exports = roman_to_decimal;