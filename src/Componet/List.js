import React from 'react';

const List = (props) => {
    return (
        <div>
            
            <li> <span className='remove' onClick={()=>{props.onSelect(props.id)}}>-</span>{props.text}</li>
            <br />
         </div>
       
    );
};

export default List;