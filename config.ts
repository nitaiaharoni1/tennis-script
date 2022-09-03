import {constants} from './constants';

export const config = {
    EMAIL_PASS: process.env.EMAIL_PASS,
    email: {
        service: 'Yahoo',
        from: 'nitaiaharoni11@yahoo.com',
        to: [
            'nitaiaharoni1@gmail.com',
            // 'aharoni.amir@gmail.com',
            // 'jen55sela@gmail.com',
            // 'irad.aharoni@gmail.com',
            // 'Ynon.aharoni@gmail.com',
            // 'yaelhalevi246@gmail.com'
        ],
        subject: 'Tel Aviv Open Buy Tickets!',
        text: `Buy tickets at ${constants.url}`,
    },
};