import { useRef, useState } from "react";

const FormWithUseRef = () => {
  const firstNameRef = useRef(null);
  const ageRef = useRef(null);
  const [person, setPerson] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const firstName = firstNameRef.current?.value;
    const ageStr = ageRef.current?.value;
    if (firstName && ageStr)
      setPerson({firstName, age: Number(ageStr)});
  };

  return (
  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="firstName" className="form-label">
        Prénom
      </label>
      <input
        ref={firstNameRef}
        id="firstName"
        type="text"
        className="form-control"
        required
      />
    </div>
    <div className="mb-3">
      <label htmlFor="age" className="form-label">
        Age
      </label>
      <input
        ref={ageRef}
        id="age"
        type="number"
        step="any"
        className="form-control"
        required
      />
    </div>
    <button className="btn btn-primary" type="submit">
      Envoi
    </button>
    {person && <div><div>Données envoyées:</div><div>Prénom: {person.firstName} - Age: {person.age}</div></div>}
  </form>
  );
}
 
export default FormWithUseRef;