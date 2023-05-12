import React from 'react';
import issuelist from './isselist';

function CreateIssue() {
    const handleform = (event) => {
        event.preventDefault();
        const issuetitle = event.target[0].value;
        const issuedesc = event.target[1].value;
        const obj={
            title:issuetitle,
            desc:issuedesc
        }
        issuelist.push(obj)
        console.log(issuetitle,issuedesc);
        window.location.href = 'http://localhost:3000'
    }
    return (
        <form className='CreateIssue' onSubmit={handleform}>
            <input type="text" className='title'placeholder='Please Enter Title' />
            <span>Enter Your Issue:</span>
            <textarea type="text" className='description'/>
            <button type='submit' className='submitissue'>Submit New Issue</button>
        </form>
    )
}

export default CreateIssue;