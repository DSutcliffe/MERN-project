import react from 'react';

const EmployeeTableRow = (props) => {
  const {firstName, lastName, job, salary, _id} = props.employee;
  return(
    <tr>
      <th scope="row">1</th>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{job}</td>
      <td>{salary}</td>
      <td>
        <div className="btn-group" role="group" aria-label="basic example">
          <button  type="button" onClick={props.showEditForm.bind(this, props.employee)} className="btn btn-secondary">Edit</button>
          <button  type="button" onClick={props.deleteHandler.bind(this, _id)} className="btn btn-danger">Delete</button>
        </div>
      </td>
    </tr>
  )
}

export default EmployeeTableRow