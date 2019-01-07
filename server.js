const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const categoriesData = require('./data/categories.js');
const citiesData = require('./data/cities.js');
const itemsData = require('./data/items.js');
// create the express app
const app = express()
// create middleware to handle the serving the app
app.use("/", serveStatic ( path.join (__dirname, '/public') ) )

// api
// shhows all the cities available
app.get('/apis/cities', function(req, res) {
  res.json(citiesData);
})
// shows all the categories for a city
app.get('/api/:city', function(req, res) {
  res.json(categoriesData);
});
// shows all the items for a particular category
app.get('/api/:city/:category', function(req, res) {
  console.log(req.params.city);
  let newData;
  if (req.query.min_price != undefined) {
    newData = itemsData.filter(item => {
      return item.city == req.params.city && item.category == req.params.category && item.price >= req.query.min_price && item.price <= req.query.min_price
    })
  } else {
    newData = itemsData.filter(item => {
      return item.city == req.params.city && item.category == req.params.category
    })
  }

  res.json(newData);
});
app.get('/api/:city/:categories/:listing', function(req, res) {
  res.json(categoriesData);
});
// this is going to show selected item
app.get('/api/:city/:categories/:listings/:item', function(req, res) {
  res.json(itemsData)
});
// show the item selected
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
// Create default port to serve the app on
const port = process.env.PORT || 5000
app.listen(port)
// Log to feedback that this is actually running
console.log('Server started on port ' + port)
