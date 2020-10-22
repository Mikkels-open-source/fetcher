# Ajax fetcher

This package makes it eazy to use fetch on website

## Npm install
```
npm i @mikkelfrederiksen/fetcher
```

## Usage

```javascript
import fetcher from "unpkg.com/@mikkelfrederiksen/fetcher@2.0.0/fetcher.js";
```
this line will import everything you need.

When you have imported the package you need to use it.

<br>

#### GET Method

When you use the 'GET' Method you need to change 'METHOD' to **get** and feed the function 2 parameters. First a link to the api. Then the key for your api.

```javascript
fetcher.get("LINK", "API Key")
.then(response => console.log(response))
```

<br>

#### POST Method

It's almost the same as 'GET'. Swich 'METHOD' to **post** and add the same 2 parameters as in the **get** method and add another one that is gonna be the data that has to be added to the api. 

the data has to be done in a specific way. It has to be an object that is in a variable.

```javascript
var data = { first_name: 'example' }
```

That variable is the one you put as the 3. parameter


```javascript
fetcher.post("LINK", "API Key", data)
.then(response => console.log(response))
```
<br>

#### PATCH Method

the 'PATCH' method is set up the same way as the 'POST' method only things that is different is that the METHOD has to be changed to **patch**

```javascript
fetcher.patch("LINK", "API Key", data)
.then(response => console.log(response))
```
<br>

#### DELETE Method

The 'DELETE' Method is most like the get method the only thing different is the METHOD.

```javascript
fetcher.delete("LINK", "API Key")
.then(response => console.log(response))
```
This will delete the place you are in the api.