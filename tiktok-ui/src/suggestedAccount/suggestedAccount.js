import classNames from 'classnames/bind';
import styles from './suggestedAccount.module.scss';
import SuggestedAccountItem from './SuggestedAccountItem';

const cx = classNames.bind(styles);
function SuggestedAccount({ label, data = [], onSeeAll, isSeeAll }) {
    // console.log(isSeeAll);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map((account) => (
                <SuggestedAccountItem key={account.id} data={account} />
            ))}

            <p className={cx('btn-more')} onClick={() => onSeeAll(isSeeAll)}>
                {isSeeAll ? 'See all' : 'See less'}
            </p>
        </div>
    );
}
export default SuggestedAccount;
