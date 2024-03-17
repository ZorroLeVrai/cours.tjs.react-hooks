import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  firstName: z
    .string()
    .min(3, { message: "Le prénom doit avoir au moins 3 caractères" }),
  age: z
    .number()
    .min(18, {message: "L'age doit être minimum de 18 ans"})
});

const FormWithUseFormAndZod = () => {
  const [person, setPerson] = useState(null);
  const { register, handleSubmit, reset, formState: {errors, isValid} } = useForm({ resolver: zodResolver(schema) });

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
      {errors.firstName && (
        <p className="text-danger">{errors.firstName.message}</p>
      )}
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
      {errors.age && (
        <p className="text-danger">{errors.age.message}</p>
      )}
    </div>
    <button className="btn btn-primary" type="submit">
      Envoi
    </button>
    {person && <div><div>Données envoyées:</div><div>Prénom: {person.firstName} - Age: {person.age}</div></div>}
  </form>
  );
}
 
export default FormWithUseFormAndZod;