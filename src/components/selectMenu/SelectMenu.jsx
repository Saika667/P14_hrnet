import { Label, Wrapper, Select, Option } from "./SelectMenuStyle"

function SelectMenu ({ data, label, name, id, classname, selectValue, change }) {
    return (
        <Wrapper className={ classname }>
            <Label htmlFor={ id }>{ label }</Label>
            <Select name={ name } id={ id } value={ selectValue } onChange={ (e) => change(e.target.value) }>
                { data.map((text, index) => (
                    <Option key={ index } value={ text }>
                        { text }
                    </Option>
                ))}
            </Select>
        </Wrapper>
    )
}

export default SelectMenu