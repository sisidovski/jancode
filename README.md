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
jancode.create({32433, 2019, 3});
// => 4910324330393

// Extract a magazine code from JAN code
jancode.getPeriodicalPublicationCode('4910234234')
// => '32433'
```
