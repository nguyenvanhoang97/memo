import React, {useState, useEffect, createContext, useCallback, useMemo} from 'react';
import axios from 'axios';
import UserContext1 from "./UseContext";
import UserContext2 from "./UseContext1";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const UserContext = createContext({name: 'abc', age: 0})

export interface InterfaceApp {
    counter: Function
}

function useAxios(url: any) {
    const [state, setState] = useState({posts: [], isLoading: false})
    const [error, setError] = useState(null)

    useEffect(() => {
        setState(prevState => ({
            posts: [],
            isLoading: true
        }))
        axios.get(url)
            .then(res => {
                setState(prevState => ({
                    posts: res.data,
                    isLoading: false
                }))
            })
            .catch(error => setError(error));
    }, [url])

    return { state, error }
}

function App() {
    const [name, setName] = useState('abc');
    const [count, setCount] = useState(0);

    const counter = useCallback(
        n => {
            setCount(count => count + n);
        },
        [setCount]
    );

    const useMemo1 = useMemo(() => UserContext1(count), [count]);

    const useMemo2 = useMemo(() => UserContext2(name), [name]);

    const { state, error } = useAxios(BASE_URL)
    console.log(state)

    if (error) {
        return (<div>Loi</div>)
    }

    if (state.isLoading) {
        return <h1>Loading posts...</h1>
    }

    return (
        <div>
            <UserContext.Provider value={{name:(name), age:(count)}}>
                <div style={{backgroundColor:"red"}}>
                    {useMemo1}

                    {useMemo2}
                </div>
            </UserContext.Provider>

            <div>
                <h1>App</h1>
                {
                    state.posts.map((da: any, index) => {
                        return(
                            <div>
                                <h2>{da.title}</h2>
                                <p>{da.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
      );
}

export default App;
