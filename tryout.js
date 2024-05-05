const Redis = require('ioredis');

const redisDemo = async () => {
  const redisClient = new Redis({
    host: '127.0.0.1',
    port: 6379,
  });

  await redisClient.set('myName', 'Kishore');
  const value = await redisClient.get('myName');
  console.log(value);

  redisClient.quit();
};

redisDemo();

