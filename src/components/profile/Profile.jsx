import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Imaage from 'components/Imaage/Imaage';



const Profile = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
      setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/error')
          .then(res => {
            if(!res.ok){
              window.location.href = "http://localhost:3000/error";
          }
          return res.json();
        })
        .then(data => {
          setBlogs(data);
          setIsPending(false);
        })
        .catch(err => {
          setError(err.message);
        })
      }, 500);
    }, []);

  return (
    <div>
      { error && <div> <Imaage></Imaage> </div>}
      { isPending && <div> <center> loading ... </center> </div>}
    </div>
  )
}

export default withRouter(Profile)
