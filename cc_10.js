// Task 1 - Creating a Product Class

// Create a class named Product with properties

class Product {
    constructor (name, id, price, stock) {
        this.name = name
        this.id = id
        this.price = price
        this.stock = stock
    }

    // Using a getter method to retrieve the details from the Product Class

    getdetails() {
       return `Product Name: ${this.name}, ID: ${this.id}, Price: ${this.price}, Stock: ${this.stock}`
    }

    // Making an updatestock function to subtract from the quantity pile

    updatestock(quantity) {
        if (this.stock >= quantity) {
            this.stock -= quantity
        }
    }
}


// Assigning a product to the Product Class and giving it values and updating the stock amount, and console-logging it all

const prod1 = new Product(`Laptop`, 101, 1200, 10)
console.log(prod1.getdetails())                         // Output: Product Name: Laptop, ID: 101, Price: 1200, Stock: 10

prod1.updatestock(3)
console.log(prod1.getdetails())                         // Output: Product Name: Laptop, ID: 101, Price: 1200, Stock: 7