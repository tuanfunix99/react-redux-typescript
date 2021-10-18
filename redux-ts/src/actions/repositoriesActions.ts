
import { repositoriesActions } from '../reducers/repositories'
import { fetchNpm } from '../api/data';
import { AppDispatch } from '../hooks/store';

const search_repositories = (search: string) => async (dispatch: AppDispatch) => {
    dispatch(repositoriesActions.search_repositories());
    try{
        const { data }: any = await fetchNpm(search);
        const npms = data.objects.map((obj: any) => {
            return obj.package.name;
        })
        return dispatch(repositoriesActions.search_repositories_success(npms));  
    } catch (error: any) {
        return dispatch(repositoriesActions.search_repositories_error(error.message));
    }
}

const repositoriesAcs = {
    search_repositories
}

export default repositoriesAcs;