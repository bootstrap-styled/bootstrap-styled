import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bootstrap-styled-provider/lib/BootstrapProvider';
import FormCustom from '../FormCustom';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <FormCustom {...props}>
    {children}
  </FormCustom>
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <FormCustom {...props}>
      {children}
    </FormCustom>
  </BootstrapProvider>
);

describe('<FormCustom />', () => {
  it('should render an <FormCustom> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('span').length).toBe(2);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <FormCustom> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('FormCustom').length).toBe(1);
  });
  it('should have a classname custom-checkbox', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('Label').hasClass('custom-checkbox'));
  });
  it('should have a classname custom-radio', () => {
    const renderedComponent = renderComponentUsingTheme({
      radio: {
        id: 'id-test',
        name: 'name-test',
      },
    });
    expect(renderedComponent.find('Label').hasClass('custom-radio'));
  });
  it('should have an id and a name on Input if radio is passed', () => {
    const renderedComponent = renderComponentUsingTheme({
      radio: {
        id: 'id-test',
        name: 'name-test',
      },
    });
    expect(renderedComponent.find('Input').props().id).toEqual('id-test');
    expect(renderedComponent.find('Input').props().name).toEqual('name-test');
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
