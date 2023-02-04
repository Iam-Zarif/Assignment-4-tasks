
function paperRequirments(book1, book2, book3){
console.log("You ordered ",book1, " first book");
console.log("You ordered ",book2, " second book");
console.log("You ordered ",book3, " third book");


    let book1Page = book1*100 ;
    let book2Page  = book2*200 ;
    let book3Page = book3*300 ;

    
    let totalPage = book1Page+book2Page+book3Page;
    
    return totalPage;
}
console.log("\nTotal amount of pages ",paperRequirments(2, 1, 2), );