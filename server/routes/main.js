const express = require('express');
const router =express.Router();

// Routes
router.get('', (req,res)=>{
    // res.send('Hello ')
    res.render('index')
});

module.exports = router;