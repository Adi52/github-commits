import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {PrimaryButton, RegularButton} from './Button.css';

const Button = ({ variant, children, ...props }) => {
    const { to } = props;

    const Component = useMemo(() => {
        switch (variant) {
            case 'regular':
                return RegularButton;
            case 'primary':
                return PrimaryButton;
            default:
                return RegularButton;
        }
    }, [variant]);

    const content = useMemo(() => (
        <Component {...props}>
            {children}
        </Component>
    ), [props, children])

    return to ? (
        <Link {...props}>
            {content}
        </Link>
    ) : (
        <>
            {content}
        </>
    );
};
Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'regular'])
}

export default Button;