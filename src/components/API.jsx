import React, {useState, useEffect} from 'react'

export default function API() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const url="https://api.thecatapi.com/v1/images/search?limit=10";
        fetch(url)
        .then((res) => res.json())
        .then ((data) => setData(data))
        .catch((err) => console.log(err))
    }, []);
    console.log(data);
  return (
    <><div>API</div><h1>Hello Everyone</h1></>
  )
}
