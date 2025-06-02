import { Button } from "./FormButtonStyle"

function FormButton ({ onclick }) {
    return (
        <Button onClick={ onclick }>
            Save
        </Button>
    )
}

export default FormButton