
    function ajax(){

        var id = document.getElementsByTagName("input")[0];
        id = id.value;

        const request = new XMLHttpRequest();
        const url = "../connection/connection.php";
        const params = "id=" + id;
        request.open("POST", url, true);
        //В заголовке говорим что тип передаваемых данных закодирован. 
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.addEventListener("readystatechange", () => {
        
        if(request.readyState === 4 && request.status === 200) {       
                 var ajaxDisplay = document.getElementsByClassName("output")[0];

            if(request.responseText == '0'){
                document.getElementsByClassName("output")[0].style.color = "red";
                ajaxDisplay.innerHTML = " Записей для email " + id + " не обнаруженно! ";
            } else {
                document.getElementsByClassName("output")[0].style.color = "green";
               ajaxDisplay.innerHTML = request.responseText; // в виде текста                
            }

        }
        });
        //	Вот здесь мы и передаем строку с данными, которую формировали выше. И собственно выполняем запрос. 
        request.send(params);
        
    }

          var id = document.getElementsByTagName("input")[1];

        id.oninput = function(){
          var id = document.getElementsByTagName("input")[1];
        id = id.value; 
 
        const request = new XMLHttpRequest();
        const url = "../connection/connection_1.php";
        const params = "id=" + id;
        request.open("POST", url, true);
        //В заголовке говорим что тип передаваемых данных закодирован. 
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.addEventListener("readystatechange", () => {
        
        if(request.readyState === 4 && request.status === 200) {       
                 var ajaxDisplay = document.getElementsByClassName("output")[1];

            if(request.responseText == '0'){
                document.getElementsByClassName("output")[1].style.color = "red";
                ajaxDisplay.innerHTML = " Записей для email " + id + " не обнаруженно! ";
            } else {
                document.getElementsByClassName("output")[1].style.color = "green";
               ajaxDisplay.innerHTML = request.responseText; // в виде текста                
            }

        }
        });
        //	Вот здесь мы и передаем строку с данными, которую формировали выше. И собственно выполняем запрос. 
        request.send(params);
        
    }