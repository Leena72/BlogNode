const express = require('express');
const router =express.Router();

// Routes
router.get('', (req,res)=>{
    const locals={
        title:"Node js blog",
        description:"Simple blog created"
    }
    // res.send('Hello ')
    res.render('index',{locals})
});

router.get('/about', (req,res)=>{
    // res.send('Hello ')
    res.render('about')
});

module.exports = router;