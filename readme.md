# is-date-like [![Build Status](https://travis-ci.org/bendrucker/is-date-like.svg?branch=master)](https://travis-ci.org/bendrucker/is-date-like)

> Check if a value is a date or ISO string


## Install

```
$ npm install --save is-date-like
```


## Usage

```js
var isDateLike = require('is-date-like')

isDateLike(new Date())
//=> true

isDateLike(new Date().toISOString())
//=> true
```

## API

#### `isDateLike(value)` -> `boolean`

##### value

*Required*  
Type: `date` / `string`

A value to check as a `Date` or ISO date string.


## License

MIT © [Ben Drucker](http://bendrucker.me)
