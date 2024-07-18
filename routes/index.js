var express = require('express');
var router = express.Router();

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: new Date(),
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: new Date(),
    },
    {
        text: 'Welcome to our message board!',
        user: 'Sarah',
        added: new Date(),
    },
    {
        text: 'Express.js is awesome!',
        user: 'Michael',
        added: new Date(),
    },
    {
        text: 'Looking forward to learning more about web development.',
        user: 'Emily',
        added: new Date(),
    },
    {
        text: 'Has anyone tried the new Node.js version?',
        user: 'David',
        added: new Date(),
    },
];

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function (req, res, next) {
    res.render('form', { title: 'Add a new message', messages: messages });
});

router.post('/new', function (req, res, next) {
    const messageUser = req.body.messageUser;
    const messageText = req.body.messageText;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect('/');
});

module.exports = router;
