import { useForm, FieldValues } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  //   console.log(register("name"));
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
          placeholder="Name"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Please enter your name</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be atleast three letters</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="name"
          type="number"
          className="form-control"
          placeholder="age"
        />
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        submit
      </button>
    </form>
  );
}

export default Form;
