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

define([
    'jquery', /* need this */ 'underscore',
    'more', 'api/stuff'
], function($,/*uh oh*/_) {
    return {
        a: 'hi',
        b: 'hey',
        c: 'hihi'
    };
});
