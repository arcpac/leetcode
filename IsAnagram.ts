function isAnagram(string1: string, string2: string) {
  const string1Map: Record<string, number> = {};
  const string2Map: Record<string, number> = {};

  console.log(string1);
  console.log(string2);

  for (const char of string1) string1Map[char] = (string1Map[char] || 0) + 1;
  for (const char of string2) string2Map[char] = (string2Map[char] || 0) + 1;

  console.log(string1Map);
  console.log(string2Map);

  const string1Array = Object.keys(string1Map);
  const string2Array = Object.keys(string2Map);

  // array with distinct characters
  console.log(string1Array);
  console.log(string2Array);

  console.log(string1Array.length);
  console.log(string2Array.length);
  if (string1Array.length === string2Array.length) {
    for (let index = 0; index < string1Array.length; index++) {
      const string1Char = string1Array[index];
      const string2Char = string2Array[index];

      const string1Value = string1Map[string1Char];
      const string2Value = string2Map[string1Char];
      console.log(string1Value);
      console.log(string2Value);
      if (string1Value !== string2Value) {
        return false;
      }
    }
    return true;
  } else {
    console.log("not anagram");
    return false;
  }
}

const result = isAnagram("dustyz", "studye");
console.log(result);
