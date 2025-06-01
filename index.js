const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/graphql', async (req, res) => {
  try {
    const response = await axios.post(
      'https://tudk1i-bi.myshopify.com/admin/api/2024-04/graphql.json',
      req.body, // raw GraphQL query/mutation
      {
        headers: {
          'X-Shopify-Access-Token': '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',
          'Content-Type': 'application/json',
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      error: error.message,
      details: error.response?.data,
    });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Proxy running on port 3000');
});
