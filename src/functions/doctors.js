// Files import
import { mongoose_model_doctors } from '../databases/mongodb/mongoschema.js';


// Create a new Doctor
export  async function newDoctor(req, res){

    const crm = req.body.html_crm;
    const name = req.body.html_name;
    const email = req.body.html_email;
    const password = req.body.html_password;
    const specialty = req.body.html_specialty;

    // This doctor already exist ?
    let doctor_search = await mongoose_model_doctors.findOne({db_crm : crm})

    if(doctor_search){
        console.log("This doctor already exist");
        return res.status(409).end();
    } 
    saveNewDoctor(name, email, crm, password, specialty);
    return res.status(201).end();
}

// Save doctor at Mongo database
async function saveNewDoctor(name, email, crm, password, specialty){

    try {
        let add_doctor = mongoose_model_doctors({
            db_crm :crm,
            db_name  :name,
            db_email  :email,
            db_password:password,
            db_specialty:specialty
        })
        await add_doctor.save();
        console.log("----------------------------------");
        console.log("New doctor registered: "+ name);
        
    } catch (error) {
        return console.log("At client POST method, some data is invalid!");
    }
}

// Create an API with all doctors
export async function showDoctorsApi(req, res){

    try {
        const doctors_api = await mongoose_model_doctors.find({})
        console.log("----------------------------------");
        console.log("New request in Doctors API at: " + Date());
        return res.status(200).json(doctors_api);
    } catch (error) {
        console.log("Doctor's API is facing a problem, plis check -> " + error);
        return res.status(408).end();
    }
}




