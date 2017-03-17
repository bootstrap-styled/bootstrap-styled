import {
  mapToCssModules,
  // isFunction,
  isObject,
  getTetherAttachments,
  getScrollbarWidth,
  // setScrollbarWidth,
  // isBodyOverflowing,
  // getOriginalBodyPadding,
  // conditionallyUpdateScrollbar,
} from '../tools';

describe('tools - mapToCssModules', () => {
  let className;
  beforeAll(() => {
    className = 'btn btn-primary';
  });

  it('mapToCssModules should have a module btn-primary', () => {
    const classNameNew = mapToCssModules(className, {
      'btn-primary': 'replacement-primary',
    });
    expect(classNameNew).toEqual('btn replacement-primary');
  });
  it('mapToCssModules', () => {
    const classNameNew = mapToCssModules(className, {
      btn: 'replacement-btn',
    });
    expect(classNameNew).toEqual('replacement-btn btn-primary');
  });
  it('mapToCssModules should return unchanged className', () => {
    const classNameNew = mapToCssModules(className);
    expect(classNameNew).toEqual('btn btn-primary');
  });
});

describe('tools', () => {
  it('isObject returns true of passed an object', () => {
    const test = {
      test: 'ok',
    };
    const objectTesting = isObject(test);
    expect(objectTesting).toEqual(true);
  });
  // it('isFunction returns true of passed an object', () => {
  //   function test(){console.log('test-fucntion')}
  //   const functionTesting = isFunction(test());
  //   expect(functionTesting).toEqual(true);
  // });
  it('getTetherAttachments returns a placement', () => {
    const getTetherAttachmentsTest = getTetherAttachments('top center');
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'bottom center',
      targetAttachment: 'top center',
    });
  });
  it('getTetherAttachments returns a placement', () => {
    const getTetherAttachmentsTest = getTetherAttachments('bottom center');
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'top center',
      targetAttachment: 'bottom center',
    });
  });
  it('getTetherAttachments returns a placement', () => {
    const getTetherAttachmentsTest = getTetherAttachments('left center');
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'middle right',
      targetAttachment: 'middle left',
    });
  });
  it('getTetherAttachments returns a placement', () => {
    const getTetherAttachmentsTest = getTetherAttachments('right center');
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'middle left',
      targetAttachment: 'middle right',
    });
  });
  it('getTetherAttachments returns a placement', () => {
    const getTetherAttachmentsTest = getTetherAttachments('top left');
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'bottom left',
      targetAttachment: 'top left',
    });
  });
  it('getTetherAttachments returns a placement', () => {
    const getTetherAttachmentsTest = getTetherAttachments('top right');
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'bottom right',
      targetAttachment: 'top right',
    });
  });
  it('getTetherAttachments returns a placement', () => {
    const getTetherAttachmentsTest = getTetherAttachments('bottom left');
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'top left',
      targetAttachment: 'bottom left',
    });
  });
  it('getTetherAttachments returns a placement', () => {
    const getTetherAttachmentsTest = getTetherAttachments('bottom right');
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'top right',
      targetAttachment: 'bottom right',
    });
  });
  it('getTetherAttachments returns a placement', () => {
    const getTetherAttachmentsTest = getTetherAttachments('right top');
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'top left',
      targetAttachment: 'top right',
    });
  });
  it('getTetherAttachments returns a placement', () => {
    const getTetherAttachmentsTest = getTetherAttachments('right bottom');
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'bottom left',
      targetAttachment: 'bottom right',
    });
  });
  it('getTetherAttachments returns a placement', () => {
    const getTetherAttachmentsTest = getTetherAttachments('left top');
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'top right',
      targetAttachment: 'top left',
    });
  });
  it('getTetherAttachments returns a placement', () => {
    const getTetherAttachmentsTest = getTetherAttachments('left bottom');
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'bottom right',
      targetAttachment: 'bottom left',
    });
  });
  it('getTetherAttachments returns a placement', () => {
    const getTetherAttachmentsTest = getTetherAttachments();
    expect(getTetherAttachmentsTest).toEqual({
      attachment: 'top center',
      targetAttachment: 'bottom center',
    });
  });
  it('getScrollbarWidth', () => {
    const getScrollbarWidthTest = getScrollbarWidth();
    expect(getScrollbarWidthTest).toEqual(0);
  });
});

