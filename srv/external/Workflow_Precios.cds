/* checksum : 01cae9f5dac52c162e83032ae6739715 */
@cds.external : true
@m.IsDefaultEntityContainer : 'true'
service Workflow_Precios {};

@cds.external : true
@cds.persistence.skip : true
entity Workflow_Precios.COLUMNAS_SEC {
  key COLUMN_NAME : String(256) not null;
};

@cds.external : true
@cds.persistence.skip : true
entity Workflow_Precios.ZVREGLALOCAL {
  key CODLOCAL : String(10) not null;
  DESCLOCAL : String(50);
};

@cds.external : true
@cds.persistence.skip : true
entity Workflow_Precios.ZVREGLAMATERIAL {
  key CODMATERIAL : String(40) not null;
  DESCMATERIAL : String(50);
};

@cds.external : true
@cds.persistence.skip : true
entity Workflow_Precios.ZVREGLASUCURSALLOC {
  key CODSUCURSALLOC : String(4) not null;
  DESCSUCURSALLOC : String(20);
};

@cds.external : true
@cds.persistence.skip : true
entity Workflow_Precios.ZVREGLAMOTIVO {
  key CODMOTIVO : String(3) not null;
  DESCMOTIVO : String(50);
};

@cds.external : true
@cds.persistence.skip : true
entity Workflow_Precios.ZVREGLACLIENTE {
  key CODCLIENTE : String(10) not null;
  DESCCLIENTE : String(50);
};

@cds.external : true
@cds.persistence.skip : true
entity Workflow_Precios.ZVREGLATIPOCLIENTE {
  key CODTIPOCLIENTE : String(2) not null;
  DESCTIPOCLIENTE : String(20);
};

@cds.external : true
@cds.persistence.skip : true
entity Workflow_Precios.ZVREGLAGRUPOCONDCLIENTE {
  key CODGRCONDCLIENTE : String(2) not null;
  DESCGRCONDCLIENTE : String(20);
};

@cds.external : true
@cds.persistence.skip : true
entity Workflow_Precios.ZVSOL_DESCUSERAPROB {
  key CODUSERAPROB : String(12) not null;
  DESCUSERAPROB : String(50);
};

@cds.external : true
@cds.persistence.skip : true
entity Workflow_Precios.ZVSOL_TIPOPROCES {
  key TIPOPROCES : String(1) not null;
};

@cds.external : true
@cds.persistence.skip : true
entity Workflow_Precios.ZVSOL_CODMATERIAL {
  key CODMATERIAL : String(40) not null;
  DESCMATERIAL : String(50);
};

@cds.external : true
@cds.persistence.skip : true
entity Workflow_Precios.ZVSOL_CODSUCURSALLOC {
  key CODSUCURSALLOC : String(4) not null;
  DESCSUCURSALLOC : String(20);
};

@cds.external : true
@cds.persistence.skip : true
entity Workflow_Precios.ZVSOL_CODTIPOCLIENTE {
  key CODTIPOCLIENTE : String(2) not null;
  DESCTIPOCLIENTE : String(20);
};

@cds.external : true
@cds.persistence.skip : true
entity Workflow_Precios.ZVSOL_DESCTIPOCLIENTE {
  key CODTIPOCLIENTE : String(2) not null;
  DESCTIPOCLIENTE : String(20);
};

@cds.external : true
@cds.persistence.skip : true
entity Workflow_Precios.ZSD_TB_CAMPSEC {
  key IDCAMPSEC : UUID not null;
  FK_ZSD_TB_SECUENC_IDSECUENCIA : UUID;
  CAMPO : String(30);
  @cds.ambiguous : 'missing on condition?'
  FK_ZSD_TB_SECUENC : Association to Workflow_Precios.ZSD_TB_SECUENC on FK_ZSD_TB_SECUENC.IDSECUENCIA = FK_ZSD_TB_SECUENC_IDSECUENCIA;
};

@cds.external : true
@cds.persistence.skip : true
entity Workflow_Precios.ZSD_TB_SECUENC {
  key IDSECUENCIA : UUID not null;
  DESCRSEC : String(100);
  PRIORIDAD : Integer;
  ACTIVA : Boolean;
  @cds.ambiguous : 'missing on condition?'
  CAMPOS : Association to many Workflow_Precios.ZSD_TB_CAMPSEC on CAMPOS.FK_ZSD_TB_SECUENC_IDSECUENCIA = IDSECUENCIA;
  @cds.ambiguous : 'missing on condition?'
  REGLAS : Association to many Workflow_Precios.ZSD_TB_REGLAS on REGLAS.FK_ZSD_TB_SECUENC_IDSECUENCIA = IDSECUENCIA;
  @cds.ambiguous : 'missing on condition?'
  SOLICITUDES : Association to many Workflow_Precios.ZSD_TB_SOL_MAT_DCTO_BTP on SOLICITUDES.FK_ZSD_TB_SECUENC_IDSECUENCIA = IDSECUENCIA;
};

@cds.external : true
@cds.persistence.skip : true
entity Workflow_Precios.ZVINFOMAXREGLA {
  key IDREGLA : String(36) not null;
  FK_ZSD_TB_SECUENC_IDSECUENCIA : String(36);
  FECHACARGA : String(10);
  HORACARGA : Time;
  PRECIOMIN : Decimal(13, 2);
  PORCENTAJEMIN : Decimal(13, 2);
  UMPRECIO : String(3);
  CANTIDAD : Decimal(13, 2);
  FECHA_CARGA : String(50);
  CODMOTIVO : String(3);
  DESCMOTIVO : String(50);
  CODLOCAL : String(10);
  DESCLOCAL : String(50);
  CODMATERIAL : String(40);
  DESCMATERIAL : String(50);
  CODCLIENTE : String(10);
  DESCCLIENTE : String(50);
  CODSUCURSALLOC : String(4);
  DESCSUCURSALLOC : String(20);
  CODTIPOCLIENTE : String(2);
  DESCTIPOCLIENTE : String(20);
  CODSBTPCLIENTE : String(2);
  DESCSBTPCLIENTE : String(20);
  CODGRCONDCLIENTE : String(2);
  DESCGRCONDCLIENTE : String(20);
  MONEDA : String(3);
  UMCANTIDAD : String(3);
  TOLERANCIAPRECIO : Decimal(13, 2);
  TOLERANCIAPROCENT : Decimal(13, 3);
  PROCMANUAL : String(1);
  APLICAPORCENT : String(1);
  LIMFEENTREGA : Integer;
  DESCRSEC : String(100);
  DESCRSECDATOS : String(100);
  USUARIO : String(100);
};

@cds.external : true
@cds.persistence.skip : true
entity Workflow_Precios.ZSD_TB_REGLAS {
  key IDREGLA : UUID not null;
  FK_ZSD_TB_SECUENC_IDSECUENCIA : UUID;
  FECHACARGA : String(10);
  HORACARGA : Time;
  CODMOTIVO : String(3);
  DESCMOTIVO : String(50);
  CODLOCAL : String(10);
  DESCLOCAL : String(50);
  CODMATERIAL : String(40);
  DESCMATERIAL : String(50);
  CODCLIENTE : String(10);
  DESCCLIENTE : String(50);
  CODSUCURSALLOC : String(4);
  DESCSUCURSALLOC : String(20);
  CODTIPOCLIENTE : String(2);
  DESCTIPOCLIENTE : String(20);
  CODSBTPCLIENTE : String(2);
  DESCSBTPCLIENTE : String(20);
  CODGRCONDCLIENTE : String(2);
  DESCGRCONDCLIENTE : String(20);
  PRECIOMIN : Decimal(13, 2);
  PORCENTAJEMIN : Decimal(13, 3);
  MONEDA : String(3);
  UMPRECIO : String(3);
  CANTIDAD : Decimal(15, 3);
  UMCANTIDAD : String(3);
  TOLERANCIAPRECIO : Decimal(13, 2);
  TOLERANCIAPROCENT : Decimal(13, 3);
  PROCMANUAL : String(1);
  APLICAPORCENT : String(1);
  LIMFEENTREGA : Integer;
  USUARIO : String(100);
  DESCRSEC : String(100);
  DESCRSECDATOS : String(100);
  FECHACARGA_REAL : String(10);
  HORACARGA_REAL : Time;
  @cds.ambiguous : 'missing on condition?'
  FK_ZSD_TB_SECUENC : Association to Workflow_Precios.ZSD_TB_SECUENC on FK_ZSD_TB_SECUENC.IDSECUENCIA = FK_ZSD_TB_SECUENC_IDSECUENCIA;
  @cds.ambiguous : 'missing on condition?'
  SOLICITUDES : Association to many Workflow_Precios.ZSD_TB_SOL_MAT_DCTO_BTP on SOLICITUDES.FK_ZSD_TB_REGLAS_IDREGLA = IDREGLA;
};

@cds.external : true
@cds.persistence.skip : true
entity Workflow_Precios.ZSD_TB_SOL_MAT_DCTO_BTP {
  key IDDCTOBTP : UUID not null;
  FK_ZSD_TB_SECUENC_IDSECUENCIA : UUID;
  FK_ZSD_TB_REGLAS_IDREGLA : UUID;
  CODEJECUTIVO : String(12);
  DESCEJECUTIVO : String(50);
  PEDIDO : String(10);
  POSPEDIDO : String(6);
  CODLOCAL : String(10);
  DESCLOCAL : String(50);
  CODPREVENTA : String(10);
  DESCPREVENTA : String(50);
  CODVENDEDOR : String(10);
  DESCVENDEDOR : String(50);
  CODCLIENTE : String(10);
  DESCCLIENTE : String(50);
  CODCENTRO : String(4);
  CODMATERIAL : String(40);
  DESCMATERIAL : String(50);
  CODSECTOR : String(2);
  DESCSECTOR : String(20);
  CODESTADO : String(5);
  DESCESTADO : String(30);
  CODCLASIFICACION : String(5);
  DESCCLASIFICACION : String(30);
  PRECIOLISTAUNI : Decimal(13, 2);
  VALORRECARGOUNI : Decimal(13, 2);
  PRECIOWFCONDSCTOUNI : Decimal(13, 2);
  CANTIDAD : Decimal(15, 3);
  UMV : String(3);
  UMP : String(3);
  PORCENTAJEDSCTO : Decimal(13, 3);
  FECHADESPACHO : String(10);
  CODMOTIVO : String(3);
  DESCMOTIVO : String(50);
  ESTATUS : String(1);
  CODUSERAPROB : String(12);
  DESCUSERAPROB : String(50);
  @sap.display.format : 'Date'
  FECHARECEPSOL : Date;
  HORARECEPSOL : Time;
  FECHAAPROBSOL : String(10);
  HORAAPROBSOL : String(8);
  CODSUCURSALLOC : String(4);
  DESCSUCURSALLOC : String(20);
  CODTIPOCLIENTE : String(2);
  DESCTIPOCLIENTE : String(20);
  CODSBTPCLIENTE : String(2);
  DESCSBTPCLIENTE : String(20);
  CODGRCONDCLIENTE : String(2);
  DESCGRCONDCLIENTE : String(20);
  TIPOPROCES : String(1);
  CODMOTDERRECH : String(3);
  MOTDERRECH : String(50);
  PRECIOREGLA : Decimal(13, 2);
  CANTREGLA : Decimal(15, 3);
  PROCENTREGLA : Decimal(13, 3);
  @sap.display.format : 'Date'
  FECHARECEPSOL_AUX : Date;
  HORARECEPSOL_AUX : Time;
  @cds.ambiguous : 'missing on condition?'
  FK_ZSD_TB_SECUENC : Association to Workflow_Precios.ZSD_TB_SECUENC on FK_ZSD_TB_SECUENC.IDSECUENCIA = FK_ZSD_TB_SECUENC_IDSECUENCIA;
  @cds.ambiguous : 'missing on condition?'
  FK_ZSD_TB_REGLAS : Association to Workflow_Precios.ZSD_TB_REGLAS on FK_ZSD_TB_REGLAS.IDREGLA = FK_ZSD_TB_REGLAS_IDREGLA;
};

@cds.external : true
@cds.persistence.skip : true
entity Workflow_Precios.ZSD_TB_MOT_RECHAZO_DERIVACION {
  key IDMOTIVOINTERNO : UUID not null;
  key IDMOTIVO : String(3) not null;
  key IsActiveEntity : Boolean not null;
  DESCMOTIVO : String(60);
  HasActiveEntity : Boolean not null;
  HasDraftEntity : Boolean not null;
  DraftAdministrativeData_DraftUUID : UUID;
  @cds.ambiguous : 'missing on condition?'
  DraftAdministrativeData : Association to Workflow_Precios.DraftAdministrativeData on DraftAdministrativeData.DraftUUID = DraftAdministrativeData_DraftUUID;
  @cds.ambiguous : 'missing on condition?'
  SiblingEntity : Association to Workflow_Precios.ZSD_TB_MOT_RECHAZO_DERIVACION {  };
} actions {
  action ZSD_TB_MOT_RECHAZO_DERIVACION_draftPrepare(
    SideEffectsQualifier : LargeString
  ) returns Workflow_Precios.ZSD_TB_MOT_RECHAZO_DERIVACION;
  action ZSD_TB_MOT_RECHAZO_DERIVACION_draftActivate() returns Workflow_Precios.ZSD_TB_MOT_RECHAZO_DERIVACION;
  action ZSD_TB_MOT_RECHAZO_DERIVACION_draftEdit(
    PreserveChanges : Boolean
  ) returns Workflow_Precios.ZSD_TB_MOT_RECHAZO_DERIVACION;
};

@cds.external : true
@cds.persistence.skip : true
entity Workflow_Precios.ZSD_TB_LOGICAEVAL {
  key IDLOGICAEVAL : UUID not null;
  key IsActiveEntity : Boolean not null;
  DESCRLOGICA : String(50);
  FUNCION : String(50);
  HasActiveEntity : Boolean not null;
  HasDraftEntity : Boolean not null;
  DraftAdministrativeData_DraftUUID : UUID;
  @cds.ambiguous : 'missing on condition?'
  MOTIVOS : Association to many Workflow_Precios.ZSD_TB_MOTIVOS {  };
  @cds.ambiguous : 'missing on condition?'
  DraftAdministrativeData : Association to Workflow_Precios.DraftAdministrativeData on DraftAdministrativeData.DraftUUID = DraftAdministrativeData_DraftUUID;
  @cds.ambiguous : 'missing on condition?'
  SiblingEntity : Association to Workflow_Precios.ZSD_TB_LOGICAEVAL {  };
} actions {
  action ZSD_TB_LOGICAEVAL_draftPrepare(
    SideEffectsQualifier : LargeString
  ) returns Workflow_Precios.ZSD_TB_LOGICAEVAL;
  action ZSD_TB_LOGICAEVAL_draftActivate() returns Workflow_Precios.ZSD_TB_LOGICAEVAL;
  action ZSD_TB_LOGICAEVAL_draftEdit(
    PreserveChanges : Boolean
  ) returns Workflow_Precios.ZSD_TB_LOGICAEVAL;
};

@cds.external : true
@cds.persistence.skip : true
entity Workflow_Precios.ZSD_TB_MOTIVOS {
  key IDMOTIVOINTERNO : UUID not null;
  key IDMOTIVO : String(3) not null;
  key IsActiveEntity : Boolean not null;
  FK_ZSD_TB_LOGICAEVAL_IDLOGICAEVAL : UUID;
  DESCRMOTIVO : String(50);
  EVALCADUC : Boolean;
  HasActiveEntity : Boolean not null;
  HasDraftEntity : Boolean not null;
  DraftAdministrativeData_DraftUUID : UUID;
  @cds.ambiguous : 'missing on condition?'
  FK_ZSD_TB_LOGICAEVAL : Association to Workflow_Precios.ZSD_TB_LOGICAEVAL {  };
  @cds.ambiguous : 'missing on condition?'
  DraftAdministrativeData : Association to Workflow_Precios.DraftAdministrativeData on DraftAdministrativeData.DraftUUID = DraftAdministrativeData_DraftUUID;
  @cds.ambiguous : 'missing on condition?'
  SiblingEntity : Association to Workflow_Precios.ZSD_TB_MOTIVOS {  };
} actions {
  action ZSD_TB_MOTIVOS_draftPrepare(
    SideEffectsQualifier : LargeString
  ) returns Workflow_Precios.ZSD_TB_MOTIVOS;
  action ZSD_TB_MOTIVOS_draftActivate() returns Workflow_Precios.ZSD_TB_MOTIVOS;
  action ZSD_TB_MOTIVOS_draftEdit(
    PreserveChanges : Boolean
  ) returns Workflow_Precios.ZSD_TB_MOTIVOS;
};

@cds.external : true
@cds.persistence.skip : true
entity Workflow_Precios.ZSD_TB_HORARIO {
  key IDHORARIO : UUID not null;
  key IsActiveEntity : Boolean not null;
  HORAFIN : Time;
  HasActiveEntity : Boolean not null;
  HasDraftEntity : Boolean not null;
  DraftAdministrativeData_DraftUUID : UUID;
  @cds.ambiguous : 'missing on condition?'
  DraftAdministrativeData : Association to Workflow_Precios.DraftAdministrativeData on DraftAdministrativeData.DraftUUID = DraftAdministrativeData_DraftUUID;
  @cds.ambiguous : 'missing on condition?'
  SiblingEntity : Association to Workflow_Precios.ZSD_TB_HORARIO {  };
} actions {
  action ZSD_TB_HORARIO_draftPrepare(
    SideEffectsQualifier : LargeString
  ) returns Workflow_Precios.ZSD_TB_HORARIO;
  action ZSD_TB_HORARIO_draftActivate() returns Workflow_Precios.ZSD_TB_HORARIO;
  action ZSD_TB_HORARIO_draftEdit(
    PreserveChanges : Boolean
  ) returns Workflow_Precios.ZSD_TB_HORARIO;
};

@cds.external : true
@cds.persistence.skip : true
entity Workflow_Precios.ZSD_TB_USUARIOS {
  key IDUSUARIO : UUID not null;
  key IsActiveEntity : Boolean not null;
  USUARIOSAP : String(20);
  USUARIOBTP : String(50);
  HasActiveEntity : Boolean not null;
  HasDraftEntity : Boolean not null;
  DraftAdministrativeData_DraftUUID : UUID;
  @cds.ambiguous : 'missing on condition?'
  DraftAdministrativeData : Association to Workflow_Precios.DraftAdministrativeData on DraftAdministrativeData.DraftUUID = DraftAdministrativeData_DraftUUID;
  @cds.ambiguous : 'missing on condition?'
  SiblingEntity : Association to Workflow_Precios.ZSD_TB_USUARIOS {  };
} actions {
  action ZSD_TB_USUARIOS_draftPrepare(
    SideEffectsQualifier : LargeString
  ) returns Workflow_Precios.ZSD_TB_USUARIOS;
  action ZSD_TB_USUARIOS_draftActivate() returns Workflow_Precios.ZSD_TB_USUARIOS;
  action ZSD_TB_USUARIOS_draftEdit(
    PreserveChanges : Boolean
  ) returns Workflow_Precios.ZSD_TB_USUARIOS;
};

@cds.external : true
@cds.persistence.skip : true
entity Workflow_Precios.DraftAdministrativeData {
  key DraftUUID : UUID not null;
  @odata.Type : 'Edm.DateTimeOffset'
  @odata.Precision : 7
  CreationDateTime : Timestamp;
  CreatedByUser : String(256);
  DraftIsCreatedByMe : Boolean;
  @odata.Type : 'Edm.DateTimeOffset'
  @odata.Precision : 7
  LastChangeDateTime : Timestamp;
  LastChangedByUser : String(256);
  InProcessByUser : String(256);
  DraftIsProcessedByMe : Boolean;
};

