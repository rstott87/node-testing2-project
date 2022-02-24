const router = require("express").Router();

router.get('/', (req,res) => {
    res.send("works from the router!")
})

router.get('/name', (req,res) => {
    res.send(" name works from the router!")
})

module.exports = router;
