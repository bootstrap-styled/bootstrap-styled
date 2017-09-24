/**
 * Testing our Abbr component
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import BootstrapProvider from '../../BootstrapProvider';
import AccordionGroup from '../AccordionGroup';
import Accordion from '../Accordion';

const children = (<Accordion heading="Collapsible Group Item #1" name="Accordion1">hey!</Accordion>);

const renderComponent = (props = {}) => shallow(
  <AccordionGroup {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <AccordionGroup {...props} />
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
