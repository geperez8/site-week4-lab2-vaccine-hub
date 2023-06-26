const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const {BadRequestError, NotFoundError} = require("../vaccine-hub-api/utils/errors")

const app = express()

app.use(cors())

app.use(morgan("tiny"))

app.use(express.json())

app.use((req, res, next) => {
    return next(new NotFoundError())
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message

    return res.status(status).json({
        error: {message, status}
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})