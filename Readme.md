# getscript

async js loader for browsers.

```js
getscript('/example.js', function (err, res) {
  if (err) throw err; // throws URIError
  res.uri; // example.js
  res.event; // onload event
});
```

# license

mit

