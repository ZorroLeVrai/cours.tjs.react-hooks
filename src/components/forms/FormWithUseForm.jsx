import { useState } from "react";
import { useForm } from "react-hook-form";

const FormWithUseForm = () => {
  const [person, setPerson] = useState(null);
  const { register, handleSubmit, reset, formState: {isValid, errors} } = useForm();

  const onSubmit = (data) => {
    setPerson(data);
    reset();
  };

  return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-3">
      <label htmlFor="firstName" className="form-label">
        Prénom
      </label>
      <input
        {...register("firstName", {required: true, minLength: 3})}
        id="firstName"
        type="text"
        className="form-control"
        required
      />
      {errors.firstName?.type === "required" && <p className="text-danger">Le champ Prénom est requis</p>}
      {errors.firstName?.type === "minLength" && <p className="text-danger">Le champ Prénom doit comporter au moins 3 caractères</p>}
    </div>
    <div className="mb-3">
      <label htmlFor="age" className="form-label">
        Age
      </label>
      <input
        {...register("age", {valueAsNumber: true, required: true})}
        id="age"
        type="number"
        step="any"
        className="form-control"
        required
      />
      {errors.age?.type === "required" && <p className="text-danger">Le champ Age est requis</p>}
    </div>
    <button disabled={!isValid} className="btn btn-primary" type="submit">
      Envoi
    </button>
    {person && <div><div>Données envoyées:</div><div>Prénom: {person.firstName} - Age: {person.age}</div></div>}
  </form>
  );
}
 
export default FormWithUseForm;