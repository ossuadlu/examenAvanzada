//Importamos el servicio HABITACION 
//NOTA: UN CONTROLADOR PUEDE LLAMAR A VARIOS SERVICIOS
import {ServicioReserva} from '../services/ServicioReserva.js'

//CONTROLADOR TIENE LA LOGICA
//DEL NEGOCIO
export class ControladorReserva{

    constructor(){}

    async insertar(request,response){
        let servicio=new ServicioReserva() 
        let datosPeticion=request.body //Recibo datos BODY
        try{
            await  servicio.registrar(datosPeticion) //Espero a que els ervicio guarde los datos
            response.status(200).json({
                mensaje:"exito en el ingreso de datos",
                datosIngresados:[],
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"fallamos en el ingreso de datos",
                datosIngresados:[],
                estado:false
            })
        }
    }

    
    async buscarPorId(request,response){
        let servicio=new ServicioReserva()
        let id=request.params.id //El id que llega por la URL

        try{
            response.status(200).json({
                mensaje:"exito buscando reserva por id",
                datos:await servicio.buscarPorId(id),
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"fallamos buscando reserva por id",
                datos:[],
                estado:false
            })
        }     
    }

    async editar(request,response){
        let servicio=new ServicioReserva()
        let id=request.params.id //El id que llega por la URL
        let datosPeticion=request.body //Recibo datos BODY

        try{
            await servicio.editar(id,datosPeticion)
            response.status(200).json({
                mensaje:"exito editando reserva por id",
                datos:"Datos del id: "+id,
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"fallamos editando reserva por id",
                datos:[],
                estado:false
            })
        }  
    }

    async eliminar(request,response){
        let servicio=new ServicioReserva()
        let id=request.params.id //El id que llega por la URL
        try{
            await servicio.eliminar(id)
            response.status(200).json({
                mensaje:"exito eliminando reserva por id",
                datos:"Datos del id: "+id,
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"fallamos eliminando reserva por id",
                datos:"Datos del id: "+id,
                estado:false
            })
        }
    }

}