function getTestTime(fn, ...arg) {
    const t0 = performance.now();
    fn.apply(null, arg);
    const t1 = performance.now();
    return t1 - t0;
}


function getRandomArr(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.random()*100);
    }

    return arr;
}

function testArraySort(arrLength) {

    const arr = getRandomArr(arrLength);
    const bubbleTime = getTestTime(arrSortBubble, [...arr]);
    const insertionTime = getTestTime(arrSortInsertion, [...arr]);
    const mergeTime = getTestTime(arrSortMerge, [...arr]);

    console.log(`Bubble: ${bubbleTime} ms`);
    console.log(`Insertion: ${insertionTime} ms`);
    console.log(`Merge: ${mergeTime} ms`);
}