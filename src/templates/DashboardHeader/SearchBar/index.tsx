import { InputBase, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useRef, VFC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { SearchWords } from '../../../stores/SearchWords';

import useStyles from './style';

export const SearchBar: VFC = () => {
  const styles = useStyles();

  const inputRef = useRef<HTMLInputElement>(null);
  const [searchWords, setSearchWords] = useRecoilState(SearchWords);

  const navigate = useNavigate();

  // 検索ボタンクリックで、入力された検索キーワードをrecoilに反映しつつ、`/`にredirect
  const handleClickSearch = () => {
    const keyword = inputRef.current?.value;
    if (keyword) {
      setSearchWords({ title: keyword });
    } else {
      setSearchWords(undefined);
    }

    setTimeout(() => navigate('/'), 100);
  };

  return (
    // elevation={0}: 影を削除, variant="outlined": 枠線を表示
    <Paper className={styles.root} elevation={0} variant='outlined'>
      <InputBase
        className={styles.input}
        placeholder='検索ワードを入力'
        inputRef={inputRef}
        defaultValue={searchWords?.title}
      />
      <div
        className={styles.searchIcon}
        onClick={handleClickSearch}
        onKeyDown={handleClickSearch}
        role='button'
        tabIndex={0}
      >
        <SearchIcon />
      </div>
    </Paper>
  );
};
