export default function SelectUnit({ unit, setUnit }) {
  const units = [
    {
      name: 'metric',
      symbol: 'C',
    },
    {
      name: 'imperial',
      symbol: 'F',
    },
  ];

  const handleChangeUnit = (e) => {
    setUnit(e.target.value);
  };

  return (
    <div className="unitSelector">
      {units.map(({ name, symbol }) => {
        return (
          <div key={name} className={unit === name ? 'selected' : ''}>
            <label htmlFor={name}>{symbol}</label>
            <input
              type="radio"
              name="unit"
              value={name}
              id={name}
              onChange={handleChangeUnit}
              checked={name === unit}
            />
          </div>
        );
      })}
    </div>
  );
}
