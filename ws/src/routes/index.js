const express = require('express');
const Router = express.Router();

Router.get('/customers/:first_name/:last_name/', (req, res, next)=>{
    req.params.id
})
Router.get('/customers', (req, res)=>{

})
Router.post('/cusomers', (req, res)=>{

})
Router.put('/customer', (req, res)=>{

})
module.exports = Router