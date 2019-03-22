// Core
import React, { Children } from 'react';
import { render } from 'react-dom';

const Child = (props) => {
    console.log('→ props.children', props.children);

    const childrenJSX = Children.toArray(props.children);

    console.log('→ childrenJSX', childrenJSX);

    return <ul>{childrenJSX}</ul>;
};

const Parent = () => {
    return (
        <Child>
            <li>First child</li>
            {/* <li>Second child</li> */}
            {/* <li>Third child</li> */}
        </Child>
    );
};

render(<Parent />, document.getElementById('app'));
