const express = require('express');
const path = require('path');
const cors = require('cors');

const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(express.static('public'));
app.use(cors());
app.use(express.json());

//Gallery
app.use('/api/homeinfo', createProxyMiddleware({ target: 'http://ec2-3-141-9-216.us-east-2.compute.amazonaws.com:3002/bundle.js', changeOrigin: true }));
app.use('/api/homeimages', createProxyMiddleware({ target: 'http://ec2-3-141-9-216.us-east-2.compute.amazonaws.com:3002/bundle.js', changeOrigin: true }));

//Similar Carousel
app.use('/api/homes/similar', createProxyMiddleware({ target: 'http://ec2-54-67-71-60.us-west-1.compute.amazonaws.com:3001/bundle.js', changeOrigin: true }));
app.use('/api/homes/nearby', createProxyMiddleware({ target: 'http://ec2-54-67-71-60.us-west-1.compute.amazonaws.com:3001/bundle.js', changeOrigin: true }));

//Local Review
app.use('/reviews', createProxyMiddleware({ target: 'http://ec2-13-52-76-182.us-west-1.compute.amazonaws.com:3004/bundle.js', changeOrigin: true }));
app.use('/features', createProxyMiddleware({ target: 'http://ec2-13-52-76-182.us-west-1.compute.amazonaws.com:3004/bundle.js', changeOrigin: true }));

//Calculator
app.use('/mortgages', createProxyMiddleware({ target: 'http://ec2-3-135-210-129.us-east-2.compute.amazonaws.com:3003/bundle.js', changeOrigin: true }));
app.use('/homes', createProxyMiddleware({ target: 'http://ec2-3-135-210-129.us-east-2.compute.amazonaws.com:3003/bundle.js', changeOrigin: true }));

app.listen(3000, () => {console.log('Proxy listening on Port 3000');});