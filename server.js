const express = require('express');
const axios = require('axios');
const cors = require('cors');
const Redis = require('ioredis');

const redisClient = new Redis({
    host: '127.0.0.1',
    port: 6379,
})
const DEFAULT_EXPIRATION = 3600;

const app = express();
app.use(cors());

app.get('/photos', async(req,res) => {
    const albumId = req.query.albumId;
    redisClient.get('photos',async(error,photos) => {
        if(error){
            console.log(error);
        }
        if(photos!=null){
            console.log('Cache HIT');
            return res.json(JSON.parse(photos));
        }else{
            console.log('Cache MISS');
            const {data} = await axios.get(
                "https://jsonplaceholder.typicode.com/photos",
                {params:{albumId}}
            )
            redisClient.set('photos', JSON.stringify(data), 'EX', DEFAULT_EXPIRATION);
            res.json(data);
        }
    })
});

app.get('/photos/:id', async(req,res) => {
    redisClient.get(`photos/${req.params.id}`, async(error,photo) => {
        if(error){
            console.log(error);
        }
        if(photo!=null){
            console.log('Cache HIT')
            return res.json(JSON.parse(photo));
        }else{
            console.log('Cache MISS');
            const {data} = await axios.get(
                `https://jsonplaceholder.typicode.com/photos/${req.params.id}`
            )
            redisClient.set(`photos/${req.params.id}`,JSON.stringify(data),'EX',DEFAULT_EXPIRATION);
            res.json(data);      
        }
    })
})

app.listen(4000, () => {
    console.log("App starts..");
})
