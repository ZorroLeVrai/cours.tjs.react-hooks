import useToggle from './useToggle';

const ToggleDemo = () => {
  const [value, toggleValue] = useToggle(false);

  return (
    <div>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Changer la valeur</button>
      <button onClick={() => toggleValue(true)}>Vrai</button>
      <button onClick={() => toggleValue(false)}>Faux</button>
    </div>
  )
}

export default ToggleDemo;