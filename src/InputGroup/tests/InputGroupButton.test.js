/**
 * Testing our InputGroupButton component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import { BootstrapProvider } from 'bootstrap-styled-provider';
import InputGroupButton from '../InputGroupButton';
import Button from '../../Button';
const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <InputGroupButton>
    {props.children}
  </InputGroupButton>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <InputGroupButton>
      {props.children}
    </InputGroupButton>
  </BootstrapProvider>
);


describe('<InputGroupButton />', () => {
  it('should render an <InputGroupButton> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <InputGroupButton> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('InputGroupButton').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have class input-group-btn', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('div').at(1).hasClass('input-group-btn')).toBe(true);
  });
  describe('Shorthand usage', () => {
    it('should render a child Button', () => {
      const wrapper = shallow(<InputGroupButton>Yo!</InputGroupButton>);
      expect(wrapper.childAt(0).type()).toBe(Button);
    });

    it('should render the string provided in the child Button', () => {
      const wrapper = shallow(<InputGroupButton>Yo!</InputGroupButton>);

      expect(wrapper.childAt(0).prop('children')).toBe('Yo!');
    });

    it('should render additional props on the child Button', () => {
      const wrapper = shallow(<InputGroupButton color="primary">Yo!</InputGroupButton>);

      expect(wrapper.childAt(0).prop('color')).toBe('primary');
    });

    it('should render additional classes on the child Button', () => {
      const wrapper = shallow(<InputGroupButton className="yo">Yo!</InputGroupButton>);

      expect(wrapper.childAt(0).hasClass('yo')).toBe(true);
    });

    it('should render groupClassName as additional classes on the input-group-btn wrapper', () => {
      const wrapper = shallow(<InputGroupButton groupClassName="other">Yo!</InputGroupButton>);

      expect(wrapper.hasClass('other')).toBe(true);
      expect(wrapper.hasClass('input-group-btn')).toBe(true);
    });

    it('should render groupAttributes as additional attributes on the input-group-btn wrapper', () => {
      const wrapper = shallow(<InputGroupButton groupAttributes={{ style: { textAlign: 'left' } }}>Yo!</InputGroupButton>);

      expect(wrapper.prop('style').textAlign).toBe('left');
    });
  });
});
