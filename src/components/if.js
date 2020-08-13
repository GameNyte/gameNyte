'use strict';

const render = (condition = false, children = null) => {
  return condition ? children : null;
};

const If = (props) => {
  return render(props.condition, props.children);
};

export default If;