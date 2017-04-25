/**
 * Testing our NavBar component
 */
import TransitionGroup from 'react-addons-transition-group';

import { mount } from 'enzyme';

import React from 'react';
import PropTypes from 'prop-types';
import BootstrapProvider from '../../BootstrapProvider';

import Fade from '../Fade';

const children = (<h1>test</h1>);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Fade {...props} />
  </BootstrapProvider>
);

class Helper extends React.Component {
  static propTypes = {
    showItem: PropTypes.bool,
    children: PropTypes.node,
  }
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      showItem: props.showItem,
    };
  }

  toggle() {
    this.setState({
      showItem: !this.state.showItem,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        <TransitionGroup component="div">
          { this.state.showItem ? this.props.children : null }
        </TransitionGroup>
      </div>
    );
  }
}

describe('<Fade />', () => {
  it('should render an <Fade> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('Fade').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should transition classes from "fade" to "fade show" on appear', () => {
    const isOpen = true;
    const renderedComponent = mount(
      <Helper showItem={isOpen} >
        <Fade key={Math.random()}>Yo!</Fade>
        <Fade transitionAppear={false} transitionEnter={false} transitionLeave={false} key={Math.random()}>Yo 2!</Fade>
      </Helper>
    );
    expect(renderedComponent.find('div.fade').length).toBe(2);
    expect(renderedComponent.find('div.fade.show').length).toBe(1);
    renderedComponent.find('button').simulate('click');
    expect(renderedComponent.find('div.fade.show').length).toBe(0);
  });
});
