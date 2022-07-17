function sumAll(intOne, intTwo){
    let fullSum = 0;

    while (intOne < intTwo + 1) {
        fullSum += intOne;
        intOne++;
    }
    console.log(fullSum);
}

// Input lowest and highest INTs too add all the numbers(also in-between)
sumAll(1, 4);