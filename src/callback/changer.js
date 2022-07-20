const XMLHttpRequest = require('xmlhttprequest');

const API ='http://api.escuelajs.co/api/v1';


function fecData(url_Api, callback ){
    let xhttp =new  XMLHttpRequest();

    xhttp.open('GET',url_Api,true);
    xhttp.onreadystatechange = function(evento){

        if (xhttp.readtyState === 4) {
            if(xhttp.status === 200){
                callback(null,JSON.parse(xhttp.reponseText))

            }else{

                const error = new Error(`Error `+ url_Api);
                return callback(error,null);
            }
        }
    }
    xhttp.send();
}

