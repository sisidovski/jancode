# jan

Utilities functions for Japanese Article Number code (JANコード).

## Usage

```
const jan = require('jan');

// Output JAN code
jan.create({magazineCode: 32433, year: 2019, month: 3});
// Extract magazine code from JAN code
jan.extractMagazineCode(4910234234)
```
