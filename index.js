// Require Express
const express = require('express');
const hbs = require('hbs');

// Express server handling requests and responses
const app = express();

// Use public as static file
app.use(express.static(__dirname + "/public"));

// Set Hbs as dynamic view engine
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// Register partials
hbs.registerPartials(__dirname + "/views/partials");

// Routes
app.get('/', (req, res, next) => { 
  res.render('index');
});

app.get('/about', (req, res, next) => {
  const data = {
    name: 'Ale',
    age: 31,
    boardGames: 80,
    warning: false,
    siblings: ['Carlos', 'Cristina', 'Javi']
  }
  res.render('about', data)
})

app.get('/boardgames', (req, res, next) => {
  const boardGames = [
    {
      title: 'Pandemic Legacy',
      description: "Fight againts the new virus that's spreading through the city",
      image: 'https://cf.geekdo-images.com/y0x1zbkpUXjddzWWnhekYw__opengraph/img/WgDjc5FZSNs_ogL_wZXBlj1P5hs=/fit-in/1200x630/filters:strip_icc()/pic5581457.jpg',
      people: '2',
      time: 180
    },
    {
      title: 'Fallout Shelter',
      description: "How long can you hold on to your post-apocaliptyic shelter?",
      image: 'https://cf.geekdo-images.com/JgTKT2j61ctBjhtzg_vZ-A__opengraph/img/fyWsEXYfHA5F8p8_1p38nlOzpeg=/fit-in/1200x630/filters:strip_icc()/pic5055378.jpg',
      people: '2-4',
      time: 60
    },
    {
      title: 'Zombicide',
      description: "Let's see what this lovely planet has in store for you",
      image: 'https://cf.geekdo-images.com/TiyxlYaoUt6MMiJPppGMjQ__opengraph/img/XNyRqm6RRn8d2pmLZbI88QU9u18=/fit-in/1200x630/filters:strip_icc()/pic4748836.jpg',
      people: '2-6',
      time: 180
    },
    {
      title: 'Smartphone',
      description: "Be the one with the best smartphone company in the world",
      image: 'https://cf.geekdo-images.com/Ndctxvd7kBXYubeYRKRqzw__opengraph/img/ICTqakLDPah8-kJwhMKhccTlt4o=/fit-in/1200x630/filters:strip_icc()/pic4258616.jpg',
      people: '3-5',
      time: 90
    },
  ]
  // I have to pass an object, so if the data is an array, I store it within an object
  res.render('boardgames', { boardGames })
})

// Server Started
app.listen(3000, () => console.log('Server running on port 3000 🛫'));
