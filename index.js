

function writeCards(names, eventName) {
    let msgArray = [];
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        msgArray.push(message);
    };
    return msgArray
};

function countDown(int) {
    for (let i = int; i >= 0; i--) {
        console.log(i);
    }
}
