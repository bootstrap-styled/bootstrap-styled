'use strict';

var _tools = require('../tools');

describe('tools - mapToCssModules', function () {
  var className = void 0;
  beforeAll(function () {
    className = 'btn btn-primary';
  });

  it('mapToCssModules should have a module btn-primary', function () {
    var classNameNew = (0, _tools.mapToCssModules)(className, {
      'btn-primary': 'replacement-primary'
    });
    expect(classNameNew).toEqual('btn replacement-primary');
  });
  it('mapToCssModules', function () {
    var classNameNew = (0, _tools.mapToCssModules)(className, {
      btn: 'replacement-btn'
    });
    expect(classNameNew).toEqual('replacement-btn btn-primary');
  });
  it('mapToCssModules should return unchanged className', function () {
    var classNameNew = (0, _tools.mapToCssModules)(className);
    expect(classNameNew).toEqual('btn btn-primary');
  });
});

describe('tools', function () {
  it('isObject returns true of passed an object', function () {
    var test = {
      test: 'ok'
    };
    var objectTesting = (0, _tools.isObject)(test);
    expect(objectTesting).toEqual(true);
  });
  // it('isFunction returns true of passed an object', () => {
  //   function test(){console.log('test-fucntion')}
  //   const functionTesting = isFunction(test());
  //   expect(functionTesting).toEqual(true);
  // });
  it('getTetherAttachments returns a placement', function () {
    var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)('top center');
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'bottom center',
      targetAttachment: 'top center'
    });
  });
  it('getTetherAttachments returns a placement', function () {
    var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)('bottom center');
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'top center',
      targetAttachment: 'bottom center'
    });
  });
  it('getTetherAttachments returns a placement', function () {
    var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)('left center');
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'middle right',
      targetAttachment: 'middle left'
    });
  });
  it('getTetherAttachments returns a placement', function () {
    var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)('right center');
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'middle left',
      targetAttachment: 'middle right'
    });
  });
  it('getTetherAttachments returns a placement', function () {
    var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)('top left');
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'bottom left',
      targetAttachment: 'top left'
    });
  });
  it('getTetherAttachments returns a placement', function () {
    var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)('top right');
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'bottom right',
      targetAttachment: 'top right'
    });
  });
  it('getTetherAttachments returns a placement', function () {
    var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)('bottom left');
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'top left',
      targetAttachment: 'bottom left'
    });
  });
  it('getTetherAttachments returns a placement', function () {
    var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)('bottom right');
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'top right',
      targetAttachment: 'bottom right'
    });
  });
  it('getTetherAttachments returns a placement', function () {
    var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)('right top');
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'top left',
      targetAttachment: 'top right'
    });
  });
  it('getTetherAttachments returns a placement', function () {
    var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)('right bottom');
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'bottom left',
      targetAttachment: 'bottom right'
    });
  });
  it('getTetherAttachments returns a placement', function () {
    var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)('left top');
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'top right',
      targetAttachment: 'top left'
    });
  });
  it('getTetherAttachments returns a placement', function () {
    var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)('left bottom');
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'bottom right',
      targetAttachment: 'bottom left'
    });
  });
  it('getTetherAttachments returns a placement', function () {
    var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)();
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'top center',
      targetAttachment: 'bottom center'
    });
  });
  it('getScrollbarWidth', function () {
    var getScrollbarWidthTest = (0, _tools.getScrollbarWidth)();
    expect(getScrollbarWidthTest).toEqual(0);
  });
});