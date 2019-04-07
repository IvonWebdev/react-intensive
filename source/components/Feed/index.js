// Core
import React, { Component } from 'react';
import moment from 'moment';

// Components
import { withProfile } from 'components/HOC/withProfile';
import { Post } from '../../components';
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Spinner from 'components/Spinner';

// Instruments
import Styles from './styles.m.css';
import { getUniqueID, delay } from 'instruments';

@withProfile
class Feed extends Component {
    constructor() {
        super();
    }

    state = {
        posts: [
            { id: '1', comment: 'Hello world', created: 23123131231, likes: [] },
            { id: '2', comment: 'Sam hello', created: 23123131231, likes: [] },
        ],
        isSpinning: false,
    };

    _setPostsFetchingState = (state) => {
        this.setState({
            isSpinning: state,
        });
    };

    _createPost = async (comment) => {
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
    };

    _likePost = async (id) => {
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
    };

    _removePost = async (id) => {
        this._setPostsFetchingState(true);
        await delay(800);
        const newPosts = this.state.posts.filter((post) => post.id !== id);
        this.setState({
            posts:      newPosts,
            isSpinning: false,
        });
    };

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
