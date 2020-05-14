const express = require('express');
const { errorsController } = require('./controllers');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

require('./routes')(app);

app.get('*', errorsController.getNonExistentPath);
app.use(errorsController.handleError);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));