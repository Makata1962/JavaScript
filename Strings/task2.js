
function reverseCase(sentence) {
    if (typeof sentence !== 'string') {
        throw new TypeError('Parameter should be a string')
    }
    if(sentence === "") {
        console.log(`""`)
        return sentence
    }
    var arr = [];
    for (let i = 0; i < sentence.length; i++) {
        if (sentence.charAt(i) === sentence.charAt(i).toUpperCase()) {
            var changedCharacter = sentence.charAt(i).toLowerCase();
            arr.push(changedCharacter);
        } else {
            changedCharacter = sentence.charAt(i).toUpperCase();
            arr.push(changedCharacter)
        }
    }
    var newArr = arr.join('')
    console.log(newArr)
    return arr;
}




reverseCase("Hello theRe");
reverseCase("BIG LETTERS");
reverseCase("")
// reverseCase(1);