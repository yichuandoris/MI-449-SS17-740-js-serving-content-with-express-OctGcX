var express = require('express')
var app = express()
var port = process.env.PORT || 8080
app.set('view engine', 'ejs')
app.use(express.static('public'))

var navs = {}

app.get('/', function (request, response) {
  response.render('pages/index', {
    navs: navs,
    dishes: dishes
  })
})

function createNav (nav) {
  var id = Object.keys(navs).length
  navs[id] = nav
}

createNav({
  title: 'Home',
  text: 'About this page',
  link: '/'
})
createNav({
  title: 'Menu',
  text: 'More breakfasts',
  link: '/menu'
})

var dishes = {
}

function createDish (dish) {
  var id = Object.keys(dishes).length
  dishes[id] = dish
}

createDish({
  title: 'Chinese Style Breakfast',
  text: 'Wanna have more Chinese-style breakfast? Don\'t miss this!',
  photo: '/img/ChineseBKF.jpg',
  url: 'http://www.chinahighlights.com/travelguide/article-what-chinese-eat-for-breakfast.htm'
})
createDish({
  title: 'American Style Breakfast',
  text: 'Wanna have more American-style breakfast? Don\'t miss this!',
  photo: '/img/AmericanBKF.jpg',
  url: 'http://www.mrbreakfast.com/category.asp?categoryid=1'
})
createDish({
  title: 'Japanese Style Breakfast',
  text: 'Wanna have more Japanese-style breakfast? Don\'t miss this!',
  photo: '/img/JapaneseBKF.jpg',
  url: 'https://www.thespruce.com/traditional-japanese-breakfast-2030063'
})

app.get('/menu', function (request, response) {
  response.render('pages/menu', {
    navs: navs,
    dishes: dishes
  })
})

app.listen(port)
