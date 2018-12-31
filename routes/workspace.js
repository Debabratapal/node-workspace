const Space = require('../models/workspace');
const router = require('express').Router();


// const product = [
//     {catagory:'private cabin', name:'some workspace', image:'1.jpeg', booked:true, capacity:30, price:{hourly:200,daily:1000,monthly:30000}},
//     {catagory:'meeting room', name:'some workspace',image:'1.jpeg', booked:false, capacity:30, price:{hourly:200,daily:1000,monthly:30000}},
//     {catagory:'open desk', name:'some workspace',image:'1.jpeg', booked:true, capacity:30, price:{hourly:200,daily:1000,monthly:30000}},
//     {catagory:'event space', name:'some workspace',image:'1.jpeg', booked:false, capacity:30, price:{hourly:200,daily:1000,monthly:30000}},
//     {catagory:'private cabin', name:'some workspace',image:'1.jpeg', booked:true, capacity:30, price:{hourly:200,daily:1000,monthly:30000}},
//     {catagory:'meeting room', name:'some workspace',image:'1.jpeg', booked:true, capacity:30, price:{hourly:200,daily:1000,monthly:30000}},
//     {catagory:'open desk', name:'some workspace',image:'1.jpeg', booked:true, capacity:30, price:{hourly:200,daily:1000,monthly:30000}},
//     {catagory:'event space', name:'some workspace',image:'1.jpeg', booked:false, capacity:30, price:{hourly:200,daily:1000,monthly:30000}},
//     {catagory:'private cabin', name:'some workspace',image:'1.jpeg', booked:true, capacity:30, price:{hourly:200,daily:1000,monthly:30000}},
//     {catagory:'meeting room', name:'some workspace',image:'1.jpeg', booked:false, capacity:30, price:{hourly:200,daily:1000,monthly:30000}},
//     {catagory:'open desk', name:'some workspace',image:'1.jpeg', booked:true, capacity:30, price:{hourly:200,daily:1000,monthly:30000}},
//     {catagory:'event space', name:'some workspace',image:'1.jpeg', booked:false, capacity:30, price:{hourly:200,daily:1000,monthly:30000}},
//     {catagory:'private cabin', name:'some workspace',image:'1.jpeg', booked:true, capacity:30, price:{hourly:200,daily:1000,monthly:30000}},
//     {catagory:'meeting room', name:'some workspace',image:'1.jpeg', booked:true, capacity:30, price:{hourly:200,daily:1000,monthly:30000}},
//     {catagory:'open desk', name:'some workspace',image:'1.jpeg', booked:true, capacity:30, price:{hourly:200,daily:1000,monthly:30000}},
//     {catagory:'event space', name:'some workspace',image:'1.jpeg', booked:false, capacity:30, price:{hourly:200,daily:1000,monthly:30000}},

// ]

router.get('/', async (req, res) => {
    try {
        const fetchData = await Space.find();
        res.json({docs: fetchData});
    } catch(err) {
        res.send(err);
    }
});

router.get('/get-catagory', async (req, res) => {
    try {
        console.log('cata');
        
        const catagory = [];
        const fetchData = await Space.find();
        for(let i of fetchData) {
            if(!catagory.includes(i.catagory)) {
                catagory.push(i.catagory);
            }
        }
        res.json({catagory});
    } catch(err) {
        res.send(err);
    }
})

router.get('/get-catagory/:cata' , async (req, res) => {
    try {
    const  product = await Space.find({catagory: req.params.cata});
    res.json({docs: product})

    } catch(err) {
        res.send(err);
    }

    
})


module.exports = router;