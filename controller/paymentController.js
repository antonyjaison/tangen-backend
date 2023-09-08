const axios = require("axios")
require('dotenv').config()

const generateAccessToken = async (req,res) => {
    try {
      const encodedParams = new URLSearchParams();
      encodedParams.set('grant_type', 'client_credentials');
      encodedParams.set('client_id', process.env.clientID);
      encodedParams.set('client_secret', process.env.clientSecret);
  
      const options = {
        method: 'POST',
        url: 'https://api.instamojo.com/oauth2/token/',
        headers: {
          accept: 'application/json',
          'content-type': 'application/x-www-form-urlencoded',
        },
        data: encodedParams,
      };
  

      const response = await axios.request(options);
      const access_token = response.data.access_token;
      console.log(access_token)
      res.status(200).json({
        access_token:access_token
      });
    } catch (error) {
      // Handle errors here, e.g., log them or return an error response
      console.error('Error generating access token:', error);
      throw error; // Rethrow the error for higher-level error handling
    }
  };


  const makePaymentRequest = async (req,res) => {
    const {name,amount,phone,email} = req.body;
    const access_token = req.headers['authorization'].split(' ')[1];

    try {
        const encodedParams = new URLSearchParams();
        encodedParams.set('allow_repeated_payments', 'false');
        encodedParams.set('send_email', 'true');
        encodedParams.set('amount', `${amount}`);
        encodedParams.set('purpose', 'BECOME A UX/UI DESIGN PRO IN 7 DAYS');
        encodedParams.set('buyer_name', name);
        encodedParams.set('email', email);
        encodedParams.set('phone', `${phone}`);
        encodedParams.set('redirect_url', 'http://tangen.io/confirmation.html');

        const options = {
            method: 'POST',
            url: 'https://api.instamojo.com/v2/payment_requests/',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${access_token}`,
                'content-type': 'application/x-www-form-urlencoded',
            },
            data: encodedParams,
        };

        const response = await axios.request(options);
        const json = await response.data
        res.status(200).json(json)
    } catch (error) {
        throw error;
    }

};

module.exports = {
    generateAccessToken,
    makePaymentRequest
}