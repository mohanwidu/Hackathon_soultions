
function minOperations(n) {
    var validInput = Boolean(false);
    if ((1 <= n) && (n <= (Math.pow(10,15)))) {  //Check input constraint;
        validInput = true;
    }
    
    if (validInput == true) {
        var binInput = n;       
        var oprCount = 0; 
        var outArray = new Array; 
        do {    
            oprCount = rule1(binInput);   // Apply rule1; Convert last bit using XOR; 
            outArray.push(binInput);
            if (binInput > 0) {
                // Apply rule2; Change the ith bit, if i+1 th bit is 1 & i+2th bit onwards zeroes till end; 
                oprCount = rule2(binInput); 
                outArray.push(binInput);
            }
        } while (binInput > 0);    
    }
    else {
        console.log("Sorry! Input is out of range. ")
    };
    
    function rule1(rule1inp){
        binInput = dec2bin(rule1inp);  // Convert decimal to binary;
        binInput = rule1inp ^ 1;       // XOR with 1 will invert the last bit;
        return oprCount + 1;           // Increment the operations count by 1;
    };   

    function rule2(rule2inp){
        var rule2inpStr = dec2bin(rule2inp); 
        for (var i=0; i < rule2inpStr.length; i++) {  // iterate thru the binary format of input from left to right.
            if (rule2inpStr[i+1] == 1) {              // check if i+1 th bit is 1;
                var restBitsZeroes = Boolean(true); 
                for (var j = i+2; j < rule2inpStr.length; j++) {
                    if (rule2inpStr[j] != "0") {
                        restBitsZeroes = false;       // flag that rest of the bits are not zeroes ,from I+2 th position;
                        break;
                    }  
                }
                if ((restBitsZeroes == true)){                
                // length - i -1, to get the poistion of the binary,from right to left; 
                  binInput = invBit(rule2inp, rule2inpStr.length - i - 1);
                  oprCount = oprCount + 1 ; 
                  break;
               }
            }          
        }
        return oprCount;
    };
    
    function invBit(binNum, position) {  // function to invert any bit by providing the poistion & number; using XOR;
        var binMask = 1 << position;
        return binNum ^ binMask;
    };
    
    function dec2bin(inp) {             // function to convert decimal to binary;
        return (inp >>> 0).toString(2)
    };
    
    
    var minOpr = (outArray.length - (outArray.lastIndexOf(n) + 1));
    console.log(outArray);
    if (minOpr < oprCount) {
        return minOpr                   // counter for the decimal output array from the last poisiton of the input; 
    } else {
    return oprCount;                    // counter for tracking the number of operations done to return as output; 
    }
}