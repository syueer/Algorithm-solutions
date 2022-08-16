// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

const wordPattern = (pattern: string, s: string): boolean => {
  let hash = {};
  let array = s.split(' ');
  if (pattern.length !== array.length) {
    return false;
  }
  for (let i = 0; i < pattern.length; i++) {
    if (!hash[pattern[i]]) {
      if (Object.values(hash).includes(array[i])) {
        return false;
      }
      hash[pattern[i]] = array[i];
    } else {
      if (hash[pattern[i]] !== array[i]) {
        return false;
      }
    }
  }
  return true;
};
