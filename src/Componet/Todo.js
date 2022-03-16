import React, { useState } from 'react';
import List from './List';
import './todo.css'
const Todo = () => {
    const [list , setList] = useState();
    const [item , setItem] = useState([]);
    const todo =(event)=>{
        setList(event.target.value);
    };
    const click = () =>{
        setList('');
         setItem ((oldlist) =>{
            return [...oldlist, list]
        });
    }
    const remove=(id)=>{
        console.log('remove');
        setItem ((oldlist) =>{
            return oldlist.filter((arrayEln, index) =>{
                return index !== id;
            })
        });
    }
    
    return (
        <div className='background'>
            <div className='content-mid'>
                <div className='content'>
                    <br />
                    <hr />
                    <h1 className='tittel'>TODO APP </h1>

                    <input type="text" placeholder='Type Your Item' onChange={todo} className='input' value={list} />
                    <button className='btn' onClick={click}>+</button>
                    
                </div>
                <div className='item'>
                    <ul>
                        {item.map((items, index) =>{
                            return <List text = {items} Key={index} id={index} onSelect={remove}/>;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Todo;