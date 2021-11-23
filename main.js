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
    axios.post('https://tataservices.azurewebsites.net/api/login/authenticate', data, {
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
        'Authorization': 'Bearer ' + token                  
      }

    axios.defaults.headers = eheaders;
    
    axios.post('https://tataservices.azurewebsites.net/api/customers/repitepalabra' ,  null,
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
