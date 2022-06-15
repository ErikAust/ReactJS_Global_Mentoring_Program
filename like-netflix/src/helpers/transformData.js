export const transform = (data) => {
    const array = [];
    for (let item in data) {
        array.push(data[item]);
    }
    return array;
}