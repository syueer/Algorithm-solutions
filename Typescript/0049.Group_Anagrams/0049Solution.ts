function groupAnagrams(strs: string[]): string[][] {
  let obj: Record<string, string[]> = {};
  for (let i = 0; i < strs.length; i++) {
    let key: string = strs[i].split('').sort().join('');
    console.log(typeof key);
    if (obj === {} || !obj[key]) {
      obj[key] = [strs[i]];
    } else {
      obj[key].push(strs[i]);
    }
  }
  let result: string[][] = Object.values(obj);
  return result;
}
