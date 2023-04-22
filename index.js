const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const homeRoutes = require('./routes/home.js')
const apiRoutes = require('./routes/api.js')
app.set('view engine', 'ejs')
app.use(express.static('public'))


app.use('/', homeRoutes)

app.use('/api/:rapperName', apiRoutes)
app.use(cors)
app.listen(port, function(){
    console.log('listening on port 3000 go and catch its now');
});