import React, {useState, useEffect, createContext, useMemo} from 'react';
import axios from 'axios';
import UseContext3 from "./UseContext2";
import UsersContainer2 from "./thunkRedux2";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export interface InterfaceApp3 {
    count: number,
    name: string
}

export const UseContext = createContext({name: '', count: 0})

function useAxios(url: any) {
    const [state, setState] = useState({posts: [], isLoading: false})
    const [error, setError] = useState(null)

    const getData = async () => axios.get(url)
        .then(res => {
            setState(prevState => ({
                posts: res.data,
                isLoading: false
            }))
        })
        .catch(error => setError(error));

    useEffect(() => {
        setState(prevState => ({
            posts: [],
            isLoading: true
        }))
        getData()
    }, [url])

    return { state, error }
}

function App() {

    const [name, setName] = useState<string>('abc');
    const [count, setCount] = useState<number>(10);

    const { state, error } = useAxios(BASE_URL)

    const useMemo3 = useMemo(() => <UseContext3 count={count} name={name} />, [])

    if (error) {
        return (<div>Loi</div>)
    }
    if (state.isLoading) {
        return <h1>Loading posts...</h1>
    }

    return (
        <div>
            <UseContext.Provider value={{name:(name), count:(count)}}>
                <div style={{backgroundColor:"red"}}>
                    {useMemo3}
                </div>
            </UseContext.Provider>

            <button onClick={() => setCount(count + 1)}>Click</button>

            <div>
                <h1>App</h1>
                {
                    state.posts.map((da: any) => {
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
