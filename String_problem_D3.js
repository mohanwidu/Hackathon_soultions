/*
 * Complete the 'wordInput' function below.
 *
 * The function accepts STRING_ARRAY values as parameter.
 */

function wordInput(inputValues) {
    
    // console.log("Program flow helper prints:");
    // console.log("------------------------------------------")
    //variables declaration;
    var vowelCountArr = new Array;
    var vowelStringArr = new Array;
    var consonantStringArr = new Array;
    var letterCountArr = new Array;
    var shortStringArr = new Array;
    var longStringArr = new Array;
    var shortStringTempArr = new Array;
    
    //iterate inside input array;
    for (var strings in inputValues) {
        
        var nonAlphabetPresent = new Boolean(false);
        var duplicatePresent = new Boolean(false);
        //print input;
        // console.log("input: ", inputValues[strings]);
        
        //check duplicate and eliminate processing same;
        for (var count = strings - 1; count >= 0; count-- ) {
            if ((inputValues[strings] == inputValues[count])) {
                duplicatePresent = true;
            }
        };
        
            if (duplicatePresent == false) 
            {
                //check any non alphabetic character presence and elimiate processing same;
                for (var j=0; j < inputValues[strings].length; j++){
                    // console.log("inp", nonAlphabetPresent.toString());
                    if ((inputValues[strings].charCodeAt(j) >= 65 && 
                        inputValues[strings].charCodeAt(j) <= 90) ||
                        (inputValues[strings].charCodeAt(j) >= 97 && 
                        inputValues[strings].charCodeAt(j) <= 122)) {
                        continue
                    }
                    nonAlphabetPresent = true;
                    
                }
                
                //treat empty / blank as error inputs;
                if (((inputValues[strings].length) == 0) || (inputValues[strings] == null)) {
                    nonAlphabetPresent = true;
                }
                
                if (nonAlphabetPresent == false) {
                    // build vowel count array - it will have the counts of vowels of respective inputs at same index place.
                    // this array helps to categorize 3 & 4 in the output requirement; 
                    // build letter count array - it will have the counts of alphabets of respective inputs at same index place.
                    // this array helps to categorize 1 & 2 in the output requirement;

                    //convert to lowercase of the input to make sure below vowel comparison works;
                    let currentInput = inputValues[strings].toLowerCase();
                    var vowelCount = 0;
                    for (var i=0; i < currentInput.length; i++) {
                        if ( currentInput[i] == 'a' || 
                             currentInput[i] == 'e' ||  
                             currentInput[i] == 'i' ||  
                             currentInput[i] == 'o' ||
                             currentInput[i] == 'u' ) 
                            {
                             vowelCount = vowelCount + 1;
                            }
                        }
                    vowelCountArr.push(vowelCount);
                    letterCountArr.push(currentInput.length);
                }
                else {
                    // print nonAlphabets
                    // console.log("'",inputValues[strings],"'", "Record igored: Non Alphabetic string presnt")
                    // insert dummy entry in counter arrays for duplicates, just to maintain the index position;
                    vowelCountArr.push(-1);
                    letterCountArr.push(-1);
                }
            }
            else {
                // print duplicate
                // console.log("'",inputValues[strings],"'", "Record ignored: Duplicate Input")
                // insert dummy entry in counter arrays for duplicates, just to maintain the index position;
                vowelCountArr.push(-1);
                letterCountArr.push(-1);
                
                }
     }
//         console.log("Array built with vowel counts:", vowelCountArr);
//         console.log("Max value in vowel array:", Math.max(...vowelCountArr));
//         console.log("Array built with letter counts:", letterCountArr);
//         console.log("Min value in letter array:", Math.min(...letterCountArr));
    
    //iterate thru vowel count array to categorize Vowel & consonants strings;
    for (var value in vowelCountArr) {
        if (vowelCountArr[value] == (Math.max(...vowelCountArr))) {
            vowelStringArr.push(inputValues[value])
        }
        if (vowelCountArr[value] == 0) {
            consonantStringArr.push(inputValues[value])
        }
        
    }
    // console.log("Array built for Vowel category:", vowelStringArr);
    // console.log("Array built for Consonants category:",consonantStringArr);
    
    //remove dummy inserts(-1) to visualise the shortest;
    for (var value in letterCountArr ) {
        if (letterCountArr[value] != -1) {
         shortStringTempArr.push(letterCountArr[value]) }
         }
    //iterate letter count helper array to categorize Longer & shorter strings;
    for (var value in letterCountArr) {
        if (letterCountArr[value] == (Math.max(...letterCountArr))) {
            longStringArr.push(inputValues[value])
        }
        if (letterCountArr[value] == (Math.min(...shortStringTempArr))) {
            shortStringArr.push(inputValues[value])
        }
    }
    
//     console.log("Array built for Long category:",longStringArr);
//     console.log("Array built for Short category:",shortStringArr);
//     console.log("Array built for Short category after removing dummy(-1):",shortStringTempArr);
    
//     console.log("--------------------------------------------");
//     console.log("Final Output:");
//     console.log("--------------------------------------------");
//     console.log("1. Shortest words: ", String(shortStringArr));
//     console.log("2. Longest  words: ", String(longStringArr));
//     console.log("3. Consonant only words: ", String(consonantStringArr));
//     console.log("4. Most Vowel words: ",String(vowelStringArr));
//     console.log("--------------------------------------------");
    console.log(String(shortStringArr));
    console.log(String(longStringArr));
    console.log(String(consonantStringArr));
    console.log(String(vowelStringArr));

    
}
 
