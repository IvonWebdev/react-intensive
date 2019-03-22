// Core
import React from 'react';
import { render } from 'react-dom';

const Child = (props) => {
    /**
     * props.children — это непрозрачная структура данных.
     * от англ. opaque data structure
     */

    console.log('→ props.children', props.children);
    console.log('→ Array.isArray(children)', Array.isArray(props.children));

    return props.children;
};

const Parent = () => {
    return (
        <Child>
            <p>Lorem</p>
            <p>ipsum</p>
            <p children = 'dolor' />
            <p children = 'sit amet!' />
        </Child>
    );
};

render(<Parent />, document.getElementById('app'));
