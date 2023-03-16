const SortSelect = ({ Sort, selectedSort, setSelectedSort }) => {
  // Estados: Z-A, A-Z, Precio: Del mas bajo al mas alto, Precio: Del mas alto al mas bajo, Promedio opinion del cliente
  // States: Z-A, A-Z, Price: Low to high, Price: High to low, Avg. customers reviews
  const handleChange = (event) => {
    setSelectedSort(event.target.value);
  };

  return (
    <div>
      <label htmlFor="Sort-select">Sort by:</label>
      <div>
        <select id="Sort-select" value={selectedSort} onChange={handleChange}>
          {Sort.map((Sort) => (
            <option key={Sort} value={Sort}>
              {Sort}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SortSelect;
