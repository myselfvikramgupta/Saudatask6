import React, { useEffect, useState } from 'react';
import UserList from './components/UserList'
import UserDetails from './components/UserDetails'
import './App.css';

function App() {
  const [dataList, setDataList] = useState([]);
  let [singleData,setSingleData]=useState([]);
  useEffect(() => {
    fetch("https://api.sampleapis.com/futurama/characters")
      .then(res => res.json())
      .then(
        (result) => {
          setDataList(result);
          setSingleData(result[0]);
        },
        (error) => {
        }
      )
  }, [])
  
  return (
    <div className="container">
   {!dataList.length ?  
    <div className="Loding">
        Loding....
    </div>:
    <div className="main">
        <UserList dataList={dataList} setSingleData={setSingleData} />
        <UserDetails singleData={singleData} />
      </div>
   }
    </div>
  );
}

export default App;
