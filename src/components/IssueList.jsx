import React from 'react'

function IssueList(props) {
    const handleclick=()=>{
        console.log("hello");
    }
  return (
    <div className='IssueList'>
        <button onClick={handleclick}>submit</button>
    </div>
  )
}

export default IssueList