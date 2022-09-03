import {createTransport} from 'nodemailer';
import {config} from '../config';
import * as Mail from 'nodemailer/lib/mailer';

const transporter = createTransport({
    service: config.email.service,
    auth: {
        user: config.email.from,
        pass: config.EMAIL_PASS,
    },
});

export const sendEmail = (options: Mail.Options = {}) => {
    console.log('Sending email');

    const mailOptions = {...config.email, ...options};
    console.log(mailOptions);

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};