/**
 * Testing our ModalHeader component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import ModalHeader from '../ModalHeader';

const children = <p>Test</p>;

const renderComponent = (props = {}) => shallow(
  <ModalHeader {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <ModalHeader {...props} />
  </BootstrapProvider>
);


describe('<ModalHeader />', () => {
  it('should render an <ModalHeader> tag without a theme', () => {
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
  it('should render a <ModalHeader> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('ModalHeader').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render close button', () => {
    const renderedComponent = shallow(<ModalHeader toggle={() => {}} className="other">Yo!</ModalHeader>);

    expect(renderedComponent.hasClass('other')).toBe(true);
    expect(renderedComponent.hasClass('modal-header')).toBe(true);
    expect(renderedComponent.find('Close').length).toBe(1);
  });
});
