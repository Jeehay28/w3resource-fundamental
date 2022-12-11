// [001] Compare two objects to determine if the first one contains equivalent property values to the second one.

function compareTwo(obj1, obj2) {
    return Object.keys(obj1).every(key => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
}

// compareTwo({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true });
console.log(compareTwo({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }));
console.log(compareTwo({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }));
console.log(compareTwo({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true }));
