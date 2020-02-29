export default {
  createEmployee: (employee) => {
    return fetch('/employee',
      {method: 'post',
       body: JSON.stringify(employee),
       headers: {
        "Content-Type": "application/json"
       }})
      .then(res => res.json())
      .then(data => data);
  },
  getEmployees: () => {
    return fetch('/employee')
      .then(res => res.json())
      .then(data => data);
  },
  updateEmployees: (employee) => {
    return fetch(`/employee/${employee._id}`,
      {method: 'put',
       body: JSON.stringify(employee),
       headers: {
        "Content-Type": "application/json"
       }})
      .then(res => res.json())
      .then(data => data);
  },
  deleteEmployees: (_id) => {
    return fetch(`/employee/${_id}`,
      {method: 'delete'})
      .then(res => res.json())
      .then(data => data);
  }
}