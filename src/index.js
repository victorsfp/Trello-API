const express = require('express')

if(!process.env.NODE_ENV){
    require('dotenv').config()
}

const app = express();

//ROUTERS
app.use('/', require('./shared/http/routes'));

app.listen(process.env.PORT || 3333, () => {
    console.log('Applications is runnig in http://localhost:3333/')
})