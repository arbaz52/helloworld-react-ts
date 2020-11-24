import { stat } from "fs"
import { ChangeEvent, SelectHTMLAttributes, useState } from "react"

const useInput = (initialState: string) => {
    const [state, setState] = useState(initialState)
    const bindings = {
        value: state,
        onChange(e: any) {
            setState(e.target.value)
        }
    }

    return {state, bindings}
}

export default useInput