const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hello@tangen.io',
      pass: 'vvuwdczcmohgkwbz'
    }
});

const sendEmail = async (req,res) => {

    const {  amount, name, email, phone} = req.body

    const mailOptions = {
        from: 'Tangen <hello@tangen.io>',
        to: email,
        subject: 'Welcome to Tangen fam 🤩 Here is your Next step 👇',
        html: `<p>
            Hey there,
            
            <br/><br/>
            
            Congratulations! 🥳 We know you're thrilled to be part of this 7-day 
            workshop. Now, it's our job to help you become a skilled UX/UI Designer.
            
            <br/><br/>

            I'm delighted to announce that your UX/UI journey starts right here. 
            To begin with the 7-Day Workshop we will add you to a WhatsApp group 
            where your fellow mates are eager to meet you. You'll receive all the 
            updates and follow-ups about the course in that group.

            <br/><br/>
            
            Click on this link to join the WhatsApp group (ignore if you've already joined):
            https://chat.whatsapp.com/C4qWazqKw8GLoV6cxbbLE4

            <br/><br/>
            
            Remember, we're available for you 24/7. Feel free to reach out to 
            our support team via email whenever you need assistance.

            <br/><br/>
            
            Support email: <a href="mailto:hello@tangen.io">hello@tangen.io</a> 
            See you on the Live Class then, 
            
            <br/><br/>

            Ciao ….. 🖐🏻
        </p>`,
    };


    transporter.sendMail(mailOptions,(error,info) => {
        if(error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
        }
    })
}

module.exports = { sendEmail }
