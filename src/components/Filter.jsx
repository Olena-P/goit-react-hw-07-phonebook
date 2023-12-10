import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../redux/selectors";
import { changeFilter } from "../redux/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div>
      Filter contacts by name:
      <input
        id="filter"
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default Filter;
