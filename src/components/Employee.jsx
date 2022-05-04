import React from 'react'

function Employee({emp}) {
  return (
    <div key={index} className="employee">
                {`${emp.firstName} ${emp.lastName}`}
            </div>
  )
}

export default Employee