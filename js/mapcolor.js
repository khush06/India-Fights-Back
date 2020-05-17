$(document).ready(function(){
    $('.map').each(function(){
      console.log("1");
      state = ($(this).attr("name"));
     
      fetch('https://api.rootnet.in/covid19-in/stats/latest')
            .then(response => response.json())
                   .then(users => {
                    users.data.regional.forEach(function(user) {
  
                        
                      output = `${user.loc}`;
                             
                    if(output.localeCompare(state)==0)
                    {
                        $(this).css({fill: "#fae7ad"});
                    }
                    //     {
                    //     //   activ=parseInt(`${user.totalConfirmed}`)-parseInt(`${user.discharged}`)-parseInt(`${user.deaths}`);
                    //     // //   console.log(activ);
                    //     //   if(activ>0 && activ<=1000)
                    //     //   {
                    //       $(this).css({fill: "#fae7ad"});
                    //     //   console.log("1");
                    //     //   }
                        //   if(activ>1000 && activ<=2500)
                        //   {
                        //     console.log("2");
                        //   $(this).css({fill: "#f8d56a"});
                        //   }
                        //   if(activ>2500 && activ<=5000)
                        //   {
                        //     console.log("3");
                        //   $(this).css({fill: "#ffd044"});
                        //   }
                        //   if(activ>5000 && activ<=7000)
                        //   {
                        //     console.log("4");
                        //   $(this).css({fill: "#ffc107"});
                        //   }
                        //   else
                        //   {
                        //   console.log("5");
                        //   $(this).css({fill: "#fc9014"});
                        //   }
                        
                    //     }
  
                    //     output='';
                       });
  
                           
                   });
                  
                });
            });
  
             
             
  