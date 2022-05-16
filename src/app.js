// External imports
import express from 'express';
import cors_server from 'cors';

// Files imports
//import { Doctors, Client, Appointments } from './databases/mysql/mysqlschema.js';
import { mongodb_conection } from './databases/mongodb/mongoconnection.js';
//import  { sequelize }  from './databases/mysql/mysqlconnections.js';
import { route } from './routes.js';



/* NOTA: Aqui eu crio meu MySQL, também presente no projeto, as chamadas são pratimanetes as mesmas
         Optei seguir com o mongoDB somente para puder publicar o projeto no meu portifólio, já que a
         mongoDB disponibiliza uma nuvem gratuita e a Mysql não...Localmente a arquitetura funciona igual 
         para os 2 modelos, já que é somente consumo e requisição em API's
(async () => {
    Doctors, Client, Appointments;
    await sequelize.sync();
})();
*/

// Settings
mongodb_conection;
const app = express();
app.use(cors_server());
app.use(express.json());

// Routes
app.use('/', route);

// Server
app.listen(5000 || process.env, () => {console.log("Server running...")})