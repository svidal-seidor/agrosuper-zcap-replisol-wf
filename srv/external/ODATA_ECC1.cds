/* checksum : 0173fc1bee07137a05321eaf051e8b18 */
@cds.external : true
@m.IsDefaultEntityContainer : 'true'
@sap.supported.formats : 'atom json xlsx'
service ODATA_ECC1 {};

@cds.external : true
@cds.persistence.skip : true
@sap.content.version : '1'
@sap.creatable : 'false'
@sap.updatable : 'false'
@sap.deletable : 'false'
@sap.pageable : 'false'
entity ODATA_ECC1.SolicitudesSet {
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Doc.comercial'
  key Pedido : String(10) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Posición'
  key PosPedido : String(6) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Resultado: Aprobación (A), Rechazado (R), Pendiente (P)'
  key Estatus : String(1) not null;
  @odata.Type : 'Edm.DateTime'
  @odata.Precision : 7
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Fecha recepción solicitud'
  key FechaRecepSol : Timestamp not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Hora recepción solicitud'
  key HoraRecepSol : Time not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Usuario'
  CodEjecutivo : String(12) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Nombre'
  DescEjecutivo : String(35) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Dest.mercancías'
  CodLocal : String(10) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Descripción Local'
  DescLocal : String(50) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Preventa'
  CodPreventa : String(10) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Descripción preventa'
  DescPreventa : String(50) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Vendedor'
  CodVendedor : String(10) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Descripción vendedor'
  DescVendedor : String(50) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Cliente'
  CodCliente : String(10) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Descripción cliente'
  DescCliente : String(50) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Centro'
  CodCentro : String(4) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Material'
  CodMaterial : String(18) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Descripción material'
  DescMaterial : String(50) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Sector'
  CodSector : String(2) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Descripción sector'
  DescSector : String(50) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Estado'
  CodEstado : String(5) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Descrip del parámetr'
  DescEstado : String(30) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Código clasifiación'
  CodClasficacion : String(5) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Descripción clasificación'
  DescClasificacion : String(30) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Precio lista unitario'
  PrecioListaUni : Decimal(14, 3) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Valor recargo unitario'
  ValorRecargoUni : Decimal(14, 3) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Precio WF con dscto unitario'
  PrecioWFConDsctoUni : Decimal(14, 3) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.unit : 'Umv'
  @sap.label : 'cantidad'
  Cantidad : Decimal(15, 3) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.semantics : 'unit-of-measure'
  @sap.label : 'Unidad medida venta'
  Umv : String(3) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.semantics : 'unit-of-measure'
  @sap.label : 'Unidad medida precio'
  Ump : String(3) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Porcentaje descuento'
  PorcentajeDscto : Decimal(14, 3) not null;
  @odata.Type : 'Edm.DateTime'
  @odata.Precision : 7
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Fecha despacho'
  FechaDespacho : Timestamp;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Código motivo'
  CodMotivo : String(3) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Descripción motivo'
  DescMotivo : String(50) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Código usuario aprobador'
  CodUserAprob : String(12) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Descripción usuario aprobador'
  DescUserAprob : String(50) not null;
  @odata.Type : 'Edm.DateTime'
  @odata.Precision : 7
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Fecha aprobación solicitud'
  FechaAprobSol : Timestamp;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Hora aprobación solicitud'
  HoraAprobSol : Time;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Código sucursal local'
  CodSucursalLoc : String(4) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Sucursal local'
  DescSucursalLoc : String(20) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Código tipo cliente'
  CodTipocCiente : String(2) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Tipo cliente'
  DescTipoCliente : String(20) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Código subtipo cliente'
  CodSbtpCliente : String(2) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Subtipo cliente'
  DescSbtpCliente : String(20) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Código grupo cond. cliente'
  CodGrcondCliente : String(2) not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Grupo condición cliente'
  DescGrcondCliente : String(20) not null;
};

@cds.external : true
@cds.persistence.skip : true
@sap.content.version : '1'
@sap.creatable : 'false'
@sap.updatable : 'false'
@sap.deletable : 'false'
@sap.pageable : 'false'
entity ODATA_ECC1.ParametrosSet {
  @odata.Type : 'Edm.DateTime'
  @odata.Precision : 7
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Fecha recepción solicitud'
  key FechaRecepSol : Timestamp not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Hora recepción solicitud'
  key HoraRecepSol : Time not null;
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.label : 'Estatus'
  key Estatus : String(1) not null;
  @cds.ambiguous : 'missing on condition?'
  Parametros_to_Solicitudes : Association to many ODATA_ECC1.SolicitudesSet on Parametros_to_Solicitudes.Estatus = Estatus and Parametros_to_Solicitudes.HoraRecepSol = HoraRecepSol and Parametros_to_Solicitudes.FechaRecepSol = FechaRecepSol;
};

