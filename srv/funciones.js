
const cds = require("@sap/cds");
const { uuid } = cds.utils
var mensajes = []
var mensajesError = []

function _formatDate(date_time){

  try {
      // get current date
  // adjust 0 before single digit date
  let date = ("0" + date_time.getDate()).slice(-2);
  // get current month
  let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
  // get current year
  let year = date_time.getFullYear();
  // get current hours
  let hours =  ("0" + date_time.getHours()).slice(-2); 

  // get current minutes
  let minutes = ("0" + date_time.getMinutes()).slice(-2);
  // get current seconds
  let seconds =("0" + date_time.getSeconds()).slice(-2);
  // prints date in YYYY-MM-DD format
  let sFechaRequest = year + "-" + month + "-" + date + "T" + hours + ":" + minutes + ":" + seconds;

  return sFechaRequest;
  } catch (error) {
    return "";
  }

}

function _formatTime(date_time){

  try {
    let hours =  ("0" + date_time.getHours()).slice(-2); 

    // get current minutes
    let minutes = ("0" + date_time.getMinutes()).slice(-2);
    // get current seconds
    let seconds =("0" + date_time.getSeconds()).slice(-2);
  
    //let stime = "PT"+hours + "H" + minutes + "M" + seconds+"S";
    let stime = hours + ":" + minutes + ":" + seconds;
    
    return stime;
  } catch (error) {
    return "";
  }

}

function _transformTime(time){

  try {

    if(time.includes("PT")){
      let hours = time.substring(time.indexOf("T")+1, time.indexOf("H"))
    
      if(hours.length == 1){
        hours = "0"+hours;
      }

      // get current minutes
      let minutes = time.substring(time.indexOf("H")+1, time.indexOf("M"))

      if(minutes.length == 1){
        minutes = "0"+minutes;
      }

      // get current seconds
      let seconds = time.substring(time.indexOf("M")+1, time.indexOf("S"))
    
      if(seconds.length == 1){
        seconds = "0"+seconds;
      }

      //let stime = "PT"+hours + "H" + minutes + "M" + seconds+"S";
      let stime = hours + ":" + minutes + ":" + seconds;
      
      return stime;
    }else{
      return time
    }

  } catch (error) {
    return "";
  }

}

function _transformDate(date){

  try {

      //let stime = "PT"+hours + "H" + minutes + "M" + seconds+"S";
      let sDate = date+"T00:00:00";
      
      return sDate;
    

  } catch (error) {
    return "";
  }

}

async function _insertSolicitud(objSolicitud){

  try {
    let objNew = {};

  
    objNew.IDDCTOBTP=  uuid() ;
    objNew.FK_ZSD_TB_SECUENC_IDSECUENCIA= null;
    objNew.FK_ZSD_TB_REGLAS_IDREGLA= null;
    objNew.CODEJECUTIVO= objSolicitud.CodEjecutivo;
    objNew.DESCEJECUTIVO= objSolicitud.DescEjecutivo;
    objNew.PEDIDO= objSolicitud.Pedido;
    objNew.POSPEDIDO= objSolicitud.PosPedido;
    objNew.CODLOCAL= objSolicitud.CodLocal;
    objNew.DESCLOCAL= objSolicitud.DescLocal;
    objNew.CODPREVENTA= objSolicitud.CodPreventa;
    objNew.DESCPREVENTA= objSolicitud.DescPreventa;
    objNew.CODVENDEDOR= objSolicitud.CodVendedor;
    objNew.DESCVENDEDOR=objSolicitud.DescVendedor;
    objNew.CODCLIENTE= objSolicitud.CodCliente;
    objNew.DESCCLIENTE= objSolicitud.DescCliente;
    objNew.CODCENTRO= objSolicitud.CodCentro;
    objNew.CODMATERIAL= objSolicitud.CodMaterial;
    objNew.DESCMATERIAL= objSolicitud.DescMaterial;
    objNew.CODSECTOR= objSolicitud.CodSector;
    objNew.DESCSECTOR= objSolicitud.DescSector;
    objNew.CODESTADO= objSolicitud.CodEstado;
    objNew.DESCESTADO= objSolicitud.DescEstado;
    objNew.CODCLASIFICACION= objSolicitud.CodClasficacion;
    objNew.DESCCLASIFICACION= objSolicitud.DescClasificacion;
    objNew.PRECIOLISTAUNI= objSolicitud.PrecioListaUni;
    objNew.VALORRECARGOUNI= objSolicitud.ValorRecargoUni;
    objNew.PRECIOWFCONDSCTOUNI= objSolicitud.PrecioWFConDsctoUni;
    objNew.CANTIDAD=objSolicitud.Cantidad;
    objNew.UMV= objSolicitud.Umv;
    objNew.UMP= objSolicitud.Ump;
    objNew.PORCENTAJEDSCTO=objSolicitud.PorcentajeDscto;
    objNew.FECHADESPACHO=objSolicitud.FechaDespacho.substring(0,10);
    objNew.CODMOTIVO= objSolicitud.CodMotivo;
    objNew.DESCMOTIVO= objSolicitud.DescMotivo;
    objNew.ESTATUS= objSolicitud.Estatus;
    objNew.CODUSERAPROB= objSolicitud.CodUserAprob;
    objNew.DESCUSERAPROB= objSolicitud.DescUserAprob;
    objNew.FECHARECEPSOL= objSolicitud.FechaRecepSol.substring(0,10) + "T"+ _transformTime(objSolicitud.HoraRecepSol);
    objNew.HORARECEPSOL= _transformTime(objSolicitud.HoraRecepSol);
    objNew.FECHAAPROBSOL= null;
    objNew.HORAAPROBSOL= null;
    objNew.CODSUCURSALLOC= objSolicitud.CodSucursalLoc;
    objNew.DESCSUCURSALLOC= objSolicitud.DescSucursalLoc;
    objNew.CODTIPOCLIENTE= objSolicitud.CodTipocCiente;
    objNew.DESCTIPOCLIENTE= objSolicitud.DescTipoCliente;
    objNew.CODSBTPCLIENTE= objSolicitud.CodSbtpCliente;
    objNew.DESCSBTPCLIENTE= objSolicitud.DescSbtpCliente;
    objNew.CODGRCONDCLIENTE= objSolicitud.CodGrcondCliente;
    objNew.DESCGRCONDCLIENTE= objSolicitud.DescGrcondCliente;
    objNew.TIPOPROCES= null;
    objNew.CODMOTDERRECH= null;
    objNew.MOTDERRECH= null;
    objNew.PRECIOREGLA= null;
    objNew.CANTREGLA= null;
    objNew.PROCENTREGLA= null;
    
      const backendConnectionWP = await cds.connect.to('Workflow_Precios')
      const { ZSD_TB_SOL_MAT_DCTO_BTP } = backendConnectionWP.entities
    
      let resultado = await backendConnectionWP.run(INSERT(objNew).into(ZSD_TB_SOL_MAT_DCTO_BTP))
     
     // console.log(`WP - ReplicarSolicitudes:  Solicitud ${resultado}`)
     // mensajes.push('WP - ReplicarSolicitudes:  Solicitud' + resultado );
      mensajes.push('Pedido:'+objSolicitud.Pedido + ' Posicion:' + objSolicitud.PosPedido + ' Creado ' + resultado.IDDCTOBTP);

    
  } catch (error) {



  //  console.log(`WP - ReplicarSolicitudes:  Error ${error}`)
    mensajesError.push('Pedido:'+objSolicitud.Pedido + ' Posicion:' + objSolicitud.PosPedido + ': Error: ' + error);


  }
 

}

function _init(){

  Date.prototype.addHours = function(h) {
    if(h.includes("+")){
      this.setTime(this.getTime() + (Math.abs(h)*60*60*1000));
    }else if(h.includes("-")){
      this.setTime(this.getTime() - (Math.abs(h)*60*60*1000));
    }else if(h == '0'){
      return this;
    }else{
      return "error";
    }
    return this;
  }
}

async function Replicar(req) {

    _init()
  

    let obj = {}
    mensajes = []
    mensajesError = []

    const backendConnectionWP = await cds.connect.to('Workflow_Precios')
    const { ZSD_TB_SOL_MAT_DCTO_BTP } = backendConnectionWP.entities

    const backendConnection = await cds.connect.to('ODATA_ECC')
    const { SolicitudesSet } = backendConnection.entities

    
  //obtener fecha y horas actuales Chile
  let date_time = new Date().addHours(req.data.difHour);
  let sDate = _formatDate(date_time);
  let sTime = _formatTime(date_time);
  
  //sDate = '2024-06-18T00:00:00'
  //sTime = '10:37:11'

  //Ir a buscar ultimo registro creado de la tabla de solicitudes y con ese hora ir a buscar la info
  let sQuery1= SELECT.one.from(ZSD_TB_SOL_MAT_DCTO_BTP).columns(`max(FECHARECEPSOL) as max_fecha_recep`).orderBy('FECHARECEPSOL desc','HORARECEPSOL desc')
  const mayorRegistro2 = await backendConnectionWP.run(sQuery1)

  if(mayorRegistro2){
    console.log("Si encontro registro", mayorRegistro2.HORARECEPSOL);

    sDate = _transformDate(mayorRegistro2.FECHARECEPSOL);
    sTime = _transformTime(mayorRegistro2.HORARECEPSOL);
  }

  let sQuery = `FechaRecepSol = '${sDate}' and HoraRecepSol >= '${sTime}' and  Estatus = 'P'`;
  let queryResult = await backendConnection.run(SELECT(SolicitudesSet).where(sQuery))

  obj.registrosEncontrados = queryResult.length
  obj.query = sQuery

  let registros = []
  if(queryResult.length > 0){

    for(var ele in queryResult){

      let element = queryResult[ele]

    //  mensajes.push('Pedido: ' + element.Pedido + ' Posicion: '+element.PosPedido);
      registros.push('Pedido: ' + element.Pedido + ' Posicion: '+element.PosPedido)
     // console.log(element);
     //let fechaRecepSol = _formatDate(element.FechaRecepSol);
     let horaRecepSol = _transformTime(element.HoraRecepSol);

     let sQuery2= `PEDIDO = '${element.Pedido}' and POSPEDIDO = '${element.PosPedido}' and FECHARECEPSOL = '${element.FechaRecepSol.substring(0,10)}' and HORARECEPSOL = '${horaRecepSol}'`
     console.log(sQuery2); 
     const existeSol = await backendConnectionWP.run(SELECT(ZSD_TB_SOL_MAT_DCTO_BTP).
      where(sQuery2))
  

      if(existeSol.length == 0){
        _insertSolicitud(element);
       // console.log(`WP - ReplicarSolicitudes: Registros ${queryResult.length} procesados`)
      }else{
 
        mensajesError.push(`PEDIDO = '${element.Pedido}' and POSPEDIDO = '${element.PosPedido} ya esta en la bd`);

      }
  
    }

  }else{

    console.log("WP - ReplicarSolicitudes: No hay registros para procesar")
    mensajes.push('WP - ReplicarSolicitudes: No hay registros para procesar: ' + queryResult.length);
    
   //return 'WP - ReplicarSolicitudes: No hay registros para procesar: ' + queryResult.length
  }


  let response = ""
  mensajes.forEach((obj)=>{
    response = response + obj + "\n"
  })

  obj.registrosOK = mensajes
  obj.registrosError = mensajesError

  console.log(response);
  return obj

 //return response

}



async function VerSolicitudes(req) {


    const model2 = await cds.connect.to('Workflow_Precios')

    const { COLUMNAS_SEC } = model2.entities

    const queryResult = await model2.run(SELECT(COLUMNAS_SEC))

    console.log(queryResult)

    return queryResult;

}

module.exports = {
    Replicar, VerSolicitudes
}