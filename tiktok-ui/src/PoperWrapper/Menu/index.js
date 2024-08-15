import Tippy from '@tippyjs/react/headless';
import PopperWrapper from '..';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './Menu-item';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultffc = () => {};
function Menu({ children, items, hideOnClick = false, onChange = defaultffc }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    console.log(history);
    // [{data:[]}]

    console.log(current);
    // {data:[]}
    console.log(current.data);
    // []
    // vậy data:items thì data để truy xuất vào mảng nếu k có data: thì {[]} không thể vào mảng
    return (
        <Tippy
            interactive
            hideOnClick={hideOnClick}
            delay={[0, 500]}
            placement="bottom-end"
            render={(attr) => (
                <div className={cx('content')} tabIndex="-1" {...attr}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <HeaderMenu
                                title={current.title}
                                onBack={() => {
                                    setHistory((pre) => pre.slice(0, 1));
                                }}
                            />
                        )}
                        <div className={cx('menu-body')}>
                            {current.data.map((item, index) => {
                                const isParent = !!item.children;
                                return (
                                    <MenuItem
                                        key={index}
                                        data={item}
                                        onClick={() => {
                                            if (isParent) {
                                                setHistory((pre) => [...pre, item.children]);
                                            } else {
                                                onChange(item);
                                            }
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((pre) => pre.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}
export default Menu;
