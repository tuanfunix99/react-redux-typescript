import { useState } from "react";
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import allActions from '../actions/allActions';
import DisplayList from './DisplayList';

const FindNpm: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(state => state.repositories);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
  }

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(allActions.repositoriesAcs.search_repositories(search));
      setSearch('');
  }

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input type="text" onChange={onChangeHandler} value={search} />
        <button>Find</button>
      </form>
      { loading && <h6>Loading...</h6>}
      { data && data.length > 0 && <DisplayList lists={data} /> }
      { data && data.length <= 0 && !error && !loading && <h6>not found</h6>}
    </>
  );
};

export default FindNpm;
