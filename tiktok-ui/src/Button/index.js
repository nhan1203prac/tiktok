import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    href,
    to,
    onClick,
    children,
    primary,
    outline,
    small,
    large,
    text,
    rounded,
    leftIcon,
    rightIcon,
    classNamess,
    sereprate,
    followBtn,
    ...attr
}) {
    let Comp = 'button';
    const props = {
        onClick,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        Comp = 'a';
        props.to = to;
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        rounded,
        classNamess,
        sereprate,
        followBtn,
    });
    return (
        <Comp {...props} {...attr} className={classes}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
Button.propTypes = {
    href: PropTypes.string,
    to: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    classNamess: PropTypes.bool,
    sereprate: PropTypes.bool,
};
export default Button;
