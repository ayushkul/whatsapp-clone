import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'

module.exports = function (app) {
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }))
    // parse application/json
    app.use(bodyParser.json())
    // compression of data
    app.use(compression(9))
    // CORS
    app.use(cors())
}
