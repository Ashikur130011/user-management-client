import React, { useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const User = () => {

    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)

    console.log(loadedUsers)

    const handleDelete = (id) => {
        console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
                fetch(`http://localhost:5000/user/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.deleteCount === 1){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                            }
                            
                            const remainingUsers = users.filter(user => user._id !== id)
                            setUsers(remainingUsers)
                        
                    })
            }
           
          });

        

    }
    return (
        <div className="overflow-x-auto mt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className='font-bold text-sm'>Email</th>
              <th className='font-bold text-sm'>Register Time</th>
              <th className='font-bold text-sm'>Last Logged at</th>
              <th className='font-bold text-sm'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map(user => <tr key={user._id} className="hover">
                    <td>{user.email}</td>
                    <td>{user.createdAt}</td>
                    <td>{user.lastLoggedat
                    }</td>
                    <td><button onClick={() => handleDelete(user._id)}>< MdDeleteForever color='red' size={30} /></button></td>
                  </tr>)
            }
            
           
          </tbody>
        </table>
      </div>
    );
};

export default User;