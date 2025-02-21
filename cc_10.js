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
       return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`
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





// Task 2 - Creating an Order Class

// Creating a class Order and giving it properties

class Order {
    constructor (orderID, product, quantity) {
        this.orderID = orderID
        this.product = product
        this.quantity = quantity

    // Declaring stockUpdated to update the quantity amount after an order is placed  

    const stockUpdated = this.product.updatestock(this.quantity)
    }

    // Using a getter method to retrieve the order detail

    getOrderDetails() {
        return `Order ID: ${this.orderID}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${(this.product.price * this.quantity)}`
    }
}

// Declaring order1 with values to make an order and console-logging it

const order1 = new Order(501, prod1, 2)             // Output: Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400
console.log(order1.getOrderDetails())

console.log(prod1.getdetails())                     // Output: Product: Laptop, ID: 101, Price: $1200, Stock: 5





// Task 3 - Creating an Inventory Class

// Creating an Inventory class to include the products that I created in Task 1

class Inventory {
    constructor() {
        this.products = []
    }

    // Adding products to the array by using .push 

    addProduct(product) {
        this.products.push(product)
    }

    // Each of the products in the array are separated and console-logged

    listProducts() {
        this.products.forEach (product => {
            console.log(product.getdetails())
        })
    }
}

// Creating a new product to add with prod1

const prod2 = new Product(`TV`, 102, 500, 10)

// Declaring a variable inventory to then add both products and list them out in the console by console-logging them

const inventory = new Inventory()

inventory.addProduct(prod1)                 // Output: Product: Laptop, ID: 101, Price: $1200, Stock: 5
inventory.addProduct(prod2)                 // Output: Product: TV, ID: 102, Price: $500, Stock: 10

inventory.listProducts()