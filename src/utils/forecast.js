const request = require('request')

const forecast = (coord1, coord2, callback) => {
    const url = 'https://api.darksky.net/forecast/dee3b17400d474e1e22f2f72d9a5e7ab/'+ encodeURIComponent(coord1)+','+encodeURIComponent(coord2)
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Undable to connect to location services', undefined)
        } else if (body.error) {
            callback('Couldnt find coordinates', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + " It is currently " + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain')
        }
    })
}

module.exports = forecast