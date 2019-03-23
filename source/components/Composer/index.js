// Core
import React from 'react';

// Instruments
import Styles from './styles.m.css';

export const Composer = (props) => {
    const { avatar, currentUserFirstName } = props;

    return (
        <section className = { Styles.composer }>
            <img src = { avatar } />
            <form>
                <textarea placeholder = { `What's on your mind, ${currentUserFirstName}?` } />
                <input
                    type = 'submit'
                    value = 'Post'
                />
            </form>
        </section>
    );
};
