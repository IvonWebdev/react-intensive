// Core
import React from 'react';
import { render } from 'react-dom';

const Child = (props) => {
    console.log('→ props', props);
    console.log('→ typeof props.children', typeof props.children);

    return props.children;
};

const Parent = () => {
    return <Child>Avada kedavra!</Child>;
};

render(<Parent />, document.getElementById('app'));
