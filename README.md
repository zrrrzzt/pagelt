[![Build Status](https://travis-ci.org/zrrrzzt/pagelt.svg?branch=master)](https://travis-ci.org/zrrrzzt/pagelt)

# pagelt 

Node.js module/CLI app for measuring time to load for a webpage.

## Installation

```
$ npm install pagelt
```

You can also install it globally to use the CLI version

```
$ npm install pagelt -g
```

## Test

Make sure you have installed [Mocha](http://mochajs.org/) globally or go to the pagelt folder and do an nmp install.

```
$ npm test
```

## Usage - module

Pass the uri for the page you want to measure.

```JavaScript
const plt = require('pagelt')
const uri = 'http://www.google.com' 

plt(uri, (err, data) => {
  if (error) {
    throw error
  }
  console.log(data)
})
```

## Usage - CLI

To use it as a CLI app install it globally.

To display help

```
$ pagelt --help
```

To display version

```
$ pagelt --version
```

Usage:

```
$ pagelt <uri>
```

## Output

```JavaScript
{
  "start": 1400085247092,
  "end": 1400085247396,
  "ms": 304,
  "status": 200
}
```

## License

[MIT](LICENSE)

![Robohash image of pagelt](https://robots.kebabstudios.party/pagelt.png "Robohash image of pagelt")
