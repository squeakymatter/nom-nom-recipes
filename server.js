//backend app

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3200;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
