
//@requires : 'authenticated-user'
service REPSOLECC{
  

    entity Campos { 
     key COLUMN_NAME : String(256) not null;
    };

    

    function replicar () returns String;
      function replicar2 () returns String;
    function versol () returns array of Campos;
}