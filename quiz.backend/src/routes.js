const router = require('express').Router();

router.get('/', (_, res) => res.send('API SERVER UP'));
router.use('/cards', require('./Http/cards'));

module.exports = router;
