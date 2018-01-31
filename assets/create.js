class CreateEntry extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            text: '',
            isProcessing: false,
        };
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        $.post('/api/entries/', {text: this.state.text})
            .then(() => {
                alert('Entry created!');
                window.location.href = '/';
            }).catch((err) => {

            });
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <textarea
                        name="text"
                        id="text"
                        className="form-control"
                        rows="6"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </div>
                <hr />
                <div className="form-group text-center">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={this.state.text.length === 0}
                    >Save</button>
                </div>
            </form>
        );
    }
}

ReactDOM.render(
    <CreateEntry />,
    document.getElementById('root')
);