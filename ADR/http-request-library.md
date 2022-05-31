# HTTP REQUEST LIBRARY

When facing the choice of how to make an http request in JavaScript there are two main options that come to mind. You can either use play js `fetch` or use `axios`. There are other external libraries like `got` and `request` but those are not nearly as used and I don't see I real reason to experiment with them
![Bildschirmfoto 2022-05-26 um 12 34 14](https://user-images.githubusercontent.com/48081621/170471969-8edb90b9-c389-4f82-88c3-2030b4605d25.png)

## Axios vs fetch

Even though fetch is native and installing axios would mean extra dependencies I feel like axios is worth because of it's ease of use and extra features

Fetch get example:

```bash
const response = await fetch('http://example.com')
const data = await response.json()
```

Axios get example

```bash
const response = await axios.get('http://example.com')
const data = response.data
```

Fetch post example:

```bash
const message = { username: 'example' };

const response = await fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(message),
})
const data = await response.json()
```

Axios post example:

```bash
const message = { username: 'example' };

const response = await axios.post('https://example.com/profile', message)
const data = response.data
```
