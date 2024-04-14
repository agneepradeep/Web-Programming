//For a given array with prices of 5 items -> [250,645,300,900,50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer

let price = [250,645,300,900,50];
console.log(`Orignal Price of All items :${price}`)

// for(let item_price of price){
//     item_price -= price*0.1
// } not worked properly not updated


for(let i = 0;i<price.length;i++){
    price[i] -= price[i]*0.1
}
console.log(`Price of All items after 10% discount :${price}`)