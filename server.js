const express = require('express');
const app = express();

app.use(express.static('./dist/test-deploy-app'));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});