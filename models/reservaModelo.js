//Importar Mongoose
import mongoose from 'mongoose'

//Constante para crear el MODELO DE DATOS
const Schema=mongoose.Schema

//Contruyo mi modelo o Esquema Habitacion
const Reserva=new Schema({

    fechaIngreso:{
        type:Date,
        required:true
    },
    fechaSalida:{
        type:Date,
        required:true
    },
    nombreCliente:{
        type:String,
        required:true
    },
    cedulaCliente:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    }

})

export const modeloReserva=mongoose.model('reservas',Reserva)