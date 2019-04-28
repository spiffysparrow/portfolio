        (function($){  

            //cache nav  
            var nav = $("#topNav");  


                      
            //add indicators and hovers to submenu parents  
            nav.find("li").each(function() {  

                if ($(this).find("ul").length > 0) {  

      
                    //show subnav on hover  
                    $(this).mouseenter(function() {  
                        $(this).find("ul").stop(true, true).slideDown();  
                    });  
                              
                    //hide submenus on exit  
                    $(this).mouseleave(function() {  
                        $(this).find("ul").stop(true, true).slideUp();  
                    });  
                }  
            });  
        })(jQuery); 