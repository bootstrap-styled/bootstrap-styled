import makeKeyframe, { toKeyframeString } from '../makeKeyframe';
import { makeFadeIn } from '../fade/styledFade';

describe('motion keyframes utils', () => {
  let sampleKeyframeObject;
  beforeAll(() => {
    sampleKeyframeObject = {
      from: {
        width: '0%',
      },
      '20%, 40%': {
        width: '75%',
      },
      '60%': {
        width: '25%',
      },
      to: {
        width: '100%',
      },
    };
  });

  describe('makeKeyframe', () => {
    it('should makeKeyframe', () => {
      const distance = '10px';
      expect(makeKeyframe(makeFadeIn, distance)).toBe('esnCVL');
    });

    it('should makeKeyframe and apply user keyframe', () => {
      const distance = '10px';
      const userKeyframe = {
        '20%, 40%': {
          width: '60%',
        },
        '50%': {
          width: '30%',
        },
      };
      expect(makeKeyframe(makeFadeIn, distance, userKeyframe)).toBe('cTjfHl');
    });
  });

  describe('toKeyframeString', () => {
    it('should convert objet to keyframe string', () => {
      expect(toKeyframeString(sampleKeyframeObject)).toBe('from:{width:0%;}20%, 40%:{width:75%;}60%:{width:25%;}to:{width:100%;}');
    });
  });
});
