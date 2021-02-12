import Service from './Service';

const service = new Service('/cards');

const cardService = {
  getAllCards: () => service.get('/')
};

export default cardService;