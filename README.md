# jancode

Utilities functions for Japanese Article Number code (JANコード)

## Installation

```
npm install -d jancode
```

## Usage

```js
const jancode = require('jancode');

// Output JAN code
jancode.create({code: 32433, year: 2019, month: 3});
// => 4910324330393

// Extract a magazine code from JAN code
jancode.getMagazineCode(4910234234)
// => '32433'
```
