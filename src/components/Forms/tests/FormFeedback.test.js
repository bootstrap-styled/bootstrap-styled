import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import FormFeedback from '../FormFeedback';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <FormFeedback {...props} />
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <FormFeedback {...props} />
  </BootstrapProvider>
);

describe('<FormFeedback />', () => {
  it('should render an <FormFeedback> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <FormFeedback> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('FormFeedback').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
