import classNames from 'classnames/bind';
import styles from './suggestedAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import PopperWrapper from '../PoperWrapper';
import AccountPreview from '../AcountPreivew/AccountPreview';
import Image from '../Image';
const cx = classNames.bind(styles);
function SuggestedAccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <Tippy interactive delay={[600, 0]} placement="bottom" offset={[-20, 0]} render={renderPreview}>
            <div className={cx('account-item')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                <div className={cx('item-info')}>
                    <p className={cx('nick-name')}>
                        <strong>{data.nickname}</strong>
                        {!!data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                    </p>
                    <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                </div>
            </div>
        </Tippy>
    );
}
export default SuggestedAccountItem;
