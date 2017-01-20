import HeaderNavBar, { compCollapse, compSlide, compPush } from './components/HeaderNavBar';
import alert from './styled/mixins/alert';
import animation from './styled/mixins/animation';
import backgroundVariant from './styled/mixins/background-variant';
import badge from './styled/mixins/badge';
import borderRadius from './styled/mixins/border-radius';
import boxShadow from './styled/mixins/box-shadow';
import breakpoints from './styled/mixins/breakpoints';
import button from './styled/mixins/button';
import cards from './styled/mixins/cards';
import clearfix from './styled/mixins/clearfix';
import conditional from './styled/mixins/conditional';
import unit from './styled/mixins/unit';
import float from './styled/mixins/float';
import forms from './styled/mixins/forms';
import gradients from './styled/mixins/gradients';
import grid from './styled/mixins/grid';
import gridFramework from './styled/mixins/grid-framework';
import hover from './styled/mixins/hover';
import listGroup from './styled/mixins/list-group';
import lists from './styled/mixins/lists';
import navDivider from './styled/mixins/nav-divider';
import navbarAlign from './styled/mixins/navbar-align';
import navbarToggleable from './styled/mixins/navbar-toggleable';
import pagination from './styled/mixins/pagination';
import progress from './styled/mixins/progress';
import resetFilter from './styled/mixins/reset-filter';
import resetText from './styled/mixins/reset-text';
import resize from './styled/mixins/resize';
import screenReader from './styled/mixins/screen-reader';
import size from './styled/mixins/size';
import tabFocus from './styled/mixins/tab-focus';
import tableRow from './styled/mixins/table-row';
import tag from './styled/mixins/tag';
import textEmphasis from './styled/mixins/text-emphasis';
import textHide from './styled/mixins/text-hide';
import textTruncate from './styled/mixins/text-truncate';
import transition from './styled/mixins/transition';
import variables from './styled/mixins/variables';
import visibility from './styled/mixins/visibility';
import a from './styled/utilities/a';
import align from './styled/utilities/align';
import background from './styled/utilities/background';
import borders from './styled/utilities/borders';
import buttonUtility from './styled/utilities/button';
import buttonGroup from './styled/utilities/buttonGroup';
import clearfixUtility from './styled/utilities/clearfix';
import display from './styled/utilities/display';
import flex from './styled/utilities/flex';
import floatUtility from './styled/utilities/float';
import nav from './styled/utilities/nav';
import navbar from './styled/utilities/navbar';
import screenreaders from './styled/utilities/screenreaders';
import spacing from './styled/utilities/spacing';
import text from './styled/utilities/text';
import typography from './styled/utilities/typography';
import visibilityUtility from './styled/utilities/visibility';

// 0. Configuration
export { default as theme } from './config';
// 1. Atoms
export { default as A, composeLink } from './components/A';
export { default as Abbr } from './components/Abbr';
export { default as Address } from './components/Address';
export { default as Alert } from './components/Alert';
export { default as Area } from './components/Area';
export { default as Article } from './components/Article';
export { default as Blockquote } from './components/Blockquote';
export { default as Breadcrumb } from './components/Breadcrumb';
export { default as Button } from './components/Button';
export { default as ButtonGroup } from './components/ButtonGroup';
export { default as Caption } from './components/Caption';
export { default as CardDeckWrapper } from './components/CardDeckWrapper';
export { default as Clearfix } from './components/Clearfix';
export { default as Close } from './components/Close';
export { default as Code } from './components/Code';
export { default as Col } from './components/Col';
export { default as Dd } from './components/Dd';
export { default as Details } from './components/Details';
export { default as Dl } from './components/Dl';
export { default as Dt } from './components/Dt';
export { default as Fieldset } from './components/Fieldset';
export { default as Figure } from './components/Figure';
export { default as Footer } from './components/Footer';
export { default as Form } from './components/Form';
export { default as H1 } from './components/H1';
export { default as H2 } from './components/H2';
export { default as H3 } from './components/H3';
export { default as H4 } from './components/H4';
export { default as H5 } from './components/H5';
export { default as H6 } from './components/H6';
export { default as Header } from './components/Header';
export { default as Hr } from './components/Hr';
export { default as Img } from './components/Img';
export { default as Input } from './components/Input';
export { default as InputGroup } from './components/InputGroup';
export { default as IssueIcon } from './components/IssueIcon';
export { default as Kbd } from './components/Kbd';
export { default as Label } from './components/Label';
export { default as Legend } from './components/Legend';
export { default as Li } from './components/Li';
export { default as ListGroup } from './components/ListGroup';
export { default as Map } from './components/Map';
export { default as Mark } from './components/Mark';
export { default as Nav } from './components/Nav';
export { default as Ol } from './components/Ol';
export { default as Option } from './components/Option';
export { default as Output } from './components/Output';
export { default as P } from './components/P';
export { default as Pagination } from './components/Pagination';
export { default as Pre } from './components/Pre';
export { default as Progress } from './components/Progress';
export { default as Row } from './components/Row';
export { default as Section } from './components/Section';
export { default as Select } from './components/Select';
export { default as Small } from './components/Small';
export { default as Summary } from './components/Summary';
export { default as Table } from './components/Table';
export { default as Tag } from './components/Tag';
export { default as Tbody } from './components/Tbody';
export { default as Td } from './components/Td';
export { default as Textarea } from './components/Textarea';
export { default as Tfoot } from './components/Tfoot';
export { default as Th } from './components/Th';
export { default as Thead } from './components/Thead';
export { default as Tr } from './components/Tr';
export { default as Ul } from './components/Ul';
// 2. Molecules
export { default as Card } from './components/Card';
export { default as CardColumns } from './components/CardColumns';
export { default as CardDeck } from './components/CardDeck';
export { default as CardGroup } from './components/CardGroup';
export { default as DropDown } from './components/DropDown';
export { default as NavBar } from './components/NavBar';
// 3. Organisms
export { default as Container } from './components/Container';
export { default as ContainerFluid } from './components/ContainerFluid';
// 3.1. Create HeaderNavBar type
const HeaderNavBarCollapse = compCollapse(HeaderNavBar);
const HeaderNavBarSlide = compSlide(HeaderNavBar);
const HeaderNavBarPush = compPush(HeaderNavBar);

// 3.2 Export HeaderNavBar
export { HeaderNavBar, HeaderNavBarCollapse, HeaderNavBarPush, HeaderNavBarSlide };
// 4. Templates
export { default as DocBootstrap } from './components/DocBootstrap';
// 5. mixins
export const mixins = {
  alert,
  animation,
  backgroundVariant,
  badge,
  borderRadius,
  boxShadow,
  breakpoints,
  button,
  cards,
  clearfix,
  conditional,
  float,
  forms,
  gradients,
  grid,
  gridFramework,
  hover,
  listGroup,
  lists,
  navDivider,
  navbarAlign,
  navbarToggleable,
  pagination,
  progress,
  resetFilter,
  resetText,
  resize,
  screenReader,
  size,
  tabFocus,
  tableRow,
  tag,
  textEmphasis,
  textHide,
  textTruncate,
  transition,
  unit,
  variables,
  visibility,
};
// 6. utilities
export const utilities = {
  a,
  align,
  background,
  borders,
  button: buttonUtility,
  buttonGroup,
  clearfix: clearfixUtility,
  display,
  flex,
  float: floatUtility,
  nav,
  navbar,
  screenreaders,
  spacing,
  text,
  typography,
  visibility: visibilityUtility,
};
