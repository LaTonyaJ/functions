function isValidPassword(password, username){
    if(password.length < 8){
        return false;
    }
    if(password.indexOf[' '] !== -1){
        return false;
    }
    if(password.indexOf[username] !== -1){
        return false;
    }
    return true;
}

function isValidPassword(password, username){
    if(password.length < 8 && password.indexOf[' '] !== -1 && password.indexOf[username] !== -1){
        return true;
    }
    return false;
}

function avg(x, y){
    let total = x + y;
    return total/2;    
}

function arrayAvg(arr){
    let total= 0;
    for(let num of arr){
        total += num;
    }
    return total/arr.length;
}

function isPangram(sentence){
    let lowerCased = sentence.toLowerCase();
    for(let char of 'abcdefghijklmnopqrstuvwxyz'){
        if(lowerCased.indexOf(char) === -1){
            return false;
        }
    }
    return true;
}

function getCard(){
    let values = ['2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K', 'A'];
    //const valIndex = Math.floor(Math.random() * values.length);
    //const value = values[valIndex];
    // return value;

    let suites = ['club', 'spade', 'diamond', 'heart'];
    //const suiteIndex = Math.floor(Math.random() * suites.length);
    //const suit = suites[suiteIndex];
    const suit = pick(suits);
    const value = pick(values);
    return {Suite:suit, Value:value};
}

function pick(arr){
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
