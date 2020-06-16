const express = require('express');
const Functions =require('./Functions.js')
const router = express.Router();




// First Function :) 
router.get(`/`, async (req, res) => {
    console.log(req.body)
    let data = await Functions.getCountryByName();
    await res.json(data);
});

// Second Function
router.get('/countries/', async (req, res) => {
    let strArr = ['dubai', 'ger', 'land', 'den', 'france', 'egy', 'Belgium']
    let data = await Functions.getCommonCountries(strArr);
    await res.json({ data: data, strArr: strArr })
})

//Third Function
router.get('/slotMachine', (req, res) => {
    let data = Functions.slotMachine(20)
    res.json(data)
})

module.exports = router