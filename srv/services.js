const cds = require("@sap/cds");
const {Replicar, VerSolicitudes} = require("./funciones")


module.exports = (REPSOLECC)=>{
    REPSOLECC.on ('replicar', req => Replicar(req))
    REPSOLECC.on ('versol', req => VerSolicitudes(req))
  }

