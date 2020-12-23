var url = 'https://newsapi.org/v2/top-headlines?' +
'country=in&' +
    'q=Coronavirus&' +
    'from=2020-05-16&' +
    'sortBy=popularity&' +
    'apiKey=45ae89128a2f4b8d93c95d2bffce44c8';
   // const proxy = "https://cors-anywhere.herokuapp.com/";
var req = new Request(url);
var response='';

$(document).ready(function(){
fetch(req)
    .then(response => response.json())  
    .then(users => {
                  users.articles.forEach(function(user) {
                    if(`${user.title}`!="null")
                    { 
                      // response+='<div class="item">' + `${user.description}`+ '</div>';
                     
                      var totalItems = $(".carousel-item").length;
                    if(totalItems === 0) {
                        itemClass = "carousel-item active";
                    }
                    else {
                        itemClass = "carousel-item";
                        
                    }
                    
                   
                    $('.carousel-inner').append('<div class="'+itemClass+'"><a target="_blank" href="'+`${user.url}` +'">' + `${user.title}`+
                          '</div></a>');
                    }
                  });
                  
                  
     });
  });
