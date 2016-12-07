var express = require('express');
var moment = require('moment');

var app = express();

app.get('/:date', function(request, response) {
    var date = request.params.date;
    if(isNaN(date)) {
        date = moment(date, 'MMMM D, YYYY');
    } else {
        date = moment(date, 'X');
    }
    
    if(date.isValid()) {
        var object = {
            unix:  date.format('X'),
            natural: date.format('MMMM D, YYYY')
        }
    } else {
        var object = {
            unix: null,
            natural: null
        }
    }
    response.send(object);
});


app.listen(8080, function() {
    console.log('Timestamp microservice app listening on port 3000!');
});