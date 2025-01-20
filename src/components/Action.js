import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, classNames} from '../utils';

export default class Action extends React.Component {
    render() {
        const action = _.get(this.props, 'action');
        const url = _.get(action, 'url');
        const label = _.get(action, 'label');
        const style = _.get(action, 'style', 'link');
        const classes = classNames({
            'btn': style !== 'link',
            'btn--secondary': style === 'secondary',
            'btn--instagram': style === 'instagram',
            'btn--github': style === 'github',
            'btn--twitter': style === 'twitter',
            'btn--linkedin': style === 'linkedin',
            'btn--info': style === 'info',
            'btn--laravel': style === 'laravel',
            'btn--javascript': style === 'javascript',
            'btn--facebook': style === 'facebook',
            'btn--blue': style === 'blue',
            'btn--green': style === 'green',
            'btn--purple': style === 'purple',
            'btn--dotnet': style === 'dotnet',
            'btn--xamarin': style === 'xamarin',
            'btn--react': style === 'react',
            'btn--recap': style === 'recap',
            'btn--recap-dark': style === 'recap-dark'
        });
        const newWindow = _.get(action, 'new_window');
        const noFollow = _.get(action, 'no_follow');
        const attrs = {};
        if (newWindow) {
            attrs.target = '_blank';
        }
        if (newWindow || noFollow) {
            attrs.rel = [(newWindow ? 'noopener' : ''), (noFollow ? 'nofollow' : '')].filter(Boolean).join(' ');
        }
        return (
            <Link href={withPrefix(url)} {...attrs} className={classes}>
                {label}
            </Link>
        );
    }
}
