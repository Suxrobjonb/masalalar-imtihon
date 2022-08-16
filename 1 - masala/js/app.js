reversName("Akhadov Jakhongir");

function reversName(text) {
    let newArr = text.split(" ").reverse().join(" ");
    return console.log(newArr);
}