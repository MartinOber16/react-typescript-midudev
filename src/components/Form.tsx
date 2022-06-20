import { Sub } from "../types";
import useNewSubForm from '../hooks/useNewSubForm';

interface FormProps {
  // onNewSub: React.Dispatch<React.SetStateAction<Sub[]>>
  onNewSub: (newSub: Sub) => void
}

const Form = ({ onNewSub }: FormProps) => {

  // const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE)
  const {formState, changeState, clearForm} = useNewSubForm()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    // setInputValues({
    //   ...inputValues,
    //   [e.target.name]: e.target.value
    // })
    const { name, value } = e.target
    // dispatch({
    //   type: "change_value",
    //   payload: {
    //     inputName: name,
    //     inputValue: value,
    //   }
    // })
    changeState( name, value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // onNewSub( subs => ([...subs, inputValues]) );
    onNewSub(formState);
    handleClear();
  }

  const handleClear = () => {
    // setInputValues(INITIAL_STATE)
    clearForm()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={formState.nick} type='text' name='nick' placeholder='nick' />
        <input onChange={handleChange} value={formState.subMonths} type='text' name='subMonths' placeholder='subMonths' />
        <input onChange={handleChange} value={formState.avatar} type='text' name='avatar' placeholder='avatar' />
        <textarea onChange={handleChange} value={formState.description} name='description' placeholder='description' />
        <button type="button" onClick={handleClear}>Clear the form</button>
        <button type="submit">Save new sub!</button>
      </form>
    </div>
  )
}

export default Form