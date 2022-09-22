import { useFormHook } from './useFormHook'

export function FormWithHook() {
    const {data, handleChange} = useFormHook()

    return (
        <>
            <input name='username' value={data.username} onChange={handleChange} />       
            <input type='password' name='password' onChange={handleChange} value={data.password} />       
        </>
    )
}
