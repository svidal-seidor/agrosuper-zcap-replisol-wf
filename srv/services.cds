
//@requires : 'authenticated-user'
service REPSOLECC{
  

    entity Campos { 
     key COLUMN_NAME : String(256) not null;
    };

    

    function replicar (difHour : String) returns String;
    function versol () returns array of Campos;
}