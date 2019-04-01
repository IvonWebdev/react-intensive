// Core
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

// Instruments
import Styles from './styles.m.css';

import { Consumer } from 'components/HOC/withProfile';

export const Post = (props) => {
    const { comment, created } = props;

    return (
        <Consumer>
            {(context) => (
                <section className = { Styles.post }>
                    <img src = { context.avatar } />
                    <a>
                        {context.currentUserFirstName} {context.currentUserLastName}
                    </a>
                    <time>{moment.unix(created).format('MMMM D h:mm:ss a')}</time>
                    <p>{comment}</p>
                </section>
            )}
        </Consumer>
    );
};

Post.propTypes = {
    comment: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
};
