import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchTasks, getTasks } from '../actions/taskAction';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios'


function Home() {
    // const alert = useAlert();
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const { loading, task } = useSelector(state => state.tasks);
  const [selectedStatus, setSelectedStatus] = useState('All');



  useEffect(() => {
    dispatch(getTasks(keyword));

  }, [dispatch,keyword]);


  const handleDelete = async (id) => {
    const response = await axios.delete('/api/v1/task/'+id)
    .then(response => {
        window.location.reload();
    }).catch(err => console.log(err))

}

// Filter tasks based on selectedStatus
const filteredTasks = selectedStatus === 'All' ? task : task.filter(task => task.status === selectedStatus);
  return (
    <div>
      <div className="filter-container">
                <label className='filter_drp' htmlFor="status_filter">Status:</label>
                <select
                    id="status_filter"
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
            </div>
   
<div className="table-container table-container">
<table>
  <thead>
    <tr>
      <th>Task</th>
      <th>Description</th>
      <th>Status</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
  {filteredTasks.map((task,index) => {
                  return (<tr key={index}>
                    <td>{task.title}</td>
                      <td>{task.description}</td>
                      <td>{task.status}</td>
                      <td>
                          <Link to={`/update/${task._id}`}  className='btn delete-button'>Edit</Link>
                      </td>
                      <td>
                          <button onClick={() => handleDelete(task._id)} className='btn delete-button'>Delete</button>
                      </td>
                  </tr>)
              })}
  </tbody>
</table>
<div className='create_btn'>
<Link to="/create" className="btn btn-outline-primary">Create</Link>
</div>

</div>
  </div>
  )
}

export default Home
