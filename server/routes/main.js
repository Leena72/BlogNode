const express = require('express');
const router =express.Router();

// Routes
router.get('', (req,res)=>{
    // res.send('Hello ')
    res.render('index')
});

router.get('/about', (req,res)=>{
    // res.send('Hello ')
    res.render('about')
});

module.exports = router;