    if (getCookie("stringofletters") != "false") {
        document.cookie = "stringofletters=false";
        window.location.href="/";
    }
    if (getCookie("stringofletters2") != "false") {
        document.cookie = "stringofletters2=false";
        location.href="/orithegame/";
    }

   //from http://www.w3schools.com/js/js_cookies.asp
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length,c.length);
            }
        }
        return "";
    }   
