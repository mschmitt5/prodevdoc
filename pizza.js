function pizzaParty(string, number) {
 let finalString = "";
    for (i=0; i<number; i++) {
       finalString = finalString + string;
    }
    return finalString;
}

pizzaParty("pizza", 5);