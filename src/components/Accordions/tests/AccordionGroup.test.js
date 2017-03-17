/**
 * Testing our Abbr component
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import BootstrapProvider from '../../BootstrapProvider';
import AccordionGroup from '../AccordionGroup';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <AccordionGroup {...props}>
    {props.children}
  </AccordionGroup>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <AccordionGroup {...props}>
      {props.children}
    </AccordionGroup>
  </BootstrapProvider>
);


describe('<AccordionGroup />', () => {
  let renderedComponent;
  let renderedComponentTheme;

  beforeEach(() => {
    renderedComponent = renderComponent({
      children,
    });
    renderedComponent.setState({ activeName: 'Accordion2' });
    renderedComponentTheme = renderComponentUsingTheme({
      children,
    });
    renderedComponent.setState({ activeName: 'Accordion2' });
  });

  it('should render an <AccordionGroup> tag without a theme', () => {
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have an attribute activeAccordionName with a theme', () => {
    renderedComponent = renderComponentUsingTheme({
      children,
      accordionGroup: {
        activeAccordionName: 'name-test',
      },
    });
    expect(renderedComponent.find(AccordionGroup).props().accordionGroup.activeAccordionName).toEqual('name-test');
  });
  it('should have an attribute heading-component with a theme', () => {
    renderedComponent = renderComponentUsingTheme({
      children,
      accordionGroup: {
        activeAccordionName: 'name-test',
        'heading-component': (<h1>hello</h1>),
      },
    });
    expect(renderedComponent.find(AccordionGroup).props().accordionGroup['heading-component']).toEqual(<h1>hello</h1>);
  });
  it('should have children without a theme', () => {
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <AccordionGroup> tag with a theme', () => {
    expect(renderedComponentTheme.find('AccordionGroup').length).toBe(1);
  });
  it('should have children with a theme', () => {
    expect(renderedComponentTheme.contains(children)).toEqual(true);
  });
});
