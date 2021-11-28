const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const URL = process.env.URL
//var http = require('http');
var request = require('request');


app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('index'))

app.post('/view', function(req, res){
    // APIを呼び出す
    var options = {
	url: `${URL}/sensor/${req.body.area}/${req.body.lpwa_id}/${req.body.sensor}?start=${req.body.start}&interval=${req.body.interval}`,
	method: 'GET',
	json: true
    }
    request(options, function (error, response, body) {
	label = body.map((x) => {return Date.parse(x.time) })
	value = body.map((x) => {return x.value})
	res.render('view', {label: label, value: value })
    })

})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
