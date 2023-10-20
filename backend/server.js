const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    let data = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'annatest2345@gmail.com',
            pass: 'password'
        }
    });

    let mailOptions = {
        from: data.email,
        to: 'annatest2345@gmail.com',
        subject: `Message from ${data.firstName}`,
        text: `
        Name: ${data.firstName}
        Phone: ${data.phoneNumber}
        Email: ${data.email}
        Interests:
            Joining Get: ${data.interests.joiningGet}
            Student Resource: ${data.interests.studentResource}
        Message:
        ${data.message}
        `
    };

    transporter.sendMail(mailOptions, (error, response) => {
        if (error) {
            res.send(error)
        } else {
            res.send('Success')
        }
    });

    transporter.close();
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
