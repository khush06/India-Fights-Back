var url = 'https://newsapi.org/v2/top-headlines?' +
'country=in&' +
    'q=Coronavirus&' +
    'from=2020-05-16&' +
    'sortBy=popularity&' +
    'apiKey=078a7b5ea2714959a6da14ae1629c942';
    const proxy = "https://cors-anywhere.herokuapp.com/";
var req = new Request(proxy + url);
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