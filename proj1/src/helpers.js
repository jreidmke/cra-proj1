const Choice = (arr) => {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

const Remove = (arr, item) => {
    if(item in arr) {
        let idx = arr.indexOf(item);
        arr = arr.splice(idx, 1);
        return arr;
    }
    return undefined;
}