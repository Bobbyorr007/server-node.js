


const express = require('express')


const app = express()


const port = 7000

app.get('/', (request, response) => {
    response.send('Welcome to Homepage')
})

app.get('/contact', (request, response) => {
    response.send('Welcome to Homepage')
})

app.get('/about', (request, response) => {
    response.send('Welcome to About Page')
})

app.get('/', (request, response) => {
    response.send('Welcome to Homepage')
})




app.listen(port, ()=>{
    console.log('server started successfully')
})