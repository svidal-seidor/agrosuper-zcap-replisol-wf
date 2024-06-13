
const cds = require("@sap/cds");
const { retrieveJwt } = require("@sap-cloud-sdk/core");


function _getJWT(req) {
  if (typeof req._ !== "undefined") {
      return retrieveJwt(req._.req);
  } else {
      return "";
  }
}

async function Replicar(req) {



  const backendConnection = await cds.connect.to('ODATA_ECC1')
  const { SolicitudesSet } = backendConnection.entities

  const externalRequisitions = await backendConnection.run(SELECT(SolicitudesSet).where(`Estatus = \'P\' AND FechaRecepSol = \'2021-08-16T10:00:00\'`))
  const response = { res: "Perfecto"}
  console.log(externalRequisitions)

  const queryResult2 = await backendConnection.run(SELECT(SolicitudesSet).where(`FechaRecepSol = '2021-08-16T10:00:00' and HoraRecepSol = '00:00:00' and  Estatus = 'P'`))

  console.log(queryResult2)

/*  var jwt = _getJWT(req);
  console.log("--------->1",jwt )
*/

  return externalRequisitions

/*
  passport.use('JWT', new xssec.JWTStrategy(xsenv.getServices({ uaa: { tag: 'xsuaa' } }).uaa));
  app.use(passport.initialize());
  app.use(passport.authenticate('JWT', { session: false }));
      const response = await model2.run({
      url: '/odata/SAP/ZSD_WF_GETDATA_SOLIC_DSCTO_SRV/SolicitudesSet?&$filter=%20FechaRecepSol%20eq%20datetime%272021-08-16T10:00:00%27%20and%20HoraRecepSol%20ge%20time%27PT00H00M00S%27%20and%20Estatus%20eq%20%27P%27',
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${req.user.token}`
      }
    });
    


    const model2 = await cds.connect.to('ODATA_ECC1')



    const { SolicitudesSet, ParametrosSet } = model2.entities

   ///odata/SAP/ZSD_WF_GETDATA_SOLIC_DSCTO_SRV/ParametrosSet?&$filter=%20FechaRecepSol%20eq%20datetime%272021-08-16T10:00:00%27%20and%20HoraRecepSol%20ge%20time%27PT00H00M00S%27%20and%20Estatus%20eq%20%27P%27&$expand=Parametros_to_Solicitudes
/////odata/SAP/ZSD_WF_GETDATA_SOLIC_DSCTO_SRV/
//ParametrosSet?&$filter= 
//FechaRecepSol eq datetime'2021-08-16T10:00:00' and 
//HoraRecepSol ge time'PT00H00M00S' and 
//Estatus eq 'P'&$expand=Parametros_to_Solicitudes
  
const queryResult = await model2.run(SELECT(SolicitudesSet).where(`FechaRecepSol = '2021-08-16T10:00:00' and HoraRecepSol = '00:00:00' and  Estatus = 'P'`))

    console.log("queryResult", queryResult)

    return queryResult;

    */
   

}


async function Replicar2(req) {


    try {
        // Conectar al destino configurado
        const destination = await cds.connect.to('ODATA_ECC1');
        var jwt = _getJWT(req);
        console.log("--------->1",jwt )

        
      console.log('Connecting to destination', destination);

      // Configuración de la solicitud OData V2
      const odataRequestConfig = new ODataRequestConfig({
        method: 'GET',
        url: '/odata/SAP/ZSD_WF_GETDATA_SOLIC_DSCTO_SRV/SolicitudesSet?&$filter=%20FechaRecepSol%20eq%20datetime%272021-08-16T10:00:00%27%20and%20HoraRecepSol%20ge%20time%27PT00H00M00S%27%20and%20Estatus%20eq%20%27P%27',
      });
      const odataRequest = new ODataRequest(odataRequestConfig);

      const response = await executeHttpRequest(destination, odataRequest);

      console.log('Response from service:', response);
      return response.data;

    /*      // Realizar la llamada HTTP utilizando @sap-cloud-sdk/core
      const response2 = await executeHttpRequest(destination, {
        method: 'GET',
        url: '/odata/SAP/ZSD_WF_GETDATA_SOLIC_DSCTO_SRV/SolicitudesSet?&$filter=%20FechaRecepSol%20eq%20datetime%272021-08-16T10:00:00%27%20and%20HoraRecepSol%20ge%20time%27PT00H00M00S%27%20and%20Estatus%20eq%20%27P%27',
      });

      return response2.data;
      */

/*
        console.log(req.user);
        // Hacer una llamada al servicio externo
        const response = await destination.run({
          url: '/odata/SAP/ZSD_WF_GETDATA_SOLIC_DSCTO_SRV/SolicitudesSet?&$filter=%20FechaRecepSol%20eq%20datetime%272021-08-16T10:00:00%27%20and%20HoraRecepSol%20ge%20time%27PT00H00M00S%27%20and%20Estatus%20eq%20%27P%27',
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${req.user.token}`
          }
        });
  
        return response;
        */
      } catch (error) {
        console.error('Error during request to remote service:', error);
        req.error(500, 'Failed to load destinationsss');
      }


    /*
    console.log("dedededed");

    const model2 = await cds.connect.to('ODATA_ECC1')

    

    const { SolicitudesSet, ParametrosSet } = model2.entities

   ///odata/SAP/ZSD_WF_GETDATA_SOLIC_DSCTO_SRV/ParametrosSet?&$filter=%20FechaRecepSol%20eq%20datetime%272021-08-16T10:00:00%27%20and%20HoraRecepSol%20ge%20time%27PT00H00M00S%27%20and%20Estatus%20eq%20%27P%27&$expand=Parametros_to_Solicitudes
/////odata/SAP/ZSD_WF_GETDATA_SOLIC_DSCTO_SRV/
//ParametrosSet?&$filter= 
//FechaRecepSol eq datetime'2021-08-16T10:00:00' and 
//HoraRecepSol ge time'PT00H00M00S' and 
//Estatus eq 'P'&$expand=Parametros_to_Solicitudes
  
const queryResult = await model2.run(SELECT(SolicitudesSet).where(`FechaRecepSol = '2021-08-16T10:00:00' and HoraRecepSol = '00:00:00' and  Estatus = 'P'`))

    console.log("queryResult", queryResult)

    return queryResult;
    */

}

async function VerSolicitudes(req) {


    const model2 = await cds.connect.to('Workflow_Precios')

    const { COLUMNAS_SEC } = model2.entities

    const queryResult = await model2.run(SELECT(COLUMNAS_SEC))

    console.log(queryResult)

    return queryResult;

}

module.exports = {
    Replicar, VerSolicitudes, Replicar2
}