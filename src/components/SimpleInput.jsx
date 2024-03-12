const SimpleInput = ({content, name, dispatch}) => {
  const handleOnChange = (e) => dispatch({type: `update_${name}`, payload: Number(e.target.value)});

  return (
    <>
      <label htmlFor={name}>{name}:</label>
      <input id={name} type="text" value={content} onChange={handleOnChange}/>
    </>
  );
}
 
export default SimpleInput;