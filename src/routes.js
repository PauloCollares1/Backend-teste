// External imports
import express from 'express';

// Files imports
import { newDoctor, showDoctorsApi } from './functions/doctors.js';
import { newClient, showClientsApi } from './functions/clients.js';
import { newAppointment, showAppointmentsApi, showOneClientAppointments, showOneDoctorAppointments } from './functions/appointments.js';





// Settings
export const route = express.Router();



// General test
route.get('/', (req, res) => {

    res.send("Back end da minha aplicação");
})


// Routes - GET
route.get('/doctorsapi', showDoctorsApi)
route.get('/clientsapi', showClientsApi)
route.get('/appointmentsapi', showAppointmentsApi)
route.get('/appointmentdoctor/:crm', showOneDoctorAppointments)
route.get('/appointmentclient/:email', showOneClientAppointments)


// Routes - POST
route.post('/addmedic', newDoctor)
route.post('/addclient', newClient)
route.post('/addappointment', newAppointment)
