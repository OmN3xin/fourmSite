const express = require('express');
const app = express();
app.set('view engine', 'ejs')
var messages = ['hi', 'how are you']
console.log(messages)
app.get('/', (req, res) => {
    try {
        res.render("index", { chat: messages });
    } catch (error) {

    }
});
app.get('/mes', (req, res) => {
    try {
        let mesTOSend = req.query.m;
        messages.push(mesTOSend);
    } catch (error) {

    }
    res.redirect('/')
});
app.listen(2000)