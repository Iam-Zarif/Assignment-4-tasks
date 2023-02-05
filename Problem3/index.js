
function oilPrice(digel, petrol, octan){
    digel = digel*114;
    petrol = petrol*130;
    octan = octan*135;

    let sum = digel + petrol + octan;

    return sum;
}

console.log(oilPrice(30, 20, 10));