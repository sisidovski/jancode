# jancode

Utilities functions for Japanese Article Number code (JANコード)

- Extract a periodical publication code (定期刊行物コード) from JAN code.
- Create JAN code from a periodical publication code and arbital published year and date.

## Installation

```
npm install -d jancode
```

## Usage

```js
const jancode = require('jancode');

// Output JAN code
jancode.create({'32433', 2019, 3});
// => "4910324330393"

// Extract periodical publication code from JAN code
jancode.getPeriodicalPublicationCode('4910234234')
// => '32433'
```
