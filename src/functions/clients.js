// Files import
import { mongoose_model_clients } from '../databases/mongodb/mongoschema.js';




// Create a new Client
export  async function newClient(req, res){

    const name = req.body.html_name;
    const email = req.body.html_email;
    const password = req.body.html_password;

    // This client already exist ?
    let client_search = await mongoose_model_clients.findOne({db_email : email})

    if(client_search){
        console.log("This client already exist");
        return res.status(409).end();
    } 
    saveNewClient(name, email, password);
    return res.status(201).end();
}

// Save client at Mongo database
async function saveNewClient(name, email, password){

    try {
        let add_client = mongoose_model_clients({
            db_name  :name,
            db_email  :email,
            db_password:password,
        })
        await add_client.save();
        console.log("----------------------------------");
        console.log("New client registered: "+ name);  
    } catch (error) {
        return console.log("At client POST method, some data is invalid!");
    }
}

// Create an API with all clients
export async function showClientsApi(req, res){

    try {
        const clients_api = await mongoose_model_clients.find({})
        console.log("----------------------------------");
        console.log("New request in Clients API at: " + Date());
        return res.status(200).json(clients_api);
    } catch (error) {
        console.log("Client's API is facing a problem, plis check -> " + error);
        return res.status(408).end();
    }
}
