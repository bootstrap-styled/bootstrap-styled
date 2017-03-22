'use strict';

var bootstrapStyled = require('../index');

describe('api exports', function () {
  it('should have all exports defined', function () {
    Object.keys(bootstrapStyled).forEach(function (exported) {
      expect(exported).toBeDefined();
    });
  });
});