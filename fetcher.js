var fetcher = {
    get: function (url, key) {
        return new Promise (function (resolve, reject) {
            if(window.fetch){
                return fetch(url+"?key="+key)
                .then(function(response){
                    return response.json()
                })
                .then(function (data) {
                    resolve(data);
                })
            } else {
                var xmlhttp;
                if (window.XMLHttpRequest) {
                    xmlhttp = new XMLHttpRequest();
                }
                else {
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
    },


    post: function (url, key, userData) {
        return new Promise ((resolve, reject) => {
                if (window.fetch) {
                    return fetch(url, {
                        method: 'POST',
                        headers: {
                            "x-api-key": key,
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(userData)
                    })
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (data) {
                            resolve(data);
                        });
                } else {
                    var xmlhttp;
                    if (window.XMLHttpRequest) {
                        xmlhttp = new XMLHttpRequest();
                    }
                    else {
                        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                    }

                    xmlhttp.open('POST', url);

                    let data = JSON.stringify(userData)

                    xmlhttp.setRequestHeader('Content-Type', 'application/json');
                    xmlhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                    xmlhttp.setRequestHeader('X-api-key', key);

                    xmlhttp.send(data);
                    xmlhttp.onload = () => {
                        resolve(JSON.parse(xmlhttp.response));
                    }
                }

            })
    },



    patch: function (url, key, userData) {
        return new Promise ((resolve, reject) => {
            if (window.fetch) {
                return fetch(url, {
                    method: 'PATCH',
                    headers: {
                        "x-api-key": key,
                    },
                    body: JSON.stringify(userData)
                })
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        resolve(data);
                    });
            } else {
                var xmlhttp;
                if (window.XMLHttpRequest) {
                    xmlhttp = new XMLHttpRequest();
                }
                else {
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }

                xmlhttp.open('PATCH', url);

                let data = JSON.stringify(userData)

                xmlhttp.setRequestHeader('Content-Type', 'application/json');
                xmlhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                xmlhttp.setRequestHeader('X-api-key', key);

                xmlhttp.send(data);
                xmlhttp.onload = () => {
                    resolve(JSON.parse(xmlhttp.response));
                }
            }

        })
    },


    delete: function (url, key) {
        return new Promise ((resolve, reject) => {
            if (window.fetch) {
                return fetch(url, {
                    method: 'DELETE',
                    headers: {
                        "x-api-key": key
                    }
                })
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    resolve(data);
                });
            } else {
                var xmlhttp;
                if (window.XMLHttpRequest) {
                    xmlhttp = new XMLHttpRequest();
                }
                else {
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }

                xmlhttp.open('DELETE', url);

                xmlhttp.setRequestHeader('Content-Type', 'application/json');
                xmlhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                xmlhttp.setRequestHeader('X-api-key', key);

                xmlhttp.send();
                xmlhttp.onload = () => {
                    resolve(JSON.parse(xmlhttp.response));
                }
            }

        })
    }
    
    
}

export default fetcher;