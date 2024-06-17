
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
    let objNew  = {
      "IDDCTOBTP":  uuid() ,
      "FK_ZSD_TB_SECUENC_IDSECUENCIA": null,
      "FK_ZSD_TB_REGLAS_IDREGLA": null,
      "CODEJECUTIVO": objSolicitud.CodEjecutivo,
      "DESCEJECUTIVO": objSolicitud.DescEjecutivo,
      "PEDIDO": objSolicitud.Pedido,
      "POSPEDIDO": objSolicitud.PosPedido,
      "CODLOCAL": objSolicitud.CodLocal,
      "DESCLOCAL": objSolicitud.DescLocal,
      "CODPREVENTA": objSolicitud.CodPreventa,
      "DESCPREVENTA": objSolicitud.DescPreventa,
      "CODVENDEDOR": objSolicitud.CodVendedor,
      "DESCVENDEDOR":objSolicitud.DescVendedor,
      "CODCLIENTE": objSolicitud.CodCliente,
      "DESCCLIENTE": objSolicitud.DescCliente,
      "CODCENTRO": objSolicitud.CodCentro,
      "CODMATERIAL": objSolicitud.CodMaterial,
      "DESCMATERIAL": objSolicitud.DescMaterial,
      "CODSECTOR": objSolicitud.CodSector,
      "DESCSECTOR": objSolicitud.DescSector,
      "CODESTADO": objSolicitud.CodEstado,
      "DESCESTADO": objSolicitud.DescEstado,
      "CODCLASIFICACION": objSolicitud.CodClasficacion,
      "DESCCLASIFICACION": objSolicitud.DescClasificacion,
      "PRECIOLISTAUNI": objSolicitud.PrecioListaUni,
      "VALORRECARGOUNI": objSolicitud.ValorRecargoUni,
      "PRECIOWFCONDSCTOUNI": objSolicitud.PrecioWFConDsctoUni,
      "CANTIDAD":objSolicitud.Cantidad,
      "UMV": objSolicitud.Umv,
      "UMP": objSolicitud.Ump,
      "PORCENTAJEDSCTO":objSolicitud.PorcentajeDscto,
      "FECHADESPACHO":objSolicitud.FechaDespacho,
      "CODMOTIVO": objSolicitud.CodMotivo,
      "DESCMOTIVO": objSolicitud.DescMotivo,
      "ESTATUS": objSolicitud.Estatus,
      "CODUSERAPROB": objSolicitud.CodUserAprob,
      "DESCUSERAPROB": objSolicitud.DescUserAprob,
      "FECHARECEPSOL": objSolicitud.FechaRecepSol,
      "HORARECEPSOL": objSolicitud.HoraRecepSol,
      "FECHAAPROBSOL": null,
      "HORAAPROBSOL": null,
      "CODSUCURSALLOC": objSolicitud.CodSucursalLoc,
      "DESCSUCURSALLOC": objSolicitud.DescSucursalLoc,
      "CODTIPOCLIENTE": objSolicitud.CodTipocCiente,
      "DESCTIPOCLIENTE": objSolicitud.DescTipoCliente,
      "CODSBTPCLIENTE": objSolicitud.CodSbtpCliente,
      "DESCSBTPCLIENTE": objSolicitud.DescSbtpCliente,
      "CODGRCONDCLIENTE": objSolicitud.CodGrcondCliente,
      "DESCGRCONDCLIENTE": objSolicitud.DescGrcondCliente,
      "TIPOPROCES": null,
      "CODMOTDERRECH": null,
      "MOTDERRECH": null,
      "PRECIOREGLA": null,
      "CANTREGLA": null,
      "PROCENTREGLA": null,
      "FECHARECEPSOL_AUX": null,
      "HORARECEPSOL_AUX": null,
      }
    
      const backendConnectionWP = await cds.connect.to('Workflow_Precios')
      const { ZSD_TB_SOL_MAT_DCTO_BTP } = backendConnectionWP.entities
    
      await backendConnectionWP.run(INSERT(objNew).into(ZSD_TB_SOL_MAT_DCTO_BTP))
    
  } catch (error) {
    console.log(`WP - ReplicarSolicitudes: Error Solicitud: ${objSolicitud.Pedido} ${objSolicitud.PosPedido}: Error ${error}`)
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

  let sQuery = `FechaRecepSol = '${sDate}' and HoraRecepSol = '${sTime}' and  Estatus = 'P'`;
  let queryResult = await backendConnection.run(SELECT(SolicitudesSet).where(sQuery))

  if(queryResult.length > 0){

    const backendConnectionWP = await cds.connect.to('Workflow_Precios')
    const { ZSD_TB_SOL_MAT_DCTO_BTP } = backendConnectionWP.entities

    for(var ele in queryResult){

      let element = queryResult[ele]

      //Validar si el registro existe en la tabla de solicitudes
  
      const existeSol = await backendConnectionWP.run(SELECT(ZSD_TB_SOL_MAT_DCTO_BTP).
      where(`PEDIDO = '${element.Pedido}' and POSPEDIDO = '${element.PosPedido}'`))
  
      if(existeSol){
        _insertSolicitud.apply(element);
      }
  
    }

 
    console.log(`WP - ReplicarSolicitudes: Registros ${queryResult.length} procesados`)
    return `Registros ${queryResult.length} procesados`;
  }else{

    console.log("WP - ReplicarSolicitudes: No hay registros para procesar")
  }
  

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