'use strict';

var _resize = require('../resize');

describe('bootstrap resize mixins', function () {
  it('resizable should return a css', function () {
    var css = (0, _resize.resizable)('horizontal');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    resize: horizontal; /* Options: horizontal, vertical, both */\n    overflow: auto; /* Per CSS3 UI, \'resize\' only applies when \'overflow\' isn\'t \'visible\' */\n  ');
  });
  it('should throw error if wrong arguments are passed', function () {
    function errorTesting() {
      (0, _resize.resizable)('test-function');
    }
    expect(errorTesting).toThrowError('Wrong resize value. Available are horizontal,vertical,both');
  });
});