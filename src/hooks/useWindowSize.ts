import { useEffect, useState } from "react"
interface Props {
    width?: number;
    height?: number;
}
const useWindowSize = (onChangeCallBack = (windowSize: { width?: number, height?: number }) => { }) => {
    const [windowSize, setWindowSize] = useState<Props>({
        width: undefined,
        height: undefined
    })

    useEffect(() => {
        onChangeCallBack(windowSize)
    }, [windowSize])

    useEffect(() => {
        const handleResize = () => {
            const updatedSize = {
                width: window.innerWidth,
                height: window.innerHeight
            }
            setWindowSize(updatedSize)
        }
        window.addEventListener("load", handleResize)
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("load", handleResize)
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return windowSize
}

export default useWindowSize