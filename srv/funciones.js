
const cds = require("@sap/cds");


async function Replicar(req) {

    console.log("dedededed");

    const model2 = await cds.connect.to('ODATA_ECC1')

    const { SolicitudesSet, ParametrosSet } = model2.entities

   ///odata/SAP/ZSD_WF_GETDATA_SOLIC_DSCTO_SRV/ParametrosSet?&$filter=%20FechaRecepSol%20eq%20datetime%272021-08-16T10:00:00%27%20and%20HoraRecepSol%20ge%20time%27PT00H00M00S%27%20and%20Estatus%20eq%20%27P%27&$expand=Parametros_to_Solicitudes
/////odata/SAP/ZSD_WF_GETDATA_SOLIC_DSCTO_SRV/
//ParametrosSet?&$filter= 
//FechaRecepSol eq datetime'2021-08-16T10:00:00' and 
//HoraRecepSol ge time'PT00H00M00S' and 
//Estatus eq 'P'&$expand=Parametros_to_Solicitudes
  
const queryResult = await model2.run(SELECT(SolicitudesSet).where(`FechaRecepSol = '2021-08-16T10:00:00' and HoraRecepSol = 'PT00H00M00S' and  Estatus = 'P'`))

    console.log("queryResult", queryResult)

    return queryResult;

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