/* Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
*/

const canConstruct = (ransomNote, magazine) => {
  const cache = {};
  for (const letter of magazine) {
    cache[letter] = cache[letter] + 1 || 1;
  }
  for (let letter of ransomNote) {
    if (!cache[letter]) return false;
    cache[letter]--;
  }
  return true;
};

console.log(canConstruct("a", "b"), "false");
console.log(canConstruct("aa", "ab"), "false");
console.log(canConstruct("aa", "aab"), "true");
