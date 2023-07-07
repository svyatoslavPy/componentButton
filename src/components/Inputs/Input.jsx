export const Input = ({ setBtnValueHandler }) => {
	return (
		<input
			onChange={e => setBtnValueHandler(e.target.value)}
			type='text'
		></input>
	)
}
