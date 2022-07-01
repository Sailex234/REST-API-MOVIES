const app = require('./app');
require('./database/db');

//Server
app.listen(app.get('port'), (error) => {
    if (error) {
        console.log(`There was an error: ${error}`)
    } else {
        console.log(`Server running on port: http://localhost:${app.get('port')}`);
    }
})