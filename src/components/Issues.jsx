import React, { useEffect, useState } from 'react'
import NoIssue from './NoIssue'
import IssueList from './IssueList';
import issuelist from './isselist';

function Issues() {
  const [issue, setIssue] = useState(issuelist);
  useEffect(() => {
    console.log(issue);
  }, [issue])
  
  return (
    <div className='issues'>
      {
        issue.length === 0 ? <NoIssue /> : <IssueList isu="hello" sisu={setIssue} />
      }
    </div>
  )
}

export default Issues