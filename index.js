const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const apiRoutes = require('./routes/api.js')
const homeRoutes = require('./routes/home.js')
app.set('view engine', 'ejs')
app.use(express.static('public'))



app.use('/api/:rapperName', apiRoutes)
app.use('/', homeRoutes)
app.listen(port, function(){
    console.log('listening on port 3000 go and catch its now');
});