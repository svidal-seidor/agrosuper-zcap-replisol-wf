
const cds = require("@sap/cds");
const { uuid } = cds.utils


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

async function _insertSolicitud(objSolicitud){

  try {
    let objNew = {};

    console.log(objSolicitud);
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
    objNew.FECHARECEPSOL= objSolicitud.FechaRecepSol.substring(0,10);
    objNew.HORARECEPSOL= objSolicitud.HoraRecepSol;
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
     
      console.log(`WP - ReplicarSolicitudes:  Solicitud ${resultado}`)

    
  } catch (error) {
    console.log(`WP - ReplicarSolicitudes:  Error ${error}`)
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
    
  //obtener fecha y horas actuales Chile
  let date_time = new Date().addHours(req.data.difHour);
  let sDate = _formatDate(date_time);
  let sTime = _formatTime(date_time);
  
  const backendConnection = await cds.connect.to('ODATA_ECC1')
  const { SolicitudesSet } = backendConnection.entities

  let sQuery = `FechaRecepSol = '${sDate}' and HoraRecepSol >= '${sTime}' and  Estatus = 'P'`;
  let queryResult = await backendConnection.run(SELECT(SolicitudesSet).where(sQuery))

  console.log("Query ejecutada: " + sQuery);
  console.log("Registros encontrados: " + queryResult.length);
  if(queryResult.length > 0){

    const backendConnectionWP = await cds.connect.to('Workflow_Precios')
    const { ZSD_TB_SOL_MAT_DCTO_BTP } = backendConnectionWP.entities

    for(var ele in queryResult){

      let element = queryResult[ele]


     // console.log(element);
      const existeSol = await backendConnectionWP.run(SELECT(ZSD_TB_SOL_MAT_DCTO_BTP).
      where(`PEDIDO = '${element.Pedido}' and POSPEDIDO = '${element.PosPedido}'`))
  

      if(existeSol.length == 0){
        _insertSolicitud(element);
       // console.log(`WP - ReplicarSolicitudes: Registros ${queryResult.length} procesados`)
      }
  
    }

  }else{

    console.log("WP - ReplicarSolicitudes: No hay registros para procesar")
  }

  return JSON.stringify(queryResult)


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