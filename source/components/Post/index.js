// Core
import React from 'react';
import moment from 'moment';

// Instruments
import Styles from './styles.m.css';

export const Post = (props) => {
    const { avatar, currentUserFirstName, currentUserLastName } = props;

    return (
        <section className = { Styles.post }>
            <img src = { avatar } />
            <a>
                {currentUserFirstName} {currentUserLastName}
            </a>
            <time>{moment().format('MMMM D h:mm:ss a')}</time>
            <p>Howdy!</p>
        </section>
    );
};
