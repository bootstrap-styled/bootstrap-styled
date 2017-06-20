import {
  toHashCode,
  setScrollbarWidth,
  isBodyOverflowing,
  getOriginalBodyPadding,
  conditionallyUpdateScrollbar,
  getTetherAttachments,
  getScrollbarWidth,
} from '../tools';

describe('tools', () => {
  describe('getTetherAttachments', () => {
    it('should returns a placement', () => {
      const getTetherAttachmentsTest = getTetherAttachments('top center');
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'bottom center',
        targetAttachment: 'top center',
      });
    });
    it('should returns a placement', () => {
      const getTetherAttachmentsTest = getTetherAttachments('bottom center');
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'top center',
        targetAttachment: 'bottom center',
      });
    });
    it('should returns a placement', () => {
      const getTetherAttachmentsTest = getTetherAttachments('left center');
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'middle right',
        targetAttachment: 'middle left',
      });
    });
    it('should returns a placement', () => {
      const getTetherAttachmentsTest = getTetherAttachments('right center');
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'middle left',
        targetAttachment: 'middle right',
      });
    });
    it('should returns a placement', () => {
      const getTetherAttachmentsTest = getTetherAttachments('top left');
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'bottom left',
        targetAttachment: 'top left',
      });
    });
    it('should returns a placement', () => {
      const getTetherAttachmentsTest = getTetherAttachments('top right');
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'bottom right',
        targetAttachment: 'top right',
      });
    });
    it('should returns a placement', () => {
      const getTetherAttachmentsTest = getTetherAttachments('bottom left');
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'top left',
        targetAttachment: 'bottom left',
      });
    });
    it('should returns a placement', () => {
      const getTetherAttachmentsTest = getTetherAttachments('bottom right');
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'top right',
        targetAttachment: 'bottom right',
      });
    });
    it('should returns a placement', () => {
      const getTetherAttachmentsTest = getTetherAttachments('right top');
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'top left',
        targetAttachment: 'top right',
      });
    });
    it('should returns a placement', () => {
      const getTetherAttachmentsTest = getTetherAttachments('right bottom');
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'bottom left',
        targetAttachment: 'bottom right',
      });
    });
    it('should returns a placement', () => {
      const getTetherAttachmentsTest = getTetherAttachments('left top');
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'top right',
        targetAttachment: 'top left',
      });
    });
    it('should returns a placement', () => {
      const getTetherAttachmentsTest = getTetherAttachments('left bottom');
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'bottom right',
        targetAttachment: 'bottom left',
      });
    });
    it('should returns a placement', () => {
      const getTetherAttachmentsTest = getTetherAttachments();
      expect(getTetherAttachmentsTest).toEqual({
        attachment: 'top center',
        targetAttachment: 'bottom center',
      });
    });
  });
  describe('getScrollbarWidth', () => {
    it('should return scrollbar width equal to 0', () => {
      const scrollbarWidthTest = getScrollbarWidth();
      expect(scrollbarWidthTest).toBe(0);
    });
  });

  describe('setScrollbarWidth', () => {
    it('should set document.body.style.paddingRight to null', () => {
      const paddingTest = 0;
      setScrollbarWidth(paddingTest);
      expect(document.body.style.paddingRight).toEqual('');
    });
    it('should set document.body.style.paddingRight to 10px', () => {
      const paddingTest = 10;
      setScrollbarWidth(paddingTest);
      expect(document.body.style.paddingRight).toEqual('10px');
    });
  });

  describe('isBodyOverflowing', () => {
    it('should return true', () => {
      const isBodyOverflowingTest = isBodyOverflowing();
      expect(isBodyOverflowingTest).toEqual(true);
    });
    it('should return false', () => {
      window.innerWidth = 0;
      const isBodyOverflowingTest = isBodyOverflowing();
      expect(isBodyOverflowingTest).toEqual(false);
    });
  });
  describe('getOriginalBodyPadding', () => {
    it('should return 10', () => {
      const originalBodyPadding = getOriginalBodyPadding();
      expect(originalBodyPadding).toBe(10);
    });
  });

  describe('conditionallyUpdateScrollbar', () => {
    it('should return 5px', () => {
      const paddingTest = 5;
      setScrollbarWidth(paddingTest);
      conditionallyUpdateScrollbar();
      expect(document.body.style.paddingRight).toEqual('5px');
    });
  });

  describe('toHashCode', () => {
    it('toHashCode should generate an hashCode"', () => {
      const hash = toHashCode(JSON.stringify(getTetherAttachments()));
      expect(typeof hash).toEqual('number');
      const hash2 = toHashCode(JSON.stringify(getTetherAttachments()));
      expect(hash).toEqual(hash2);
    });
  });
});
