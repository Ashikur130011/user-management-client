import React from 'react';
import { useLoaderData } from 'react-router-dom';

const User = () => {

    const loadedUsers = useLoaderData()
    console.log(loadedUsers)

    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE'
        })
    }
    return (
        <div className="overflow-x-auto mt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className='font-bold text-sm'>Email</th>
              <th className='font-bold text-sm'>Register Time</th>
              <th className='font-bold text-sm'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
                loadedUsers.map(user => <tr key={user._id} className="hover">
                    <td>{user.email}</td>
                    <td>{user.createdAt}</td>
                    <td><button onClick={() => handleDelete(user._id)}>X</button></td>
                  </tr>)
            }
            
           
          </tbody>
        </table>
      </div>
    );
};

export default User;