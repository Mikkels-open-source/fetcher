function fetcher (url){
    return new Promise (function (resolve, reject) {
        if(window.fetch){
            return fetch(url)
                .then(function(response){
                    return response.json()
                })
                .then(function (data) {
                    resolve(data);
                })
        }
    
        else if (window.XMLHttpRequest) {
            var xmlhttp;
            if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest();
            } else {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
    
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    resolve(JSON.parse(this.responseText));
                }
            };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
        }
    })
}

export default fetcher;