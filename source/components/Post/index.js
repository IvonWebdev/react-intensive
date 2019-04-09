// Core
import React, { Component } from 'react';
import moment from 'moment';
import { func, string, number, array } from 'prop-types';

// Instruments
import Styles from './styles.m.css';

import Like from 'components/Like';
import { withProfile } from 'components/HOC/withProfile';

@withProfile
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

    _getCross = () => {
        const { firstName, lastName, currentUserFirstName, currentUserLastName } = this.props;

        return `${firstName} ${lastName}` === `${currentUserFirstName} ${currentUserLastName}` ? (
            <span
                className = { Styles.cross }
                onClick = { this._removePost }
            />
        ) : null;
    };

    render() {
        const { comment, created, likes, id, _likePost, firstName, lastName, avatar } = this.props;

        const cross = this._getCross();

        return (
            <section className = { Styles.post }>
                <img src = { avatar } />
                <a>{`${firstName} ${lastName} ${id}`}</a>
                <time>{moment.unix(created).format('MMMM D h:mm:ss a')}</time>
                <p>{comment}</p>
                <Like
                    _likePost = { _likePost }
                    id = { id }
                    likes = { likes }
                />
                {cross}
            </section>
        );
    }
}

export { Post };
