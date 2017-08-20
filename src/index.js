import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WayPoint from 'react-waypoint';

import './styles.css';

export default class InscreenAd extends Component {
    static propTypes = {
        height: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]).isRequired,
        width: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]).isRequired,
        target: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);

        this.hasAd = false;

        this.state = { load: false };

        this._loadAdvert = () => {
            if (!this.state.load) {
                const scriptTag = document.createElement('script');

                scriptTag.src = 'http://localhost:4000/static/js/ad.js';
                scriptTag.async = true;

                this.instance.appendChild(scriptTag);
                this.setState({ load: true });
            }
        };

        this._unloadAdvert = () => {
            // this.setState({ laad: false });
        };
    }

    renderContent() {
        if (!this.hasAd) return null;

        const { height, width } = this.props;
        const style = {
            height: typeof height === 'number' ? `${height}px` : height,
            width: typeof width === 'number' ? `${width}px` : width,
        };

        return (
            <WayPoint onEnter={this._loadAdvert} onLeave={this._unloadAdvert}>
                <div
                    className="ad"
                    id={this.props.target}
                    ref={el => (this.instance = el)}
                    style={style}
                />
            </WayPoint>
        );
    }

    render() {
        return this.renderContent();
    }
}
