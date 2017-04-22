'use strict';

var _tools = require('../tools');

describe('tools', function () {
  describe('isFunction', function () {
    it('should returns true', function () {
      var test = jest.fn();
      var functionTesting = (0, _tools.isFunction)(test);
      expect(functionTesting).toEqual(true);
    });
    it('should returns false', function () {
      var test = 'btn btn-primary';
      var functionTesting = (0, _tools.isFunction)(test);
      expect(functionTesting).toEqual(false);
    });
  });

  describe('isObject', function () {
    it('should returns true if test is an object', function () {
      var test = {
        btn: 'btn btn-primary'
      };
      var objectTesting = (0, _tools.isObject)(test);
      expect(objectTesting).toEqual(true);
    });
    it('should returns false if test is not an object', function () {
      var test = 'btn btn-primary';
      var objectTesting = (0, _tools.isObject)(test);
      expect(objectTesting).toEqual(false);
    });
  });

  describe('getTetherAttachments', function () {
    it('should returns a placement', function () {
      var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)('top center');
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'bottom center',
        targetAttachment: 'top center'
      });
    });
    it('should returns a placement', function () {
      var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)('bottom center');
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'top center',
        targetAttachment: 'bottom center'
      });
    });
    it('should returns a placement', function () {
      var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)('left center');
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'middle right',
        targetAttachment: 'middle left'
      });
    });
    it('should returns a placement', function () {
      var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)('right center');
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'middle left',
        targetAttachment: 'middle right'
      });
    });
    it('should returns a placement', function () {
      var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)('top left');
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'bottom left',
        targetAttachment: 'top left'
      });
    });
    it('should returns a placement', function () {
      var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)('top right');
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'bottom right',
        targetAttachment: 'top right'
      });
    });
    it('should returns a placement', function () {
      var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)('bottom left');
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'top left',
        targetAttachment: 'bottom left'
      });
    });
    it('should returns a placement', function () {
      var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)('bottom right');
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'top right',
        targetAttachment: 'bottom right'
      });
    });
    it('should returns a placement', function () {
      var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)('right top');
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'top left',
        targetAttachment: 'top right'
      });
    });
    it('should returns a placement', function () {
      var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)('right bottom');
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'bottom left',
        targetAttachment: 'bottom right'
      });
    });
    it('should returns a placement', function () {
      var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)('left top');
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'top right',
        targetAttachment: 'top left'
      });
    });
    it('should returns a placement', function () {
      var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)('left bottom');
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'bottom right',
        targetAttachment: 'bottom left'
      });
    });
    it('should returns a placement', function () {
      var getTetherAttachmentsTest = (0, _tools.getTetherAttachments)();
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'top center',
        targetAttachment: 'bottom center'
      });
    });
  });

  describe('omit', function () {
    it('should return an object', function () {
      var rest = (0, _tools.omit)({ test: 'test' }, []);
      expect((0, _tools.isObject)(rest)).toBe(true);
    });
    it('should returns an object without pathTest', function () {
      var rest = (0, _tools.omit)({
        test: 'test',
        toggle: true,
        isOpen: true
      }, ['toggle', 'isOpen']);
      expect(rest).toEqual({ test: 'test' });
    });
  });

  describe('getScrollbarWidth', function () {
    it('should return scrollbar width equal to 0', function () {
      var scrollbarWidthTest = (0, _tools.getScrollbarWidth)();
      expect(scrollbarWidthTest).toBe(0);
    });
  });

  describe('setScrollbarWidth', function () {
    it('should set document.body.style.paddingRight to null', function () {
      var paddingTest = 0;
      (0, _tools.setScrollbarWidth)(paddingTest);
      expect(document.body.style.paddingRight).toEqual('');
    });
    it('should set document.body.style.paddingRight to 10px', function () {
      var paddingTest = 10;
      (0, _tools.setScrollbarWidth)(paddingTest);
      expect(document.body.style.paddingRight).toEqual('10px');
    });
  });

  describe('isBodyOverflowing', function () {
    it('should return true', function () {
      var isBodyOverflowingTest = (0, _tools.isBodyOverflowing)();
      expect(isBodyOverflowingTest).toEqual(true);
    });
    it('should return false', function () {
      window.innerWidth = 0;
      var isBodyOverflowingTest = (0, _tools.isBodyOverflowing)();
      expect(isBodyOverflowingTest).toEqual(false);
    });
  });
  describe('getOriginalBodyPadding', function () {
    it('should return 10', function () {
      var originalBodyPadding = (0, _tools.getOriginalBodyPadding)();
      expect(originalBodyPadding).toBe(10);
    });
  });

  describe('conditionallyUpdateScrollbar', function () {
    it('should return 5px', function () {
      var paddingTest = 5;
      (0, _tools.setScrollbarWidth)(paddingTest);
      (0, _tools.conditionallyUpdateScrollbar)();
      expect(document.body.style.paddingRight).toEqual('5px');
    });
  });

  describe('mapToCssModules', function () {
    var className = void 0;
    beforeAll(function () {
      className = 'btn btn-primary';
    });
    it('should have a module btn-primary', function () {
      var classNameNew = (0, _tools.mapToCssModules)(className, {
        'btn-primary': 'replacement-primary'
      });
      expect(classNameNew).toEqual('btn replacement-primary');
    });
    it('should have class "replacement-btn btn-primary"', function () {
      var classNameNew = (0, _tools.mapToCssModules)(className, {
        btn: 'replacement-btn'
      });
      expect(classNameNew).toEqual('replacement-btn btn-primary');
    });
    it('mapToCssModules should have class "btn btn-primary"', function () {
      var classNameNew = (0, _tools.mapToCssModules)(className);
      expect(classNameNew).toEqual('btn btn-primary');
    });
  });
});