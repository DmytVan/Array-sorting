function arrSortBubble(arr) {
    let temp;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
}

function arrSortInsertion(arr) {
    let temp;
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            } else {
                break;
            }
        }
    }
}


function arrSortMerge(arr) {

    function merge(arr) {
        if (arr.length < 2) {
            return arr
        }

        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);

        return sort(merge(left), merge(right));
    }

    function sort(left, right) {
        const res = [];
        let indexLeft = 0, indexRight = 0;

        while (indexLeft < left.length && indexRight < right.length){
            if (left[indexLeft] < right[indexRight]){
                res.push(left[indexLeft]);
                indexLeft++;
            } else {
                res.push(right[indexRight]);
                indexRight++;
            }
        }

        if (left.length > indexLeft) {
            return [...res, ...left.slice(indexLeft)]
        } else if (right.length > indexRight) {
            return [...res, ...right.slice(indexRight)]
        }

        return res;
    }

    return merge(arr)
}