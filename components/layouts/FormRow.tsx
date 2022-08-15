import type { NextPage } from "next";

interface Props {
  name: string;
  type: string;
  value: string;
  labelText: string;
  handleChange: () => string;
}

const FormRow: NextPage<Props> = ({
  name,
  type,
  value,
  labelText,
  handleChange,
}) => {
  return (
    <div className='col-12'>
      <label htmlFor={name}>{labelText || name}</label>
      <input
        type={type}
        value={value}
        className='form-control'
        placeholder='Email'
        onChange={handleChange}
      />
    </div>
  );
};

export default FormRow;
