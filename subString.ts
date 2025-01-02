const repeatedSubstringPattern = (str: string) => {
  console.log(str);
  const concatString = str + str;
  console.log(concatString);
  const modifiedString = concatString.slice(1, -1);
  console.log(modifiedString);
  const hasPattern = modifiedString.includes(str);
  console.log(hasPattern);
  return hasPattern;
};

const string1 = "asdfasdf";

const result = repeatedSubstringPattern(string1);
console.log(result);
