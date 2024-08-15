import classNames from 'classnames/bind';
import styles from './Sidabar.module.scss';
import MenuSidebar from './Menu-sidebar/MenuSidebar';
import MenuSidebarItem from './Menu-sidebar/MenuSidebarItem';
import routeConfig from '../../../config/routes';
import { HomeIcon, LiveIcon, UserGroupIcon } from '../../../icons';
import { HomeActiveIcon, UserGroupActiveIcon, LiveActionIcon } from '../../../icons';
import SuggestedAccount from '../../../suggestedAccount/suggestedAccount';
import httpRequest from '../../../utils/httpRequest';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);
function Sidebar() {
    const [isSeeAll, setIsSeeAll] = useState(true);

    const [suggestedUsers, setSuggestesUsers] = useState([]);
    const [followingUser, setFollowingUser] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        httpRequest
            .get(`users/suggested`, {
                params: {
                    page,
                    per_page: '5',
                },
            })
            .then((data) => {
                setSuggestesUsers((pre) => [...pre, ...data.data.data]);
            });
    }, [page]);

    const onSeeAll = (isSeeAlls) => {
        setIsSeeAll((pre) => !pre);
        if (isSeeAlls) {
            setPage(page + 1);
        } else {
            setSuggestesUsers((pre) => pre.slice(0, 5));
        }
    };
    return (
        <aside className={cx('wrapper')}>
            <MenuSidebar>
                <MenuSidebarItem
                    title="For You"
                    to={routeConfig.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuSidebarItem
                    title="Following"
                    to={routeConfig.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuSidebarItem
                    title="Live"
                    to={routeConfig.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActionIcon />}
                />
            </MenuSidebar>
            <SuggestedAccount
                label="Suggested Account "
                data={suggestedUsers}
                onSeeAll={onSeeAll}
                isSeeAll={isSeeAll}
            />
            <SuggestedAccount label="Following account" />
        </aside>
    );
}
export default Sidebar;
