import { useMemo } from 'react'

export function FilteredList({ people }) {
	const list = useMemo(() => {
		return people.filter((el) => el.age > 18)
	}, [people])

	return (
		<ul>
			{list.map((el) => (
				<li key={el.id}>{el.name}</li>
			))}
		</ul>
	)
}