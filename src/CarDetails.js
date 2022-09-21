import { useEffect, useRef } from 'react'

export function CarDetails({ data }) {
	const fRef = useRef(null)

	useEffect(() => {
		fRef.current.reset()
	}, [data])

	return (
		<form ref={fRef}>
			<input name="model" defaultValue={data.model} />
			<input name="year" defaultValue={data.year} />
			<input name="color" defaultValue={data.color} />
			<button type="submit">Submit</button>
		</form>
	)
}