$(document).ready(function(){
    $(function(){
        $("#homeLogo").click(function() {
            location.href = "/";
        });
    });
    
    $(function(){
        $("#menuScroller").click(function(){
            location.href = "/menu";
        });
    });
    
    $(function(){
        $("#login").click(function(){
            location.href = "/profile";
        });
    });
})