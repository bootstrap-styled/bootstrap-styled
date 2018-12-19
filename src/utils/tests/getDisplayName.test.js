/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
// https://raw.githubusercontent.com/mui-org/material-ui/83adb95e594d7799b5f399a824f0d72f749ba349/packages/material-ui-utils/src/getDisplayName.test.js
import React from 'react';
import getDisplayName, { getFunctionName } from '../getDisplayName';

describe('utils/getDisplayName.js', () => {
  describe('getDisplayName', () => {
    it('gets the display name of a React component', () => {
      class SomeComponent extends React.Component {
        render() {
          return <div />;
        }
      }

      class SomeOtherComponent extends React.Component {
        static displayName = 'CustomDisplayName';

        render() {
          return <div />;
        }
      }

      function YetAnotherComponent() {
        return <div />;
      }

      const AndAnotherComponent = () => <div />;

      expect(getDisplayName(SomeComponent)).toEqual('SomeComponent');
      expect(getDisplayName(SomeOtherComponent)).toEqual('CustomDisplayName');
      expect(getDisplayName(YetAnotherComponent)).toEqual('YetAnotherComponent');
      expect(getDisplayName(AndAnotherComponent)).toEqual('AndAnotherComponent');
      expect(getDisplayName(() => <div />)).toEqual('Component');
      expect(getDisplayName('div')).toEqual('div');
      expect(getDisplayName()).toEqual(undefined);
    });
  });

  describe('getFunctionName', () => {
    it('gets the name of a function', () => {
      function SomeFunction() {
        return <div />;
      }

      const SomeOtherFunction = () => <div />;

      expect(getFunctionName(SomeFunction)).toEqual('SomeFunction');
      expect(getFunctionName(SomeOtherFunction)).toEqual('SomeOtherFunction');
    });
  });
});
