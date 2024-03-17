import { useState } from "react";

const FormWithUseState = () => {
  const [person, setPerson] = useState({firstName: "", age: ""});
  const [personSent, setPersonSent] = useState(null);

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
        onChange={e => setPerson({...person, firstName: e.target.value })}
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
        onChange={e => setPerson({...person, age: Number(e.target.value) })}
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