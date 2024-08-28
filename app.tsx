// --- Library ---
const Abbas = {
	createElement: (...args) => {
		console.log(args);
	},
};

// --- Application ---

const App = (
	<div draggable>
		<h2>Hello Abbas !</h2>
		<p>I am a pargraph</p>
		<input type="text" />
	</div>
);
