$(document).ready(function(){

    fetch('https://api.rootnet.in/covid19-in/stats/latest')
            .then(response => response.json())
            .then(users => {
                users.data.regional.forEach(function(user) {
                out = `${user.loc}`;  

                    $('.map').each(function(j,obj){
                        state = $(this).attr("name");
                        path=$(this);
                       
                       
     
                  
                   
                   
                    
                   
                    if(out.localeCompare(state)==0)
                    {
                        
                        
                          activ=parseInt(`${user.totalConfirmed}`)-parseInt(`${user.discharged}`)-parseInt(`${user.deaths}`);
                        console.log(out+activ);
                          if(activ >= 0 && activ <= 500)
                          {
                            $(this).css({fill: "#ffe9ac"});
                          }
                          if(activ >500 && activ <= 1000)
                          {
                            $(this).css({fill: "#ffe190"});
                          }
                          if(activ > 1000 && activ <= 2500)
                          {
                            
                            path.css({fill: "#fcc35a"});
                          }
                          if(activ > 2200 && activ <= 5000)
                          {
                            
                            path.css({fill: "#ffd044"});
                          }
                          if(activ > 5000 && activ <= 7000)
                          {
                            
                            path.css({fill: "#ffc107"});
                          }
                          if(activ>7000)
                          {
                         
                          path.css({fill: "#fc9014"});
                          }
                        }
                        

  
                         
                       });
                       out='';
  
                           
                   });
                  
                });
            });
  
             
             
  