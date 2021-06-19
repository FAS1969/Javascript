'use strict'
{
  //Алгоритм КМП (Кнута-Морриса-Пратта)
  function buildPatternTable(word) {
    const patternTable = [0];
    let prefixIndex = 0;
    let suffixIndex = 1;

    while (suffixIndex < word.length) {
      if (word[prefixIndex] === word[suffixIndex]) {
        patternTable[suffixIndex] = prefixIndex + 1;
        suffixIndex += 1;
        prefixIndex += 1;
      } else if (prefixIndex === 0) {
        patternTable[suffixIndex] = 0;
        suffixIndex += 1;
      } else {
        prefixIndex = patternTable[prefixIndex - 1];
      }
    }

    return patternTable;
  }
  console.log(kmp('abbaabbab'));
}
