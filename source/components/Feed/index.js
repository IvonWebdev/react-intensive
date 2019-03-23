// Core
import React from 'react';

// Components
import { StatusBar, Composer, Post } from '../../components';

// Instruments
import Styles from './styles.m.css';

export const Feed = (props) => {
    const { avatar, currentUserFirstName } = props;

    return (
        <section className = { Styles.feed }>
            <StatusBar { ...props } />
            <Composer
                avatar = { avatar }
                currentUserFirstName = { currentUserFirstName }
            />
            <Post { ...props } />
        </section>
    );
};
