
function feetToInch(feetInput){
    let Inchi = feetInput*12;
    if(Inchi % 1 !== 0){
        return Inchi.toFixed(2);
    }
    else{
        return Inchi;
    }
}
console.log(feetToInch(3.5));
