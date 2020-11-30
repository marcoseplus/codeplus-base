// CRUD MasterData

function enviaDados () {
    
    let settings = {
        "url": "/api/dataentities/{{data_entity_name}}/documents",
		"type": "POST",
        "headers": {
          "Content-Type": "application/json",
          "Accept": "application/vnd.vtex.ds.v10+json"
        },
        "data": JSON.stringify({
            "nome" : "teste doc.",
            "email" : "teste@doc.com",
            "mensagem" : "Lorem teste ipsum"
        })
    };
      
    $.ajax(settings).done(function (response) {
        console.log(response);
    });

} enviaDados()

function buscaDados () {
    
    let settings = {
    "url": "/api/dataentities/{{data_entity_name}}/search?email=teste@doc.com&_fields=email,nome,mensagem",
    "type": "GET",
    "timeout": 0,
    "headers": {
        "Content-Type": "application/json; charset=utf-8",
        "Accept": "application/vnd.vtex.ds.v10+json",
        "crossDomain": true,
        "REST-Range": "resources=0-999"
    },
    "processData": false,
    "mimeType": "application/json",
    "contentType": false
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });

} buscaDados()

function deletaDados () {

    let settings = {
        "url": "/api/dataentities/{{data_entity_name}}/search?email=teste@dochahaha.com.br&_fields=id",
        "type": "GET",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json; charset=utf-8",
            "Accept": "application/vnd.vtex.ds.v10+json",
            "crossDomain": true,
            "REST-Range": "resources=0-999"
        },
        "processData": false,
        "mimeType": "application/json",
        "contentType": false
    };
    
    $.ajax(settings).done(function (response) {
        let idPostagem = response[0].id
        let settings = {
            "url": "/api/dataentities/{{data_entity_name}}/documents/" + idPostagem,
            "type": "DELETE",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json",
              "Accept": "application/vnd.vtex.ds.v10+json"
            },
        };
          
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });

} deletaDados ()

function editaDados () {

    let settings = {
        "url": "/api/dataentities/{{data_entity_name}}/search?email=teste@doc.com&_fields=id",
        "type": "GET",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json; charset=utf-8",
            "Accept": "application/vnd.vtex.ds.v10+json",
            "crossDomain": true,
            "REST-Range": "resources=0-999"
        },
        "processData": false,
        "mimeType": "application/json",
        "contentType": false
    };
    
    $.ajax(settings).done(function (response) {
        let idPostagem = response[0].id
        let settings = {
            "url": "/api/dataentities/{{data_entity_name}}/documents",
            "type": "PATCH",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json",
              "Accept": "application/vnd.vtex.ds.v10+json"
            },
            "data": JSON.stringify({
                "id" : idPostagem,
                "email" : "teste@doc2.com.br"
            })
        };
        
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });

} editaDados ()
