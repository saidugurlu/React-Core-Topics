import React from 'react'
import { Employee } from './Employee';

function Employees({employees}) {
  return (
    <div className="employees">
    {employees.map((emp, index) => {
        return (
            <Employee key={index} emp={emp} />
        );
    })}
</div>
  )
}

export default Employees