
import { createSlice } from '@reduxjs/toolkit'

interface Repositories {
    loading: boolean;
    error: string | null;
    data: string[] | null;
}

const repositoriesState: Repositories = {
    loading: false,
    error: null,
    data: null
}

const repositoriesSlice = createSlice({
    name: 'repos',
    initialState: repositoriesState,
    reducers: {
        search_repositories(state: Repositories): Repositories {
            return {...state, loading: true, error: null, data: null};
        },
        search_repositories_success(state: Repositories, action): Repositories {
            return {...state, loading: false, error: null, data: action.payload};
        },
        search_repositories_error(state: Repositories, action): Repositories {
            return {...state, loading: false, error: action.payload, data: null};
        }
    }
})

export const repositoriesActions = repositoriesSlice.actions;

export default repositoriesSlice.reducer;

