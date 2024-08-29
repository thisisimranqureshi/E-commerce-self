const express = require('express');
const cors = require('cors');
require ('./configuration/configure')
const users=require('./configuration/users')
const app = express();
app.use(express.json());
app.use(cors());



app.post('/Signup',async (req, res) => {
    let user=new users(req.body);
    let result=await user.save();
    result=result.toObject();
    res.send(result);
});
app.post('/login', async (req, resp) => {
    if(req.body.password&&req.body.email){ 
    let user = await users.findOne(req.body).select("-password");
    if (user) {
        resp.send(user);
    } else {
        resp.send({result:"result not found"});
    }}
    else {
        resp.send({result:"result not Found"});}});



app.listen(3500)
