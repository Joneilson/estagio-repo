function fibonacciSequence (n){
    let fibSeq = [0, 1];

    while (fibSeq[fibSeq.length - 1] < n){
        let nextValue = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length -2];
        fibSeq.push(nextValue);
    }

    return fibSeq;

}
function checkFib(n){
    let fiboSq = fibonacciSequence(n);
    if (fiboSq.includes(n)){
        console.log(`${n} pertence à sequência Fibonacci!`);
    } else{
        console.log(`${n} não pertence a sequência Fibonacci!`);
    }
}

let number = 55;
let number2 = 9;
checkFib(number);
checkFib(number2);