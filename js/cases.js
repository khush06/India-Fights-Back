$(document).ready(function(){
  

    fetch('https://api.rootnet.in/covid19-in/stats/latest')
          .then(response => response.json())
                 .then(users => {
                  users.data['unofficial-summary'].forEach(function(user) {
                     document.getElementById("state-names").innerHTML="India";
                          document.getElementById("Confirmed").innerHTML=`${user.total}`;
                          document.getElementById("Active").innerHTML=`${user.active}`;
                          document.getElementById("Recovered").innerHTML=`${user.recovered}`;
                          document.getElementById("Deceased").innerHTML=`${user.deaths}`;
                  });
                 });
                });
                 
    
 $(document).ready(function(){
  $('.map').on("mouseover", function(){
     
    state = ($(this).attr("name"));

   
    
      fetch('https://api.rootnet.in/covid19-in/stats/latest')
          .then(response => response.json())
                 .then(users => {
                  users.data.regional.forEach(function(user) {

                    
                    output = `${user.loc}`;
                    
                  if(output.localeCompare(state)==0)
                      {
                        
                          document.getElementById("state-names").innerHTML=state;
                          document.getElementById("Confirmed").innerHTML=`${user.totalConfirmed}`;
                          document.getElementById("Recovered").innerHTML=`${user.discharged}`;
                          document.getElementById("Deceased").innerHTML=`${user.deaths}`;
                          activ=parseInt(`${user.totalConfirmed}`)-parseInt(`${user.discharged}`)-parseInt(`${user.deaths}`);
                          document.getElementById("Active").innerHTML=activ;
                         
                         }

                         output=''; 
                 });
                });
    

  });
 });   



 
 
    





