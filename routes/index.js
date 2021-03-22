var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', async (req, res, next) => {
  // res.render('index', { title: 'Express' });
    try {
        //   res.send('Hello World!');
        const response = await axios.get('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example');
        console.log(response);
        // res.render('index', { title: 'Express', data: response.config.url });
        res.send(response.config.url);
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
});

module.exports = router;
