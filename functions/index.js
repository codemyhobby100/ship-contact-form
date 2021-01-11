const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'olaorefouad565@gmail.com',
        pass: 'miijhbaslwsybytj'
    }
})

exports.sendMailFxn = functions.firestore.document('mails/{mailId}').onCreate(
    (snapshot, eventContext) => {
        // { name, email, message, subject } - snapshot data
        const data = snapshot.data();

        const mailObj = {
            from: 'olaorefouad565@gmail.com',
            to: 'tamazingeventsdfw@gmail.com',
            subject: `Message: ${ data.subject || 'No subject' }`,
            html: `<h3>Message from ${ data.name } </h3> <br> <p>${ data.message || 'No Message' },  email is: ${ data.email || 'No email' }</p>`
        }

        return transporter.sendMail(mailObj, (error, info) => {
            if (error) {
                console.error(error);
                return;
            }
            console.log('message sent!');
        })

    }
)
