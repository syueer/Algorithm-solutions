function groupAnagrams(strs: string[]): string[][] {
  let obj: Record<string, string[]> = {};
  for (let i = 0; i < strs.length; i++) {
    let key: string = strs[i].split('').sort().join('');
    if (key in obj) {
      obj[key].push(strs[i]);
    } else {
      obj[key] = [strs[i]];
    }
  }
  let result: string[][] = Object.values(obj);
  return result;
}
