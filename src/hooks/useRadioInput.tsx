import { ChangeEvent, useState } from "react"

const useRadioInput = (values: string[], initial: string) => {
    const [selected, setSelected] = useState(initial)
    const bindings = {
        onChange(e: ChangeEvent<HTMLInputElement>) {
            if(e.target.checked)
                setSelected(e.target.value)
        }
    }

    return {selected, bindings}
}

export default useRadioInput