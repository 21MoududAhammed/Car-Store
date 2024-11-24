# Car Store Project
### Project Link: [https://car-store-two-lac.vercel.app/](https://car-store-two-lac.vercel.app/)
This project is a fully functional API for managing a Car Store. The API allows you to create, get, update, and delete cars, place orders, and calculate revenue.

## Features
### Car Store Management
+ Create a new car
+ Retrieve all cars
+ Retrieve a car based on id
+ Update car details
+ Delete a car

### Order Management
+ Place an order for car
+ Calculate total revenue from all orders

### Error handling 
+ Validation error for incorrect or missing data
+ Response not found errors for unavailable data

## Api Endpoints

### Cars
+ Create Car: `Post` `/api/cars`
+ Get All Cars: `Get` `/api/cars`
+ Get Single Car: `Get` `/api/cars/:carId`
+ Update A Car: `Put` `/api/cars/:carId`
+ Delete A Car: `Delete` `/api/cars/:carId`

### Order
+ Order A Car: `Post` `/api/orders`
+ Get Total Revenue: `Get` `/api/orders/revenue`

