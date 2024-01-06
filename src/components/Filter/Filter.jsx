const Filter = ({ filter, handleChangeFilter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        value={filter}
        onChange={handleChangeFilter}
        type="text"
        name="filter"
        placeholder="Kate..."
      />
    </div>
  );
};

export { Filter };
