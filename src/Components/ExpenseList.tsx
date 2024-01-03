interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

function ExpenseList({ expenses, onDelete }: Props) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col"> </th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((item) => (
          <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.description}</td>
            <td>{item.amount}</td>
            <td>{item.category}</td>
            <td>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => onDelete(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>total</td>
          <td>${expenses.reduce((acc, expense) => expense.amount + acc, 0)}</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default ExpenseList;
