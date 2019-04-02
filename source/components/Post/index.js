// Core
import React, { Component } from 'react';
import moment from 'moment';
import { func, string, number, array } from 'prop-types';

// Instruments
import Styles from './styles.m.css';

import Like from 'components/Like';
import { Consumer } from 'components/HOC/withProfile';

class Post extends Component {
    static propTypes = {
        _likePost:   func.isRequired,
        _removePost: func.isRequired,
        id:          string.isRequired,
        comment:     string.isRequired,
        created:     number.isRequired,
        likes:       array.isRequired,
    };

    constructor() {
        super();

        this._removePost = this._removePost.bind(this);
    }

    _removePost() {
        const { _removePost, id } = this.props;

        _removePost(id);
    }

    render() {
        const { comment, created, likes, id, _likePost } = this.props;

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
                        <Like
                            _likePost = { _likePost }
                            id = { id }
                            likes = { likes }
                            { ...context }
                        />
                        <span
                            className = { Styles.cross }
                            onClick = { this._removePost }>
                            X
                        </span>
                    </section>
                )}
            </Consumer>
        );
    }
}

export { Post };
