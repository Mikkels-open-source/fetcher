# Ajax fetcher

This package makes it eazy to use fetch on website

## Usage

```javascript
import fetcher from "unpkg.com/@mikkelfrederiksen/fetcher@1.0.2/fetcher.js";
```
this line will import everything you need.

When you have imported the package you need to use it. There is two ways to use this package.

**1. using .then**

```javascript
fetcher("link").then(function(data){
    console.log(data)
})
```

**2. async and await**
```javascript
(async function() {
    const data = await fetcher("https://pokeapi.co/api/v2/pokemon");
    console.log(data)
}())
```