// Fib iteration:
function iterateFibonacci(n) {
    let arr = [0, 1];

    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }

    return arr;
}

// Fib recursion:
function recursiveFibonacci(n) {
    if (n <= 2) {
        return n-1;
    } else {
        return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
    }
}

// Merge Sort Recursion
const mergeSortRec = (arr) => {
	if (arr.length === 0) return "Please provide a non empty array!"
	if (arr.length === 1) return arr;

	const mid = Math.floor(arr.length / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid, arr.length);

	return merge2(mergeSortRec(left), mergeSortRec(right));
};

const merge1 = (left, right) => {
    let sorted = [];

    let i = 0; 
    let j = 0; 

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sorted.push(left[i])
            i++
        } else if (left[i] > right[j]) {
            sorted.push(right[j])
            j++
        }
    }

    while (i < left.length) {
		sorted.push(left[i]);
		i++;
	}

	while (j < right.length) {
		sorted.push(right[j]);
		j++;
	}

    return sorted
}

// custom method
const merge2 = (left, right) => {
    let sorted = [];

    let i = 0; 
    let j = 0; 
    let k = i + j;

    while (k < left.length + right.length) {
        if (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                sorted[k] = left[i]
                i++
            } else if (left[i] > right[j]) {
                sorted[k] = right[j]
                j++
            }
        } else if (i < left.length) {
            sorted[k] = left[i]
            i++
            k++
        } else if (j < right.length) {
            sorted[k] = right[j]
            j++
        }
        k++
    }

    return sorted
}