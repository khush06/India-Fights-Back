$(document).ready(function(){
    $('#search').on("click", function(){
      document.getElementById("help").innerHTML = "";
      fetch('https://api.covid19india.org/resources/resources.json')
              .then(response => response.json())
                     .then(users => {
                      users.resources.forEach(function(user) {
                            if((document.getElementById("userinput").value.localeCompare(`${user.city}`,'en',{ sensitivity: 'base' }))==0
                            ||(document.getElementById("userinput").value.localeCompare(`${user.state}`,'en',{ sensitivity: 'base' }))==0 )
                            {
                              var element = document.createElement("p");
    
                                element.innerHTML = "<strong>Organisation : </strong>"+`${user.nameoftheorganisation}` + "<br>"+ "<strong>Service provided : </strong>" + `${user.descriptionandorserviceprovided}` + "<br>" +
                              "<strong>Contact details : </strong>"+  `${user.contact}` + "<br>"+`${user.phonenumber}` + "<br>";
    
                             
    
    
                                 document.getElementById("help").appendChild(element);
        
                            }
    
    
                      });
    
                    });
    
                    });
    });
    