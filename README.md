# JavaScript fundamental excercises from [w3resource](https://www.w3resource.com/javascript-exercises/fundamental/index.php#EDITOR)
## This is going to be my daily log for JavaScript coding practice.

📅 16/12/2022
- [003] Converts a comma-separated values string to a 2D array

```
function csvToArr(data, firstRow = false, separator = ",") {
    return data.slice(firstRow ? data.indexOf("\n") + 1 : 0).split("\n").map(x => x.split(separator));
```
- [004] Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array of objects. The first row of the string is used as the title row.
```
function csvToObj(data, delimiter = ',') {
    let keys = data.slice(0, data.indexOf("\n")).split(delimiter);
    let values = data
        .slice(data.indexOf('\n') + 1)
        .split('\n')
        .map(x => x.split(delimiter));

    let arr = []

    for (let i = 0; i < values.length; i++) {
        let obj = new Object();
        keys.forEach((key, index) => {
            obj[key] = values[i][index]
        })
        arr.push(obj)
    }
    return arr;
}
```

<hr>
📅 15/12/2022
- [002] Write a JavaScript program to copy a string to the clipboard

```
const red = document.querySelector("#red").innerText;
const blue = document.querySelector("#blue").innerText;
const btn = document.querySelector(".btn");

const copyContent = async () => {
    try {
        await navigator.clipboard.writeText(red);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.log("failed to copy", err);
    }
}

btn.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(blue);
    }
    catch (err) {
        console.log("failed to copy", err);
    }
})

```
<hr>
📅 12/12/2022
- [001] Compare two objects to determine if the first one contains equivalent property values to the second one.

```
function compareTwo(obj1, obj2) {
    return Object.keys(obj1).every(key => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
}
```

