var express = require('express');
const { promisify } = require('util')

var router = express.Router();
const axios = require('axios');
// QRCode generation requirements
const QRCode = require('qrcode')
const genDataUrl = promisify(QRCode.toDataURL.bind(QRCode))

/* POST home page. */
router.post('/', async (req, res, next) => {
    const { payload = '' } = req.body

    if (payload === '') {
        return res
            .status(422)
            .json({ err: 'Missing required parameter: "payload"' })
    }

    const dataUrl = await genDataUrl(payload)

    return res.json({ src: dataUrl })
});

module.exports = router;
