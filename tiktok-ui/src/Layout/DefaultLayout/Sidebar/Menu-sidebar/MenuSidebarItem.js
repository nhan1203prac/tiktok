import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './MenuSidebar.module.scss';
const cx = classNames.bind(styles);
function MenuSidebarItem({ title, to, icon, activeIcon }) {
    return (
        <NavLink className={(nav) => cx('Menu-sidebar-item', { active: nav.isActive })} to={to}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('activeIcon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}
export default MenuSidebarItem;
