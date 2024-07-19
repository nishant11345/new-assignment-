const express = require('express');
const connectDB = require('./db');
const User = require('./models/User')
const cors = require('cors');

const app = express();
const port = 3000;

connectDB();

app.use(express.json());

app.use(cors()); // Enable CORS


app.post('/user', async(req,res)=>{
    try {
        const {name,email,phoneNo}= req.body;
        const user = new User({name,email,phoneNo});
        await user.save();
res.status(201).json(user)

    } catch (error) {
        return res.status(400).json({error})
        
    }
})

app.get('/users',async(req,res)=>{
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
