import { ErrorMessage, InputContainer, InputElt, Label } from "./InputStyle"

function Input ({ label, placeholder, type, id, inputValue, change, errorMessage, classname }) {
    return (
        <InputContainer className={ classname }>
            <Label>{ label }</Label>

            <InputElt
                placeholder={ placeholder }
                type={ type }
                id={ id }
                value={ inputValue }
                onChange={ (e) => change(e.target.value)}
            />
            <ErrorMessage>{ errorMessage }</ErrorMessage>
        </InputContainer>
    )
}

export default Input