'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _tools = require('../tools');

describe('tools', function () {
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

  describe('toHashCode', function () {
    it('toHashCode should generate an hashCode"', function () {
      var hash = (0, _tools.toHashCode)(JSON.stringify((0, _tools.getTetherAttachments)()));
      expect(typeof hash === 'undefined' ? 'undefined' : _typeof(hash)).toEqual('number');
      var hash2 = (0, _tools.toHashCode)(JSON.stringify((0, _tools.getTetherAttachments)()));
      expect(hash).toEqual(hash2);
    });
  });
});