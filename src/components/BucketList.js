import React, { useState } from 'react';

export default function BucketList(props) {
    const [name, setName] = useState(props.name); // represents name of bucket-list item
    const [eagerness, setEagerness] = useState('white'); // represents eagerness level of bucket-list item

    return (
        <div>
            <div className={`bg-${eagerness}`}>
                <h2>
                    {name}
                </h2>
            </div>
        </div>
    );
}
