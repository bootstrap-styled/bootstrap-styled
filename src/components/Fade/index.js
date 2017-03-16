import React, { PropTypes } from 'react';
import { withTheme } from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import themeBs from 'theme';
import { parseTransition } from '../../styled/utilities/transition';

const defaultProps = {
  isOpen: true,
  theme: themeBs,
};

class Fade extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.object,
    isOpen: PropTypes.bool,
  }

  state = {
    transitionEnterTimeout: null,
    transitionAppearTimeout: null,
    transitionLeaveTimeout: null,
  }

  componentWillMount() {
    const { theme } = this.props;
    const userThemeDurationInMs = parseTransition(theme['$enable-transitions'], theme['$transition-fade']);

    this.setState({
      transitionEnterTimeout: userThemeDurationInMs.duration,
      transitionAppearTimeout: userThemeDurationInMs.duration,
      transitionLeaveTimeout: userThemeDurationInMs.duration,
    });
  }

  render() {
    const { theme, children, isOpen, ...rest } = this.props; // eslint-disable-line no-unused-vars
    return (
      <ReactCSSTransitionGroup
        transitionAppearTimeout={this.state.transitionEnterTimeout}
        transitionEnterTimeout={this.state.transitionAppearTimeout}
        transitionLeaveTimeout={this.state.transitionLeaveTimeout}
        transitionName={{
          appear: 'fade',
          appearActive: 'show',
          enter: 'fade',
          enterActive: 'show',
          leave: 'fade',
        }}
        {...rest}
      >
        {isOpen ? children : null}
      </ReactCSSTransitionGroup>
    );
  }
}

Fade.defaultProps = defaultProps;
export default withTheme(Fade);
