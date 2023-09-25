import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function APPI() {
    const[data, setData] = useState([]);

    useEffect(()=> {
        const url="https://run.mocky.io/v3/bb876569-e21b-4dbf-8e16-1cbdaecff1b2"
        axios
        .get(url)
        .then((res)=>  setData(res.data))
        .catch((err) => console.log(err));
    }, []);
    console.log(data);
  return (
    <div>
        {data ? (
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>

                 ))}
            </ul>
        ) : (
            <p>Data not found</p>
        )}
    </div>
    
  )
}
