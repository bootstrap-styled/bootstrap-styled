/**
 * Testing our Abbr component
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { BootstrapProvider } from 'bootstrap-styled-provider';
import Accordion from '../Accordion';
import AccordionGroup from '../AccordionGroup';
import Card from '../../Cards/Card';
const children = (<h1>Test</h1>);

const renderComponent = (props = {}, propsAccordionGroup = {}) => shallow(
  <AccordionGroup
    {...propsAccordionGroup}
  >
    <Accordion {...props} />
  </AccordionGroup>
);

const renderComponentUsingTheme = (props = {}, propsAccordionGroup = {}) => mount(
  <BootstrapProvider>
    <AccordionGroup
      {...propsAccordionGroup}
    >
      <Accordion {...props} />
      <Accordion name="Accordion2" tag={Card}>{children}</Accordion>
    </AccordionGroup>
  </BootstrapProvider>
);

describe('<Accordion />', () => {
  let renderedComponent;
  let renderedComponentTheme;
  let onChange;

  beforeEach(() => {
    onChange = jest.fn();

    renderedComponent = renderComponent({
      name: 'Accordion1',
      children,
      tag: Card,
    }, {
      activeAccordionName: 'Accordion2',
      onChange,
    });
    renderedComponent.setState({ activeName: 'Accordion2' });
    renderedComponentTheme = renderComponentUsingTheme({
      children,
      tag: Card,
    }, {
      activeAccordionName: 'Accordion2',
      onChange,
    });
    renderedComponent.setState({ activeName: 'Accordion2' });
  });

  it('should render an <Accordion> tag without a theme', () => {
    expect(renderedComponent.find('Accordion').length).toBe(1);
  });
  it('should have an attribute heading without a theme', () => {
    renderedComponent = renderComponent({
      heading: 'heading-test',
      tag: Card,
      children,
    });
    expect(renderedComponent.find(Accordion).props().heading).toEqual('heading-test');
  });
  it('should have children without a theme', () => {
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have 1 or more <Accordion>', () => {
    expect(renderedComponentTheme.find('Accordion').length > 0).toBe(true);
  });
  it('should have children with a theme', () => {
    expect(renderedComponentTheme.contains(children)).toEqual(true);
  });
  it('should handle onClick on header', () => {
    renderedComponent.simulate('change', 'Accordion2');
    expect(onChange).toHaveBeenCalledWith('Accordion2');
  });
  it('should have children without a theme', () => {
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
