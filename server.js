const express = require('express')
const app = express()

const restaurants = require('./views/data')

console.log(restaurants)


app.use(express.static('public'));




app.get('/', (req, res)=>{
    res.render("homepage.ejs")
})

app.get('/restaurants', (req, res)=>{
    res.render("all-restaurants.ejs", {
        restaurants : restaurants
    })
    
})


app.get('/restaurants/:id', (req, res) => {
   const foundRestaurant = restaurants.find((restaurant) => {
    return restaurant.id === Number(req.params.id)
  })
  res.render('restaurants-details.ejs', {
    restaurant : foundRestaurant
  })
  console.log(foundRestaurant)
})



app.listen(3000, () => {
    console.log('listening on port 3000')
})