function writeCards(names, event) {
    let newArray = [];
    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        let msg = `Thank you, ${name}, for the wonderful ${event} gift!`
        newArray.push(msg);
    };
    return newArray;
};

function countDown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i)
    }
}
