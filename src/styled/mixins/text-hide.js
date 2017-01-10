// CSS image replacement
export function textHide() {
  return `
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0;
  `;
}

export default {
  textHide,
};
