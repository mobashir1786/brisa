import axios from 'axios'
import React, { useState,useEffect } from 'react'
import Issuecard from './Issuecard';

function IssueList(props) {
  
  const [issue, setissue] = useState([])
  const [closedissue, setCloseissue] = useState([])
  useEffect(() => {
    axios.get('https://brisha-backend.vercel.app/getissue')
      .then((res) => {
        const data = res.data.output;
        let data1=data.filter(n=>n.issue==="generated")
        setissue(data1);
        let data2=data.filter(n=>n.issue==="resolved")
        setCloseissue(data2)
      });
  }, []);
    const handleclick=()=>{
        console.log("hello");
    }
  return (
    <div className='IssueList'>
        {
        issue.map((n) => (<Issuecard key={n._id} isuid={n._id} title={n.title} desc={n.desc}/>))
      }
    </div>
  )
}

export default IssueList