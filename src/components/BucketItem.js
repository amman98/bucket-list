import React, {useState} from 'react';
import BucketForm from './BucketForm';

export default function BucketItem({id, text, importance, complete, isComplete, onDelete, onUpdate }) {
    const [edit, setEdit] = useState({
        id: null,
        text: text,
        importance: importance,
    });

    const importanceColor = () => {
        if(isComplete) {
            return "#808080";
        }
        else {
            if(importance === "high") {
                return "red";
            } else if(importance === "medium") {
                return "yellow";
            } else {
                return "green";
            }
        }
    }

    const completeBucketItem = (e) => {
        e.preventDefault();
        complete(parseInt(e.target.id));
    };

    const deleteBucketItem = (e) => {
        e.preventDefault();
        onDelete(parseInt(e.target.id));

    };    
    
    const updateBucketItem = (value) => {
        onUpdate(edit.id, value);
        setEdit({id: id, value: text, importance: importance})
    };

    if(edit.id) {
        return <BucketForm edit={edit} onSubmit={updateBucketItem} />;
    }

    return (
        <div>
            <h3>{text}, {importance}</h3>
            <button onClick={completeBucketItem} id={id}>Complete</button>
            <button id={id} onClick={deleteBucketItem}>Delete</button>
            <button id={id} onClick={updateBucketItem}>Edit</button>
        </div>
    )
}