// --- Library ---
const Abbas = {
	createElement: (tag, props, ...children) => {
		if (typeof tag === "function") {
			return tag(props, ...children);
		}
		const el = {
			tag,
			props,
			children,
		};
		console.log(el);
		return el;
	},
};

// --- Application ---

const App = () => {
	return (
		<div draggable>
			<h2>Hello Abbas !</h2>
			<p>I am a pargraph</p>
			<input type="text" />
		</div>
	);
};

console.log(<App />);
