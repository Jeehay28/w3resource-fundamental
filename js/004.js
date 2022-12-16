// [004] Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array of objects. The first row of the string is used as the title row.

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

console.log(csvToObj('col1,col2\na,b\nc,d'))
console.log(csvToObj('col1;col2\na;b\nc;d', ";"))
