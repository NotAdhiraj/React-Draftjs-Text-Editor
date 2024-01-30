import React from "react";

const Instructions = () => {
	return (
		<div className='ins_div'>
			<h3>Instructions</h3>
			<p>Use a Symbol and then space to activate it!</p>
			<p>
				#- Heading 1 <br />
				##- Heading 2 <br />
				###- Heading 3 <br />
				####- Heading 4 <br />
				#####- Heading 5 <br />
				######- Heading 6 <br />
			</p>
			<hr />
			<p>**(text)** for Bold, (space after the last *)</p>
			<hr />
			<p>_(text)_ for Italic, (space after the last _)</p>
			<hr />
			<p>* or - for Bullet Point </p>
			<hr />
			<p> &gt; or - for Unordered List </p>
			<hr />
			<p> `(code)` for Code, (space after the last ``)</p>
			<hr />
			<p> Type 1. (text), and enter will do the work</p>
		</div>
	);
};

export default Instructions;
