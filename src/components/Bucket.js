import React, { useState } from 'react';
import BucketList from './BucketList';

export default function Bucket() {
    const [bucketList, setBucketList] = useState([]); // represents array of bucket-list items
    const [bucketListItem, setBucketListItem] = useState();

    // set bucket list item name on input change
    const handleInputChange = (e) => {
        const { target } = e;

        setBucketListItem(target.value);
    }

    const handleFormSubmit = () => {
        // setBucketList(bucketList.push(
        // <BucketList
        //     name={bucketListItem}
        // />));
        setBucketList(oldArray => [...oldArray, <BucketList name={bucketListItem}/>]);
        setBucketListItem('');
    };

    return (
        <div>
            <div>
                {bucketList}
            </div>
            <form>
                <input
                    value={bucketListItem}
                    name="bucketListItem"
                    onChange={handleInputChange}
                />
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleFormSubmit}
                >
                </button>
            </form>
        </div>
    );
}
