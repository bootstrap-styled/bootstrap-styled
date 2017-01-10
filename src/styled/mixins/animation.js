export function fadeWithClass() {
  return `
    &.fade {
      ${fade()}
    }
  `;
}

export function fade() {
  return `
    opacity: 0;
    transition: opacity .15s linear;

    &.in {
      opacity: 1;
    }
  `;
}


export function collapseWithClass() {
  return `
    &.collapse {
      ${collapse()}
    }
  `;
}

export function collapse() {
  return `
    display: none;
    
    &.in {
      display: block;
    }
  `;
}

export function collapseTrWithClass() {
  return `
    tr {
      &.collapse.in {
        ${collapseTr()}
      }
    }
  `;
}

export function collapseTr() {
  return `
    display: table-row;
  `;
}

export function collapseTbodyWithClass() {
  return `
    tr {
      &.collapse.in {
        ${collapseTbody()}
      }
    }
  `;
}

export function collapseTbody() {
  return `
    display: table-row-group;
  `;
}


export function collapsingWithClass() {
  return `
    &.collapsing {
      ${collapsing()}
    }
  `;
}

export function collapsing() {
  return `
    position: relative;
    height: 0;
    overflow: hidden;
    transition-timing-function: ease;
    transition-duration: .35s;
    transition-property: height;
  `;
}

export default {
  fadeWithClass,
  fade,
  collapseWithClass,
  collapse,
  collapseTrWithClass,
  collapseTr,
  collapseTbodyWithClass,
  collapseTbody,
  collapsingWithClass,
  collapsing,
};
