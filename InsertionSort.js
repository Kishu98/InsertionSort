let values = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    values = new Array(floor(width / 15));
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height / 2);
    }
    insertionSort(values, 0, values.length);
}

async function insertionSort(arr, start, end) {
    for (let i = 0; i < end; i++) {
        for (let j = i - 1; j > 0; j--) {
            if (arr[j] > arr[j + 1]) {
                await swap(arr, j, j + 1);
            }
        }
    }
}

async function swap(arr, pos1, pos2) {
    await sleep(50);
    let tmp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = tmp;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function draw() {
    background(51);
    for (let i = 0; i < values.length; i++) {
        noStroke();
        rect(i * 15, (height / 1.5) - values[i], 10, values[i])
    }
}