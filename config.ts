import {constants} from './constants';

export const config = {
    EMAIL_PASS: process.env.EMAIL_PASS,
    email: {
        service: 'hotmail',
        from: 'nitaiaharoni1@outlook.com',
        to: 'nitaiaharoni1@gmail.com',
        subject: 'Tel Aviv Open Buy Tickets!',
        text: `Buy tickets at ${constants.url}`,
    },
};