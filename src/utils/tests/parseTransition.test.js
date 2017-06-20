import parseTransition from '../parseTransition';

describe('parseTransition utils', () => {
  it('parseTransition should return an object', () => {
    const objectTest = [{
      delay: 350,
      duration: 350,
      property: 'height',
      timingFunction: 'ease',
    }];
    const transitionList = parseTransition('height .35s ease .35s');
    expect(transitionList).toEqual(objectTest);
  });
  it('parseTransition should return a array list with string', () => {
    const transitionList = parseTransition('height .35s ease');
    expect(transitionList[0].property).toEqual('height');
    expect(transitionList[0].duration).toBe(350);
    expect(transitionList[0].timingFunction).toEqual('ease');
    expect(transitionList[0].delay).toBe(0);
  });
  it('should return an array with 3 transition meta data', () => {
    const transition = 'opacity .2s linear, display 500ms cubic-bezier(0.42, 0, 0.4, 1) .5s, background .3s cubic-bezier(0.42, 0, 1.0, 1.0) 200ms';
    expect(parseTransition(transition)).toEqual([{
      property: 'opacity',
      duration: 200,
      timingFunction: 'linear',
      delay: 0,
    }, {
      property: 'display',
      duration: 500,
      timingFunction: 'cubic-bezier(0.42, 0, 0.4, 1)',
      delay: 500,
    }, {
      property: 'background',
      duration: 300,
      timingFunction: 'cubic-bezier(0.42, 0, 1.0, 1.0)',
      delay: 200,
    }]);
  });
  it('parseTransition should return an empty array', () => {
    expect(parseTransition().length).toBe(0);
  });
  it('should add default value duration, timingFunction and delay', () => {
    const transition = 'opacity';
    expect(parseTransition(transition)).toEqual([{
      property: 'opacity',
      duration: 0,
      timingFunction: 'ease',
      delay: 0,
    }]);
  });
  it('should add default value timingFunction and delay', () => {
    const transition = 'opacity 3s';
    expect(parseTransition(transition)).toEqual([{
      property: 'opacity',
      duration: 3000,
      timingFunction: 'ease',
      delay: 0,
    }]);
  });
  it('should add default value delay', () => {
    const transition = 'opacity 3s cubic-bezier(1, 3, 3, 7)';
    expect(parseTransition(transition)).toEqual([{
      property: 'opacity',
      duration: 3000,
      timingFunction: 'cubic-bezier(1, 3, 3, 7)',
      delay: 0,
    }]);
  });
});
