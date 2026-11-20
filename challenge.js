// Challenge1

function challenge1(width, height) {
    let rectangleString = '';
    // Your code
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            rectangleString += '* ';
        }
        rectangleString += '\n';
    }
    return rectangleString;
}

console.log(challenge1(3, 4));
console.log(challenge1(5, 2));
console.log(challenge1(5, -2));

// Challenge2
function reverse(arr){
    if(arr.length === 0){
        return "No, Data in array";
    }
    temp = '[';
    for(let i = arr.length - 1; i > 0; i--){
        temp += arr[i] + ", ";
    }
    temp += arr[0] + ']';
    return temp;
}
console.log(reverse([14,15,16,20]));
console.log(reverse([5,4,3,2,1]));
console.log(reverse([]));

// Challenge3
function avg(arr){
    let sum = 0;
    if(arr.length === 0){
        return 0;
    }
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(avg([85, 90, 78, 92]));
console.log(avg([10,20,30]));
console.log(avg([]));

// Challenge4
function count(text, target){
    let count = 0;
    for(let i = 0; i < text.length; i++){
        if(text[i] == target){
            count++;
        }
    }
    return count;
}
console.log(count("hello world", 'o'));
console.log(count("aaa bbb a", 'a'));
console.log(count("abc", 'd'));
// Challenge5
function countWords(text){
    let count = 0;
    for(let i = 0; i < text.length; i++){
        if(text[i] == ' '){
            count++;
        }
    }
    return count + 1;
}
console.log(countWords("hello world"));
console.log(countWords("this is the best day"));
console.log(countWords("a bb ccc ddddddd e"));

// Challenge6
function vote(arr){
    if(arr.length === 0){
        console.log("There is nothing in the array!");
        return;
    }
    let a = 0, b = 0, c = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'A') a++;
        else if(arr[i] === 'B') b++;
        else if(arr[i] === 'C') c++;
    }
    if(a > b && a > c){
        console.log("A is the winner.");
    }else if(a < b && b > c){
        console.log("B is the winner.");
    }else if(c > a &&  c > b){
        console.log("C is the winner.");
    }else if(a === b){
        console.log("A and B are both winners.");
    }else if(a === c){
        console.log("A and C are both winners.");
    }else if(b === c){
        console.log("B and C are both winners.");
    }
}
vote(['A', 'B', 'A', 'C', 'A']);
vote(['A', 'B', 'B', 'C', 'A']);
vote([]);

