import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

import Example from '../../src';

const ArticleContainer = ({ children }) => (
    <div style={{ display: 'flex', maxWidth: '990px', marginLeft: 'auto', marginRight: 'auto' }}>
        {children}
    </div>
);

ArticleContainer.propTypes = { children: PropTypes.any };

const FullWidthArticle = () => (
    <div style={{ backgroundColor: '#ccc', width: '100%', height: '400px', margin: '10px' }} />
);

const HalfWidthArticle = () => (
    <div style={{ backgroundColor: '#ccc', width: '50%', height: '400px', margin: '10px' }} />
);

class Demo extends Component {
    render() {
        return (
            <div>
                <h1>ad Demo</h1>
                <ArticleContainer>
                    <FullWidthArticle />
                </ArticleContainer>
                <ArticleContainer>
                    <HalfWidthArticle />
                    <HalfWidthArticle />
                </ArticleContainer>
                <ArticleContainer>
                    <HalfWidthArticle />
                    <HalfWidthArticle />
                </ArticleContainer>
                <Example
                    height="150px"
                    width="980px"
                    target="topboard-ad"
                />
                <ArticleContainer>
                    <HalfWidthArticle />
                    <HalfWidthArticle />
                </ArticleContainer>
                <ArticleContainer>
                    <HalfWidthArticle />
                    <HalfWidthArticle />
                </ArticleContainer>
                <ArticleContainer>
                    <HalfWidthArticle />
                    <HalfWidthArticle />
                </ArticleContainer>
            </div>
        );
    }
}

render(<Demo />, document.querySelector('#demo'));
