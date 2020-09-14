const find_permutation = function (str, pattern) {
  let patternObj = {};
  for (let char of pattern) {
    if (char in patternObj) {
      patternObj[char] += 1;
    } else {
      patternObj[char] = 1;
    }
  }

  const cloneObj = { ...patternObj };

  let count = pattern.length;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const character = str[windowEnd];
    if (pattern.includes(character) && patternObj[character] > 0) {
      count--;
      patternObj[character]--;
      if (count === 0) {
        return true;
      }
    } else {
      count = pattern.length;
      for (let key in patternObj) {
        patternObj[key] = cloneObj[key];
      }

      if (pattern.includes(character)) {
        count--;
        patternObj[character]--;
      }
    }
  }
  return false;
};

console.log(find_permutation("oidbcaf", "abc"));
