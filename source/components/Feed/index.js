// Core
import React from 'react';

// Components
import { StatusBar, Composer, Post } from '../../components';

// Instruments
import Styles from './styles.m.css';

export const Feed = () => {
    return (
        <section className = { Styles.feed }>
            <StatusBar />
            <Composer />
            <Post />
        </section>
    );
};
