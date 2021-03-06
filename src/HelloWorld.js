import React from "react";

export default class HelloWorld extends React.Component {
	render() {
		const { name } = this.state;

		return (
			<div>
				<input ref={input => this.input = input}
					onChange={event => this.updateModel(event)}
					name="name"
					value={name}
					placeholder="Name" />
				<p>Hello, {name}</p>
				<button
					onClick={() => this.reset()}>
					Clear
        </button>
			</div>);
	}

	constructor(props) {
		super(props);
		const { name, greeting } = this.props.greeting || { name: '', greeting: '' };
		this.state = {
			name,
			greeting
		};
	}

	reset() {
		this.setState({ name: '', greeting: '' });
		if (this.input) {
			this.input.focus();
		}
	}

	updateModel(event) {
		this.setState({ [event.target.name]: event.target.value });
	}
}
