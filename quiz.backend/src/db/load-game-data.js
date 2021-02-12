const axios = require('axios');
const Card = require('./models/Card');

const Http = axios.create({
  baseURL: ' https://svquizz.s3.eu-central-1.amazonaws.com'
})

async function loadGameData () {
  const { data } = await Http.get('/cards.json');

  const alreadyExistCards = await Card.count();

  if (alreadyExistCards) return undefined;

  await Card.bulkCreate(data);
}

loadGameData();
