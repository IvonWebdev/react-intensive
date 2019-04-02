// Core
import React, { Component } from 'react';
import moment from 'moment';

// Components
import { StatusBar, Composer, Post } from '../../components';
import Spinner from 'components/Spinner';

// Instruments
import Styles from './styles.m.css';
import { getUniqueID, delay } from 'instruments';

class Feed extends Component {
    constructor() {
        super();

        this._createPost = this._createPost.bind(this);
        this._setPostsFetchingState = this._setPostsFetchingState.bind(this);
        this._likePost = this._likePost.bind(this);
        this._removePost = this._removePost.bind(this);
    }

    state = {
        posts: [
            { id: '1', comment: 'Hello world', created: 23123131231, likes: [] },
            { id: '2', comment: 'Sam hello', created: 23123131231, likes: [] },
        ],
        isSpinning: false,
    };

    _setPostsFetchingState(state) {
        this.setState({
            isSpinning: state,
        });
    }

    async _createPost(comment) {
        this._setPostsFetchingState(true);
        const post = {
            id:      getUniqueID(),
            created: moment.now(),
            comment,
            likes:   [],
        };

        await delay(1200);

        this.setState(({ posts }) => ({
            posts:      [ post, ...posts ],
            isSpinning: false,
        }));
    }

    async _likePost(id) {
        const { currentUserFirstName, currentUserLastName } = this.props;

        this._setPostsFetchingState(true);

        await delay(800);

        const newPosts = this.state.posts.map((post) => {
            if (post.id === id) {
                return {
                    ...post,
                    likes: [
                        {
                            id:        getUniqueID(),
                            firstName: currentUserFirstName,
                            lastName:  currentUserLastName,
                        },
                    ],
                };
            }

            return post;
        });

        this.setState({
            posts:      newPosts,
            isSpinning: false,
        });
    }

    async _removePost(id) {
        this._setPostsFetchingState(true);
        await delay(800);
        const newPosts = this.state.posts.filter((post) => post.id !== id);
        this.setState({
            posts:      newPosts,
            isSpinning: false,
        });
    }

    render() {
        const { posts, isSpinning } = this.state;

        const postJSQX = posts.map((post) => {
            return (
                <Post
                    key = { post.id }
                    { ...post }
                    _likePost = { this._likePost }
                    _removePost = { this._removePost }
                />
            );
        });

        return (
            <section className = { Styles.feed }>
                <Spinner isSpinning = { isSpinning === true ? isSpinning : false } />
                <StatusBar />
                <Composer _createPost = { this._createPost } />
                {postJSQX}
            </section>
        );
    }
}

export { Feed };
