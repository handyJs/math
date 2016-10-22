'use strict';
var mathExt = require('../index');
var assert = require('assert');

describe('#round10', function() {
    var ceil = mathExt.round;
    it('test round ' + 1.234, function() {
        assert.equal(1.23, ceil(1.234, -2));
    });
    it('test round ' + 1.235, function() {
        assert.equal(1.24, ceil(1.235, -2));
    });
});