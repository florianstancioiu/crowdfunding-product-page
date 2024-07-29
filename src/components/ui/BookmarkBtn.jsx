import { useState } from 'react';
import classes from './BookmarkBtn.module.css';
import SvgButton from './SvgButton';
import bookmarkSvg from '../../images/icon-bookmark.svg';

const BookmarkBtn = () => {
  const [active, setActive] = useState(false);

  const onBookmarkBtnClick = () => {
    setActive((value) => !value);
  };

  return (
    <div onClick={onBookmarkBtnClick} className={classes['bookmark-btn']}>
      <SvgButton className={classes['svg-btn']} svg={bookmarkSvg} />
      <p className={classes.title}>{active ? 'Bookmarked' : 'Bookmark'}</p>
    </div>
  );
};

export default BookmarkBtn;
