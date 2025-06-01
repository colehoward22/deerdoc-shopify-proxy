const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const SHOP_NAME = process.env.SHOPIFY_SHOP;
const X-Shopify-Access-Token = process.env.SHOPIFY_TOKEN;

app.post('/orders', async (req, res) => {
  try {
    const response = await axios.get(`https://${SHOP_NAME}/admin/api/2025-04/orders.json`, {
      headers: { 'X-Shopify-Access-Token': ACCESS_TOKEN },
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/', (req, res) => {
  res.send('DeerDoc Shopify Proxy is running!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
