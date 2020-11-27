import { ChangeEvent, useState } from "react"

const useCheckInput = (initialState: boolean = false) => {
    const [selected, setSelected] = useState(initialState)
    const bindings = {
        onChange(e: ChangeEvent<HTMLInputElement>) {
            setSelected(e.target.checked)
        },
        checked: selected
    }

    return { selected, bindings }
}

export default useCheckInput