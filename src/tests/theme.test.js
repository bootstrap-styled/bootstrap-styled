import oldTheme from '../oldTheme';
import theme from '../theme';


console.log('old theme contain', Object.keys(oldTheme).length, 'vars');
console.log('new theme contain', Object.keys(theme).length, 'vars');

console.log('Checking diff between old vs new');


const foundList = [];
const notFoundList = [];
/* eslint-disable array-callback-return, consistent-return, no-unused-expressions */
Object.keys(oldTheme).forEach((key) => {
  const found = Object.keys(theme).some((newKey) => {
    if (key === newKey) {
      return true;
    }
  });
  !found ? notFoundList.push(key) : foundList.push(found);
});
/* eslint-enable array-callback-return, consistent-return, no-unused-expressions */
console.log('Old theme is missing', notFoundList.length, ' vars and has', foundList.length, 'vars in common');
console.log(notFoundList.join('\n'));

const foundListNew = [];
const notFoundListNew = [];
/* eslint-disable array-callback-return, consistent-return, no-unused-expressions */
Object.keys(theme).forEach((key) => {
  const found = Object.keys(oldTheme).some((newKey) => {
    if (key === newKey) {
      return true;
    }
  });
  !found ? notFoundListNew.push(key) : foundListNew.push(found);
});
/* eslint-enable array-callback-return, consistent-return, no-unused-expressions */

console.log('New theme is missing', notFoundListNew.length, ' vars and has', foundListNew.length, 'vars in common');
console.log(notFoundListNew.join('\n'));

