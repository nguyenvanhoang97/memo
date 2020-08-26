import React, {useState} from 'react';
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

function PostRenderProps() {
    const [state, setState] = useState({posts: [], isLoading: false})
    const [error, setError] = useState(null)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [userID, setUserID] = useState('')

    const handleSubmit= (e: any) => {
        setState(prevState => ({
            posts: [],
            isLoading: true
        }))
        e.preventDefault();
        const data = {title, body, userID}

        axios({
            method: 'post',
            url: BASE_URL,
            data: data
        })
            .then(res => {
                console.log(res.data)
                setState(prevState => ({
                    posts: res.data,
                    isLoading: false
                }))
                alert('Thanh cong')
            })
            .catch(error => {setError(error)})
        return {state, error}
    }
    if (error) {
        return (<div>Loi</div>)
    }
    if (state.isLoading) {
        return <h1>Loading posts...</h1>
    }

    return (
        <div>
            <div>
                <input type="text" id="title" name="title"
                       value={title}
                       onChange={e => setTitle(e.target.value)}/>
                <input type='text' id='body' name='body'
                       value={body}
                       onChange={e => setBody(e.target.value)}/>
                <input type='text' id='userID' name='userID'
                       value={userID}
                       onChange={e => setUserID(e.target.value)}/>

                <button onClick={handleSubmit}>Send</button>
            </div>

            <div>
                <h1>App</h1>
            </div>
        </div>
    );
}

export default PostRenderProps;
