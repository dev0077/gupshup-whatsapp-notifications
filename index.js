const axios = require('axios');

async function whatsappNotifications(requestData) {
    const apiRes = await axios({
        method: 'POST',
        url: 'https://api.gupshup.io/sm/api/v1/msg',
       data: {
        channel: requestData.channel,
        destination: requestData.receiverNumbers.join(),
        message: requestData.message,
        source: requestData.senderNumber,
        'src.name': requestData.appName
    },
        headers: { apikey: requestData.gupshupApiKey, 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    return apiRes.data;
}

module.exports = {whatsappNotifications}