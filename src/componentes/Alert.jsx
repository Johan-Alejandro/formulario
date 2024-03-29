const Alert = ({ message, color }) => {
  return (
    <>
      <div className={`alert alert-${color} mt-3`} role="alert">
        {message}
      </div>
    </>
  );
};
export default Alert;
