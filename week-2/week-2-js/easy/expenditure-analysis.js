/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let output = [];
  transactions.forEach(transaction =>{
    let category = transaction.category;
    let spent = transaction.price
    let index = output.findIndex(item => item.category===category);

    if(index == -1){
      output.push({
        category: category,
        totalSpent: spent,
      })
    } else {
      output[index].totalSpent += spent;
    }
  })
  return output;
}

module.exports = calculateTotalSpentByCategory;
