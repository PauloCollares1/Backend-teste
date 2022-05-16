// External imports
import mongoose from 'mongoose';


// ----------- DOCTOR ---------- //

// ---- Schema Settings ---- //
export const mongoose_schema_doctors = mongoose.Schema({
    db_name          :{type: String, minlength:1, maxlength:200, required:true},
    db_email         :{type: String, minlength:1, maxlength:200, required:true},
    db_crm           :{type: String, minlength:1, maxlength:200, required:true},
    db_password      :{type: String, minlength:1, maxlength:200, required:true},
    db_specialty     :{type: String, minlength:1, maxlength:200, required:true},
    createdAt        :{type: Date, default: Date.now}
})
// ---- Model + DB-name Settings ---- //
export const mongoose_model_doctors = mongoose.model('doctors', mongoose_schema_doctors);





// ----------- CLIENT - SCHEMA ---------- //

// ---- Schema Settings ---- //
export const mongoose_schema_clients = mongoose.Schema({
    db_name          :{type: String, minlength:1, maxlength:200, required:true},
    db_email         :{type: String, minlength:1, maxlength:200, required:true},
    db_password      :{type: String, minlength:1, maxlength:200, required:true},
    createdAt        :{type: Date, default: Date.now}
})
// ---- Model + DB-name Settings ---- //
export const mongoose_model_clients = mongoose.model('clients', mongoose_schema_clients);





// ----------- APPOINTMENTS - SCHEMA ---------- //

// ---- Schema Settings ---- //
export const mongoose_schema_appointments = mongoose.Schema({
    db_name_doctor         :{type: String, minlength:1, maxlength:200, required:true},
    db_doctor_specialty    :{type: String, minlength:1, maxlength:200, required:true},
    db_name_client         :{type: String, minlength:1, maxlength:200, required:true},
    db_email_client        :{type: String, minlength:1, maxlength:200, required:true},
    db_infos               :{type: String, minlength:1, maxlength:200, required:true},
    db_crm                 :{type: String, minlength:1, maxlength:200, required:true},
    db_date                :{type: String, minlength:1, maxlength:200, required:true},
    db_time                :{type: String, minlength:1, maxlength:200, required:true},
    createdAt              :{type: Date, default: Date.now}
})
// ---- Model + DB-name Settings ---- //
export const mongoose_model_appointments = mongoose.model('appointments', mongoose_schema_appointments);