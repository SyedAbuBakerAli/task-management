import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createTask } from '../actions/taskAction';

function Create() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { isAuthenticated, loading } = useSelector(state => state.tasks);

  const submitHandler = (e) => {
    e.preventDefault();

    // Use a plain object for simplicity
    const taskData = {
      title,
      description,
      status,
    };
    if(!title || !description || !status){
      setErrorMsg('Please fill all fields');
    }else{
      dispatch(createTask(taskData));
      navigate('/')
    }

  }

  return (
    <div className='container-fluid'>
      <div>
      <Link to="/" className="btn btn-outline-primary back_btn">Back</Link>
      </div>
      
      <div className='view-side borders form-fields'>
        <h2 className='title-text'>Create Task</h2>
        {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
        <div className='login-box'>
          <form className='form-style' onSubmit={submitHandler}>
            <div className="form-group">
              <label for="title">Title</label>
              <input type="text" className="form-control" id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="description">Description</label>
              <input type="text" className="form-control" id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div class="input-group mb-3 status-form">
              <label class="input-group-text" for="inputGroupSelect01">Status</label>
              <select class="form-select" id="inputGroupSelect01" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="" disabled>Choose...</option>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>


    </div>
  )
}

export default Create
