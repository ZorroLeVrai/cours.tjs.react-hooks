import { useState } from "react";

const FormWithUseState = () => {
  const [person, setPerson] = useState(null);
  const [personSent, setPersonSent] = useState(null);

  const handleFirstNameChange = (event) => {
    if (person)
      setPerson({...person, firstName: event.target.value });
    else
      setPerson({firstName: event.target.value});
  };

  const handleAgeChange = (event) => {
    if (person)
      setPerson({...person, age: Number(event.target.value) });
    else
      setPerson({age: Number(event.target.value) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPersonSent(person);
    setPerson({firstName: "", age: ""});
  };

  return (
  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="firstName" className="form-label">
        Prénom
      </label>
      <input
        id="firstName"
        type="text"
        className="form-control"
        value={person?.firstName}
        onChange={handleFirstNameChange}
        required
      />
    </div>
    <div className="mb-3">
      <label htmlFor="age" className="form-label">
        Age
      </label>
      <input
        id="age"
        type="number"
        step="any"
        className="form-control"
        value={person?.age}
        onChange={handleAgeChange}
        required
      />
    </div>
    <button className="btn btn-primary" type="submit">
      Envoi
    </button>
    {personSent && <div><div>Données envoyées:</div><div>Prénom: {personSent.firstName} - Age: {personSent.age}</div></div>}
  </form>
  );
}
 
export default FormWithUseState;