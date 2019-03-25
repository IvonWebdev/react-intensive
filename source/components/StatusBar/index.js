// Core
import React from 'react';

// Instruments
import Styles from './styles.m.css';

import { Consumer } from 'components/HOC/withProfile';

export const StatusBar = () => {
    return (
        <Consumer>
            {(context) => (
                <section className = { Styles.statusBar }>
                    <button>
                        <img src = { context.avatar } />
                        <span>{context.currentUserFirstName}</span>&nbsp;
                        <span>{context.currentUserLastName}</span>
                    </button>
                </section>
            )}
        </Consumer>
    );
};
