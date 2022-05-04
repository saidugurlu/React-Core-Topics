export const Employee = ({ emp }) => {
  return <div className="employee">{`${emp.firstName} ${emp.lastName}`}</div>;
};

export default Employee;
