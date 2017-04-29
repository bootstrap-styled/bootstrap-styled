import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import themeBs from 'theme';
import omit from 'lodash.omit';
import parseTransition from 'utils/parseTransition';

const defaultProps = {
  isOpen: true,
  theme: themeBs,
};

class Fade extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    children: PropTypes.node.isRequired,
    theme: PropTypes.object,
    isOpen: PropTypes.bool,
    /* eslint-enable react/no-unused-prop-types */
  }

  state = {
    transitionEnterTimeout: null,
    transitionAppearTimeout: null,
    transitionLeaveTimeout: null,
  }

  componentWillMount() {
    const { theme } = this.props;
    const userThemeTransitionList = parseTransition(theme['$transition-fade']);
    this.setState({
      transitionEnterTimeout: userThemeTransitionList[0].duration,
      transitionAppearTimeout: userThemeTransitionList[0].duration,
      transitionLeaveTimeout: userThemeTransitionList[0].duration,
    });
  }

  render() {
    const {
      children,
      isOpen,
      ...rest
    } = omit(this.props, ['theme', 'innerRef']);

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
