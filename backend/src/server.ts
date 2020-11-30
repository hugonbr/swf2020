import app from './app';
import database from './database';

database.sync({ /*force: true*/ }); //synca o js com o bd //force destrói a tabela e recria, usa apenas em teste e não em produção
console.log('Database running at 3306');

app.listen(3001); //back na 3001 e front na 3000.
console.log('Server running at 3000');

