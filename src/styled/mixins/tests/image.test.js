import { imgFluid, imgRetina } from '../image';

describe('bootstrap image mixins', () => {
  it('imgFluid should return a css', () => {
    const css = imgFluid();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    /* Part 1: Set a maximum relative to the parent */\n    max-width: 100%;\n    /* Part 2: Override the height to auto, otherwise images will be stretched */\n    /* when setting a width and height attribute on the img element. */\n    height: auto;\n  ');
  });
  it('imgRetina should return a css', () => {
    const css = imgRetina(
      'https://www.google.com/images/logo.png',
      'https://www.google.fr/images/logo.png',
      '1280px',
      '960px'
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    background-image: url(https://www.google.com/images/logo.png);\n\n    /* Autoprefixer takes care of adding -webkit-min-device-pixel-ratio and -o-min-device-pixel-ratio, */\n    /* but doesn\'t convert dppx=>dpi. */\n    /* There\'s no such thing as unprefixed min-device-pixel-ratio since it\'s nonstandard. */\n    /* Compatibility info: http://caniuse.com/#feat=css-media-resolution */\n    @media only screen and (min-resolution: 192dpi), /* IE9-11 don\'t support dppx */\n      only screen and (min-resolution: 2dppx) { /* Standardized */\n        background-image: url(https://www.google.fr/images/logo.png);\n        background-size: 1280px 960px;\n    }\n  ');
  });
});
