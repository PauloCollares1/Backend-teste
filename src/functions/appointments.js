// Files import
import { mongoose_model_appointments } from "../databases/mongodb/mongoschema.js";





// Create a new Appointment
export  async function newAppointment(req, res){

    const crm = req.body.html_crm;
    const date = req.body.html_date;
    const time = req.body.html_time;
    const infos = req.body.html_infos;
    const name_doctor = req.body.html_name_doctor;
    const name_client = req.body.html_name_client;
    const email_client = req.body.html_email_client;
    const doctor_specialty = req.body.html_doctor_specialty;

    saveNewAppointment(name_doctor, name_client, email_client, doctor_specialty, infos, crm, date, time);
    return res.status(201).end();
}

// Save doctor at Mongo database
async function saveNewAppointment(name_doctor, name_client, email_client, doctor_specialty, infos, crm, date, time){

    try {
        let add_appointment = mongoose_model_appointments({
            db_crm: crm,
            db_date: date,
            db_time: time,
            db_infos : infos,
            db_name_client : name_client,
            db_name_doctor : name_doctor,
            db_email_client : email_client,
            db_doctor_specialty : doctor_specialty
        })
        await add_appointment.save();
        console.log("----------------------------------");
        console.log("New Appointment registered: "+ name_client + " : " + name_doctor + " (" + doctor_specialty + ")");
    } catch (error) {
        return console.log("At appointment POST method, some data is invalid!");
    }
}

// Create an API with all appointments
export async function showAppointmentsApi(req, res){

    try {
        const appointments_api = await mongoose_model_appointments.find({})
        console.log("----------------------------------");
        console.log("New request in Clients API at: " + Date());
        return res.status(200).json(appointments_api);
    } catch (error) {
        console.log("Appointments's API is facing a problem, plis check -> " + error);
        return res.status(408).end();
    }
}


export async function showOneClientAppointments(req, res){
    
    try {
        const search_appointments = req.params;
        const appointments_api = await mongoose_model_appointments.find({db_email_client:search_appointments.email})
        return res.status(200).json(appointments_api)
    } catch (error) {
        console.log("Appointments's for one client API is facing a problem, plis check -> " + error);
        return res.status(408).end()
    }
}

export async function showOneDoctorAppointments(req, res){
    
    try {
        const search_appointments = req.params;
        const appointments_api = await mongoose_model_appointments.find({db_crm:search_appointments.crm})
        return res.status(200).json(appointments_api)
    } catch (error) {
        console.log("Appointments's for one client API is facing a problem, plis check -> " + error);
        return res.status(408).end()
    }
}




