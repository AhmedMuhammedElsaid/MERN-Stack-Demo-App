const express = require('express');
const Functions =require('./Functions.js')
const router = express.Router();




// First Function :) 
// a get request from our  frontend to send  the unique country data to the frontend
router.get(`/`, async (req, res) => {
    console.log(req.body)
    let data = await Functions.getCountryByName();
    await res.json(data);
});

// strArr is just a dummy array to test our function to check if there is any match between the first array and the big one 
//in case we find any match even a part from the string we fetch the country which matched that part 
// Second Function
router.get('/countries/', async (req, res) => {
    let strArr = ['dubai', 'ger', 'land', 'den', 'france', 'egy', 'Belgium']
    let data = await Functions.getCommonCountries(strArr);
    await res.json({ data: data, strArr: strArr })
})

//Third Function
// Since the user fires the Play button in the frontend part this function will fire
// to send the data in json format to render it to the user
router.get('/slotMachine', (req, res) => {
    let data = Functions.slotMachine(20)
    res.json(data)
})

module.exports = router