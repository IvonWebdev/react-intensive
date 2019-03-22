// Core
import React from 'react';
import moment from 'moment';

// Instruments
import avatar from '../../theme/assets/lisa';
import Styles from './styles.m.css';

export const Post = () => {
    return (
        <section className = { Styles.post }>
            <img src = { avatar } />
            <a>Lisa Simpson</a>
            <time>{moment().format('MMMM D h:mm:ss a')}</time>
            <p>Howdy!</p>
        </section>
    );
};
