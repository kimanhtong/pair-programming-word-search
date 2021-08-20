const wordSearch = (letters, word) => {
    if (letters.length === 0) return false;
    if (word.length === 0) return false;
    let rowLength = letters.length;
    let colLength = letters[0].length;

    const wordExist = (words, word) => {
        for (w of words) {
            if (w.includes(word)) return true
        }
        return false;
    }

    // 1. horizontal: left to right
    let tempWords = [].concat(letters.map(ls => ls.join('')));
    //console.log(tempWords)
    if (wordExist(tempWords, word)) return true;
    
    // 2. horizontal: right to left
    tempWords = [];
    for (let r = 0; r < rowLength; r++) {
        let tempWord = '';
        for (let c = colLength - 1; c >= 0; c--) {
            tempWord = tempWord + letters[r][c];
        }
        tempWords.push(tempWord);
    }
    //console.log(tempWords)
    if (wordExist(tempWords, word)) return true;

    // 3. vertical: top to bottom   
    tempWords = [];             // reset tempWords
    for (let c = 0; c < colLength; c++) {
        let tempWord = '';
        for (let r = 0; r < rowLength; r++) {
            tempWord = tempWord + letters[r][c];
        }
        if (tempWord !== '') {
            tempWords.push(tempWord);
        }
    }
    //console.log(tempWords)
    if (wordExist(tempWords, word)) return true;

    // 4. vertical: bottom to top   
    tempWords = [];           // reset tempWords
    for (let c = 0; c < colLength; c++) {
        tempWord = '';
        for (let r = rowLength - 1; r >= 0 ; r--) {
            tempWord = tempWord + letters[r][c];
        }
        tempWords.push(tempWord);
    }
    //console.log(tempWords)
    if (wordExist(tempWords, word)) return true;

    // 5. Diagonal - top left first, then right to left
    let sumLength = rowLength + colLength;
    tempWords = [];                                         // reset tempWords
    for (let sumrc = 0; sumrc < sumLength; sumrc ++) {          
        let tempWord = '';
        for (let r = 0; r < rowLength; r ++) {
            let c = sumrc - r;
            if (c < 0) {
                break;
            }
            if (c >= colLength) {
                continue;
            }
            tempWord = tempWord + letters[r][c];
        }
        tempWords.push(tempWord);
    }
    //console.log(tempWords)
    if (wordExist(tempWords, word)) return true;

    // 6. Diagonal - top left first, then left to right
    tempWords = [];                                          // reset tempWords
    for (let sumrc = 0; sumrc < sumLength; sumrc ++) {          
        let tempWord = '';
        for (let r = rowLength - 1; r >= 0; r --) {
            let c = sumrc - r;
            if (c < 0) {
                continue;
            }
            if (c >= colLength) {
                break;
            }
            tempWord = tempWord + letters[r][c];
        }
        tempWords.push(tempWord);
    }
    //console.log(tempWords)
    if (wordExist(tempWords, word)) return true;

    // 7. Diagonal - top left to bottom right
    tempWords = [];
    for (let difrc = - colLength + 1; difrc <= rowLength - 1; difrc ++) { 
        let tempWord = '';      // reset tempWords
        for (let r = 0; r < rowLength; r ++) { 
            let c = r - difrc;
            if (c < 0 || c >= colLength) {
                continue;
            }
            tempWord = tempWord + letters[r][c];
        }
        tempWords.push(tempWord);  
    }
    //console.log(tempWords)
    if (wordExist(tempWords, word)) return true;

    // 8. Diagonal - bottom right to top left
    tempWords = [];
    for (let difrc = - colLength + 1; difrc <= rowLength - 1; difrc ++) { 
        let tempWord = '';      // reset tempWords
        for (let r = rowLength - 1; r >= 0 ; r --) { 
            let c = r - difrc;
            if (c < 0 || c >= colLength) {
                continue;
            }
            tempWord = tempWord + letters[r][c];
        }
        tempWords.push(tempWord);  
    }
    //console.log(tempWords);
    if (wordExist(tempWords, word)) return true;

    return false;
}

module.exports = wordSearch