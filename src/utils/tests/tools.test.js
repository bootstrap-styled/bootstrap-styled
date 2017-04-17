import { omit, isFunction, setScrollbarWidth, isBodyOverflowing, getOriginalBodyPadding, conditionallyUpdateScrollbar, mapToCssModules, isObject, getTetherAttachments, getScrollbarWidth } from '../tools';

describe('tools', () => {
  describe('isFunction', () => {
    it('should returns true', () => {
      const test = jest.fn();
      const functionTesting = isFunction(test);
      expect(functionTesting).toEqual(true);
    });
    it('should returns false', () => {
      const test = 'btn btn-primary';
      const functionTesting = isFunction(test);
      expect(functionTesting).toEqual(false);
    });
  });

  describe('isObject', () => {
    it('should returns true if test is an object', () => {
      const test = {
        btn: 'btn btn-primary',
      };
      const objectTesting = isObject(test);
      expect(objectTesting).toEqual(true);
    });
    it('should returns false if test is not an object', () => {
      const test = 'btn btn-primary';
      const objectTesting = isObject(test);
      expect(objectTesting).toEqual(false);
    });
  });

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

  describe('omit', () => {
    it('should return an object', () => {
      const rest = omit({ test: 'test' }, []);
      expect(isObject(rest)).toBe(true);
    });
    it('should returns an object without pathTest', () => {
      const rest = omit({
        test: 'test',
        toggle: true,
        isOpen: true,
      }, ['toggle', 'isOpen']);
      expect(rest).toEqual({ test: 'test' });
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

  describe('mapToCssModules', () => {
    let className;
    beforeAll(() => {
      className = 'btn btn-primary';
    });
    it('should have a module btn-primary', () => {
      const classNameNew = mapToCssModules(className, {
        'btn-primary': 'replacement-primary',
      });
      expect(classNameNew).toEqual('btn replacement-primary');
    });
    it('should have class "replacement-btn btn-primary"', () => {
      const classNameNew = mapToCssModules(className, {
        btn: 'replacement-btn',
      });
      expect(classNameNew).toEqual('replacement-btn btn-primary');
    });
    it('mapToCssModules should have class "btn btn-primary"', () => {
      const classNameNew = mapToCssModules(className);
      expect(classNameNew).toEqual('btn btn-primary');
    });
  });
});
