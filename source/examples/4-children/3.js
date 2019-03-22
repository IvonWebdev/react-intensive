// Core
import React from 'react';
import { render } from 'react-dom';

const Child = (props) => {
    console.log('→ props', props);
    console.log('→ typeof props.children', typeof props.children);

    return props.children;
};

const Parent = () => {
    return <Child>{null}</Child>;
};

render(<Parent />, document.getElementById('app'));
