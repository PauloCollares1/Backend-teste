import Sequelize from 'sequelize';
import { sequelize } from './mysqlconnections.js';


export const Doctors = sequelize.define('doctors', {

    id:{type: Sequelize.INTEGER, autoIncrement:true, allowNull: false, primaryKey:true},
    db_name:{type:Sequelize.INTEGER, allowNull: false},
    db_email:{type:Sequelize.INTEGER, allowNull: false},
    db_crm:{type:Sequelize.INTEGER, allowNull: false},
    db_password:{type:Sequelize.INTEGER, allowNull: false},
    db_specialty:{type:Sequelize.INTEGER, allowNull: false}
})

export const Client = sequelize.define('clients', {

    id:{type: Sequelize.INTEGER, autoIncrement:true, allowNull: false, primaryKey:true},
    db_name:{type:Sequelize.INTEGER, allowNull: false},
    db_email:{type:Sequelize.INTEGER, allowNull: false},
    db_password:{type:Sequelize.INTEGER, allowNull: false},
})

export const Appointments = sequelize.define('appointments', {

    id:{type: Sequelize.INTEGER, autoIncrement:true, allowNull: false, primaryKey:true},
    db_name_doctor:{type:Sequelize.INTEGER, allowNull: false},
    db_doctor_specialty:{type:Sequelize.INTEGER, allowNull: false},
    db_name_client:{type:Sequelize.INTEGER, allowNull: false},
    db_email_client:{type:Sequelize.INTEGER, allowNull: false},
    db_infos:{type:Sequelize.INTEGER, allowNull: false},
    db_crm:{type:Sequelize.INTEGER, allowNull: false},
    db_date:{type:Sequelize.INTEGER, allowNull: false},
    db_time:{type:Sequelize.INTEGER, allowNull: false},
})

