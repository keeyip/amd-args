PURPOSE
========
Generate function arguments from AMD `define([..], function (omg_lots_of_stuff_in_here) {..})` calls

USAGE: `amd-args file.js > file-new.js`

INSTALL: clone this repo, then `npm link .`

LICENSE: Public domain
DISCLAIMER: Some code taken from UglifyJS 2

SAMPLES
========
SAMPLE INPUT:
    
```
    define(['jquery', 'underscore'], function myamdfunc() {
        return false;
    });

    define(['jquery', 'underscore'], function myamdfunc(blank) {
        return false;
    });

    define(['jquery', 'underscore'], function myamdfunc ($,_) {
        return false;
    });

    define(['jquery', 'underscore'], function () {
        return false;
    });

    define(['jquery', 'underscore'], function (blank) {
        return false;
    });

    define(['jquery', 'underscore'], function($,_) {
        return false;
    });

    define(['jquery', 'underscore',
        'more', 'api/stuff',
    ], function($,_) {
        return false;
    });

    define(['jquery', 'underscore',
        'more', 'api/stuff',
    ], function($,_) {
        return {
            a: 'hi',
            b: 'hey',
            c: 'hihi'
        };
    });
```

SAMPLE OUTPUT:

```
    define(['jquery', 'underscore'], function myamdfunc (jquery, underscore) {return false;
    });

    define(['jquery', 'underscore'], function myamdfunc (jquery, underscore) {return false;
    });

    define(['jquery', 'underscore'], function myamdfunc (jquery, underscore) {return false;
    });

    define(['jquery', 'underscore'], function (jquery, underscore) {return false;
    });

    define(['jquery', 'underscore'], function (jquery, underscore) {return false;
    });

    define(['jquery', 'underscore'], function (jquery, underscore) {return false;
    });

    define(['jquery', 'underscore',
        'more', 'api/stuff',
    ], function (jquery, underscore, more, stuff) {return false;
    });

    define(['jquery', 'underscore',
        'more', 'api/stuff',
    ], function (jquery, underscore, more, stuff) {return {
            a: 'hi',
            b: 'hey',
            c: 'hihi'
        };
    });
```




