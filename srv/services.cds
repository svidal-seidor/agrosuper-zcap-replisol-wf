service REPSOLECC{

    entity Campos { 
     key COLUMN_NAME : String(256) not null;
    };

    

    function replicar () returns String;
    function versol () returns array of Campos;
}