import { ErrorMessage, InputContainer, InputElt, Label } from "./InputStyle"

function Input ({ label, placeholder, type, id, inputValue, change, errorMessage, classname, onkeydown }) {
    return (
        <InputContainer className={ classname }>
            <Label>{ label }</Label>

            <InputElt
                placeholder={ placeholder }
                type={ type }
                id={ id }
                value={ inputValue }
                onChange={ (e) => change(e.target.value) }
                onKeyDown={ onkeydown }
            />
            <ErrorMessage>{ errorMessage }</ErrorMessage>
        </InputContainer>
    )
}

export default Input