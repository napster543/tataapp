function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }
    else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}

var token;
const headers = {
    'Content-Type': 'application/json',
    'Authorization': ''
  }
addLoadEvent(function() {


    
    const data = {
        Username:"Username",
        Password:"123456"
    
    };
    axios.post('http://tataservices.azurewebsites.net/api/login/authenticate', data, {
          headers : headers
      })
	  .then(function (response) {
        token = response.data;
		console.log(response.data);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
    
   
  });

  function enviardata(){
    const data = {
        palabra: document.getElementById("frase").value,
        buscar: document.getElementById("coincidencia").value
    
    };
    const eheaders = {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlVzZXJuYW1lIiwibmJmIjoxNjM3NjMxNTMyLCJleHAiOjE2Mzc2MzMzMzIsImlhdCI6MTYzNzYzMTUzMiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo0OTIyMCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDkyMjAifQ.CHq_dhEwqJUN-gOgbAAjqIiaEbudBu60-fiaXpKXtOs'                  
      }

    axios.defaults.headers = eheaders;
    
    axios.post('http://tataservices.azurewebsites.net/api/customers/repitepalabra' ,  null,
        { params: data}        
      ).then(function (response) {
          console.log(response);
        document.getElementById("vermensaje").innerHTML = response.data;
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
    
  }
