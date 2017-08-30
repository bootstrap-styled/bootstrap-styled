import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import omit from 'lodash.omit';
import parseTransition from '../../utils/parseTransition';
import themeBs from '../../theme';

const defaultProps = {
  isOpen: true,
  appear: true,
  theme: themeBs,
};

class Fade extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    children: PropTypes.node.isRequired,
    theme: PropTypes.object,
    isOpen: PropTypes.bool,
    appear: PropTypes.bool,
    timeout: PropTypes.oneOfType([
      PropTypes.shape({
        enter: PropTypes.number,
        exit: PropTypes.number,
      }),
      PropTypes.number,
    ]),
    /* eslint-enable react/no-unused-prop-types */
  }

  state = {
    timeout: null,
  }

  componentWillMount() {
    const { theme, timeout } = this.props;
    this.setState({
      timeout: timeout || parseTransition(theme['$transition-fade'])[0].duration,
    });
  }

  render() {
    const {
      children,
      appear,
      isOpen,
      ...rest
    } = omit(this.props, ['theme', 'innerRef', 'timeout']);
    return (
      <CSSTransition
        in={isOpen}
        appear={appear}
        timeout={this.state.timeout}
        classNames={{
          enter: 'fade',
          enterActive: 'show',
          exit: 'fade',
        }}
        {...rest}
      >
        {children}
      </CSSTransition>
    );
  }
}

Fade.defaultProps = defaultProps;
export default withTheme(Fade);
