import TippyHeadless from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';
import PopperWrapper from '../PoperWrapper';
import AcountItem from '../AcountItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchIcon } from '../icons';
import useDebounce from '../hook/useDebounce';
import httpRequest from '../utils/httpRequest';

// import images from '../assets/images';

const cx = classNames.bind(styles);

function Search() {
    // console.log(images.logo);
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState(''); //chữ của input
    const [showResult, setShowResult] = useState(true); //điều khiển xuất hiện tippy
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const debouncedValue = useDebounce(searchValue, 500);
    useEffect(() => {
        if (searchValue.trim() === '') {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        httpRequest
            .get(`users/search`, {
                params: {
                    q: debouncedValue,
                    type: 'less',
                },
            })
            // .then((res) => res.json())
            .then((res) => {
                // console.log(res.data.data);
                setSearchResult(res.data.data);
                // console.log(res.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleChange = (e) => {
        const valueSearch = e.target.value;
        if (!valueSearch.startsWith(' ')) {
            setSearchValue(valueSearch);
        }
    };
    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <TippyHeadless
                visible={showResult && searchResult.length > 0}
                interactive
                render={(attr) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attr}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Acount</h4>
                            {searchResult.map((result) => (
                                <AcountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        value={searchValue}
                        ref={inputRef}
                        placeholder="Search account and video"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </TippyHeadless>
        </div>
    );
}
export default Search;
