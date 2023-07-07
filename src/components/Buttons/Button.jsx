export const Button = ({ text, showValueHandler }) => {
	return (
		<button onClick={() => showValueHandler()} className='button'>
			{text}
		</button>
	)
}
