import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '../../Button';
const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    // const classes = cx('menu-item', { sereprate: data.sereprate });
    return (
        <Button sereprate={data.sereprate} classNamess leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}
export default MenuItem;
