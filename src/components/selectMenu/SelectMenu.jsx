import { ImageContainer, Input, InputWrapper, Label, PorposalsContainer, Proposal, Wrapper, Text, Select, Option } from "./SelectMenuStyle"

function SelectMenu ({ data, label, name, id, classname }) {
    console.log(data)
    return (
        <Wrapper className={ classname }>
            <Label>{ label }</Label>
            <Select name={ name } id={ id }>
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