import React, {useState,useEffect} from "react";
import './custom.css';
export default function HooksExample(){
    const [resourceType, setResourceType] = useState('posts')
    const  [items, setItems] = useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(json => setItems(json))
    },[resourceType])
    return (
        <>
            <div>
            <button onClick={()=> setResourceType('posts')}>Posts</button>
            <button onClick={()=> setResourceType('users')}>User</button>
            <button onClick={()=> setResourceType('comments')}>Comment</button>
            </div>
            <h1>{resourceType}</h1>
            {
                items.map((items,key)=> {
                    return <pre key={key}>{JSON.stringify(items)}</pre>
                })
            }
            
        </>
    )
}