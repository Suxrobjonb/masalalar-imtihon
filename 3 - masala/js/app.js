console.log(more("hello"));

function more(str) {
    let matn = str.split("")
    for(let i = 0; i < matn.length; i+=2) {
        matn.splice(i,0,matn[i])
    }
    let natija = matn.join("")
    return natija;
}