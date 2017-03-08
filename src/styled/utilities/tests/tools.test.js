import { mapToCssModules } from '../tools';

describe('tools', () => {
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
