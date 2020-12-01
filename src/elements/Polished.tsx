import styled from "styled-components";
import {ellipsis} from 'polished'

interface DotDotDotProps {
    lines?: number
} 
export const DotDotDot = styled.p<DotDotDotProps & React.HTMLProps<HTMLInputElement>>`
    ${(props) => {
        const lines = props.lines ?? 1;
        return ellipsis(null, lines)
    }}
`