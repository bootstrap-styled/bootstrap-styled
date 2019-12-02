import React from 'react';
import { mount as doMount } from 'enzyme';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import { makeTheme } from '@bootstrap-styled/documentation/lib/theme';
import withWidth, { isWidthDown, isWidthUp } from '../withWidth';

const breakpoints = {
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1452px',
};

const mount = (children) => doMount(
  <BootstrapProvider
    theme={makeTheme({
      '$grid-breakpoints': breakpoints,
    })}
  >
    {children}
  </BootstrapProvider>
);

const Empty = () => <div />;

const EmptyWithWidth = withWidth()(Empty);

describe('withWidth', () => {
  describe('prop: width', () => {
    it('should be able to override it', () => {
      const wrapper = mount(<EmptyWithWidth width="xl" />);
      expect(wrapper.find(Empty).props().width).toEqual('xl');
    });
  });
  describe('isWidthUp', () => {
    it('should work as default inclusive', () => {
      expect(isWidthUp(breakpoints, 'md', 'lg')).toEqual(true); // should accept larger size
      expect(isWidthUp(breakpoints, 'md', 'md')).toEqual(true); // should be inclusive
      expect(isWidthUp(breakpoints, 'md', 'sm')).toEqual(false); // should reject smaller size
    });
    it('should work as exclusive', () => {
      expect(isWidthUp(breakpoints, 'md', 'lg', false)).toEqual(true); // should accept larger size
      expect(isWidthUp(breakpoints, 'md', 'md', false)).toEqual(false); // should be exclusive
      expect(isWidthUp(breakpoints, 'md', 'sm', false)).toEqual(false); // should reject smaller size
    });
  });

  describe('isWidthDown', () => {
    it('should work as default inclusive', () => {
      expect(isWidthDown(breakpoints, 'md', 'lg', true)).toEqual(false); // should reject larger size
      expect(isWidthDown(breakpoints, 'md', 'md', true)).toEqual(true); // should be inclusive
      expect(isWidthDown(breakpoints, 'md', 'sm', true)).toEqual(true); // should accept smaller size
    });
    it('should work as exclusive', () => {
      expect(isWidthDown(breakpoints, 'md', 'lg', false)).toEqual(false); //  should reject larger size
      expect(isWidthDown(breakpoints, 'md', 'md', false)).toEqual(false); // should be exclusive
      expect(isWidthDown(breakpoints, 'md', 'sm', false)).toEqual(true); // should accept smaller size
    });
  });
});
