export const teens = {
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen"
}

export const singles = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    20: "Twenty",
    30: "Thirty",
    40: "Fourty",
    50: "Fifty",
    60: "Sixty",
    70: "Seventy",
    80: "Eighty",
    90: "Ninety"
}

//check if tens place digit is a one, if so it's a teen
export function checkIsTeens(num) {
    let tens = String(num)[0];
    let ones = String(num)[1];

    if(tens == 1) {
        return teens[num]
    }
    return covertTwoDigitsToNonTeensAsText(num);
}


export function convertToHundredAsText(num) {
    let numToString  = String(num);
    let toText = singles[numToString[0]];
    if(!String(num).length === 3){
        return false
    }
    return `${toText} Hundred`;
}

export function covertTwoDigitsToNonTeensAsText(num) {
    if(!String(num).length == 2) {
        return false
    } else {
        let ones = String(num)[1];
        let tens = String(num)[0] + "0";

        return `${singles[tens]} ${singles[ones]}`
    }
}

//Based on the number of digits, you can use the helper functions above to process the number.
//You should be able to extend this to  thousands, millions, billions by adding cases below and composing
//what's already here.
export function convertToText(num) {
    switch(String(num).length) {
    
        case 1: {
            return singles[num];
        }
        case 2: {
            let lastTwo = String(num).slice(-2);
            return checkIsTeens(lastTwo);
        }
        case 3: {
            let lastTwo = String(num).slice(-2);
            let hundred = String(num).slice(-3, 1);

            let hundreadsPlace = convertToHundredAsText(hundred);
            let tensPlace = checkIsTeens(lastTwo);

            return `${hundreadsPlace} ${tensPlace}`

        }
        default: {
            return 'VOID'
        }
    }

    
}


