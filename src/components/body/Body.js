import React from 'react';
import itemsData from './items.json'; // Import items.json

const Body = () => {
    return (
        <div className="body">
            <h2>Body Component</h2>
            <ul>
                {itemsData.map((item, index) => (
                    <li key={index}>
                        <img src={item.picture} alt={item.name} />
                        <div>
                            <h3>{item.name}</h3>
                            <p>Chapter: {item.chapter}</p>
                            <p>Time: {item.time}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Body;
