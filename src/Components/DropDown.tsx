interface Props {
  onSelectCategory: (categorySelected: string) => void;
}

function DropDown({ onSelectCategory }: Props) {
  return (
    <div className="mb-3">
      <select
        className=" form-select"
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        <option>All categories</option>
        <option>Grocery</option>
        <option>Utilities</option>
        <option>Entertainment</option>
      </select>
    </div>
  );
}

export default DropDown;
