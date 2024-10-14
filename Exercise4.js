// Fauzi Maulana Alam

function arrSum(arr) {
    let total = arr[0];
    let tempTotal = arr[0];
    let start = 0;
    let end = 0;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > tempTotal + arr[i]){
            tempTotal = arr[i];
            start = i;
        } else {
            tempTotal += arr[i];
        }

        if (tempTotal > total){
            total = tempTotal;
            end = i;
        }
    }
    return [arr.slice(start, end + 1), total]
}

console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3])) // [ [ 4, -1, -2, 1, 5 ], 7 ]