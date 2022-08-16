cars([2,4,9,3,5]);

function cars(numbers) {
    let rucalt = [];

    for(let num of numbers) {
        if (Math.sqrt(num) % 1 === 0) {
            rucalt.push(Math.sqrt(num));
        }
        else {
            rucalt.push(num*num);
        }
    }
    return console.log(rucalt);
}