// --- Library ---
const render = (el, container) => {
	const domEl = document.createElement(el.tag);
	const elProps = el.props ? Object.keys(el.props) : [];

	elProps.forEach((prop) => {
		domEl[prop] = el.props[prop];
		console.log(el.props[prop]);
	});
};
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

render(<App />, document.getElementById("myapp"));
