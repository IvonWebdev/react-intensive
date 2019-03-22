// Core
import React, { Children } from 'react';
import { render } from 'react-dom';

const Child = (props) => {
    return Children.only(props.children);
};

const Parent = () => {
    return (
        <Child>
            <h1>I am the one!</h1>
        </Child>
    );
};

render(<Parent />, document.getElementById('app'));
