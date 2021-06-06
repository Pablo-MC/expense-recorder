const AddNewExpenses = (props) => {
  const showFormHandler = () => {
    props.onShowForm(true);
  };

  return (
    <div>
      <button onClick={showFormHandler}>Add New Expense</button>
    </div>
  );
}

export default AddNewExpenses;