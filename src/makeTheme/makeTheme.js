import makeOriginal from '../makeTheme/makeOriginal';
import { makeTheme as makeThemeA } from '../A/theme';
import { makeTheme as makeThemeAlert } from '../Alert/theme';
import { makeTheme as makeThemeBadge } from '../Badge/theme';
import { makeTheme as makeThemeBlockquote } from '../Blockquote/theme';
import { makeTheme as makeThemeBreadcrumb } from '../Breadcrumb/theme';
import { makeTheme as makeThemeButton } from '../Button/theme';
import { makeTheme as makeThemeButtonGroup } from '../ButtonGroup/theme';
import { makeTheme as makeThemeCaption } from '../Caption/theme';
import { makeTheme as makeThemeCards } from '../Cards/theme';
import { makeTheme as makeThemeClose } from '../Close/theme';
import { makeTheme as makeThemeCode } from '../Code/theme';
import { makeTheme as makeThemeCol } from '../Col/theme';
import { makeTheme as makeThemeCollapse } from '../Collapse/theme';
import { makeTheme as makeThemeContainer } from '../Container/theme';
import { makeTheme as makeThemeContainerFluid } from '../ContainerFluid/theme';
import { makeTheme as makeThemeDd } from '../Dd/theme';
import { makeTheme as makeThemeDl } from '../Dl/theme';
import { makeTheme as makeThemeDrawer } from '../Drawer/theme';
import { makeTheme as makeThemeDropdown } from '../Dropdown/theme';
import { makeTheme as makeThemeDt } from '../Dt/theme';
import { makeTheme as makeThemeFieldset } from '../Fieldset/theme';
import { makeTheme as makeThemeForm } from '../Form/theme';
import { makeTheme as makeThemeH1 } from '../H1/theme';
import { makeTheme as makeThemeH2 } from '../H2/theme';
import { makeTheme as makeThemeH3 } from '../H3/theme';
import { makeTheme as makeThemeH4 } from '../H4/theme';
import { makeTheme as makeThemeH5 } from '../H5/theme';
import { makeTheme as makeThemeH6 } from '../H6/theme';
import { makeTheme as makeThemeHeader } from '../Header/theme';
import { makeTheme as makeThemeHr } from '../Hr/theme';
import { makeTheme as makeThemeImg } from '../Img/theme';
import { makeTheme as makeThemeInput } from '../Input/theme';
import { makeTheme as makeThemeInputGroup } from '../InputGroup/theme';
import { makeTheme as makeThemeJumbotron } from '../Jumbotron/theme';
import { makeTheme as makeThemeKbd } from '../Kbd/theme';
import { makeTheme as makeThemeLabel } from '../Label/theme';
import { makeTheme as makeThemeLi } from '../Li/theme';
import { makeTheme as makeThemeListGroup } from '../ListGroup/theme';
import { makeTheme as makeThemeMark } from '../Mark/theme';
import { makeTheme as makeThemeModal } from '../Modal/theme';
import { makeTheme as makeThemeNav } from '../Nav/theme';
import { makeTheme as makeThemeNavbar } from '../Navbar/theme';
import { makeTheme as makeThemeOl } from '../Ol/theme';
import { makeTheme as makeThemeP } from '../P/theme';
import { makeTheme as makeThemePagination } from '../Pagination/theme';
import { makeTheme as makeThemePre } from '../Pre/theme';
import { makeTheme as makeThemeProgress } from '../Progress/theme';
import { makeTheme as makeThemeRow } from '../Row/theme';
import { makeTheme as makeThemeSmall } from '../Small/theme';
import { makeTheme as makeThemeTable } from '../Table/theme';
import { makeTheme as makeThemeUl } from '../Ul/theme';
import { makeTheme as makeThemeTooltip } from '../Tooltip/theme';

const list = [
  makeOriginal,
  makeThemeA,
  makeThemeAlert,
  makeThemeBadge,
  makeThemeBlockquote,
  makeThemeBreadcrumb,
  makeThemeButton,
  makeThemeButtonGroup,
  makeThemeCaption,
  makeThemeCards,
  makeThemeClose,
  makeThemeCode,
  makeThemeCol,
  makeThemeCollapse,
  makeThemeContainer,
  makeThemeContainerFluid,
  makeThemeDd,
  makeThemeDl,
  makeThemeDropdown,
  makeThemeDt,
  makeThemeFieldset,
  makeThemeForm,
  makeThemeH1,
  makeThemeH2,
  makeThemeH3,
  makeThemeH4,
  makeThemeH5,
  makeThemeH6,
  makeThemeHeader,
  makeThemeHr,
  makeThemeImg,
  makeThemeInput,
  makeThemeInputGroup,
  makeThemeJumbotron,
  makeThemeKbd,
  makeThemeLabel,
  makeThemeLi,
  makeThemeListGroup,
  makeThemeMark,
  makeThemeModal,
  makeThemeNav,
  makeThemeNavbar,
  makeThemeOl,
  makeThemeP,
  makeThemePagination,
  makeThemePre,
  makeThemeProgress,
  makeThemeRow,
  makeThemeSmall,
  makeThemeTable,
  makeThemeUl,
  makeThemeTooltip,
  makeThemeDrawer,
];

export default function makeTheme(theme) {
  const all = [].concat(list);
  let t = theme;
  let mt;

  /* eslint-disable no-cond-assign */
  while (mt = all.shift()) {
    t = mt(t);
  }
  /* eslint-enable no-cond-assign */
  return t;
}
