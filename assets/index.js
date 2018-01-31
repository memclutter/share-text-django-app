class EntryList extends React.Component {
    constructor(props) {
        super(props);

        this.handleData = this.handleData.bind(this);
        this.handleError = this.handleError.bind(this);
        this.onClickPrevPageBtn = this.onClickPrevPageBtn.bind(this);
        this.onClickNextPageBtn = this.onClickNextPageBtn.bind(this);

        this.state = {
            entries: [],
            nextPageUrl: null,
            prevPageUrl: null
        }
    }

    componentDidMount() {
        $.getJSON('/api/entries').then(this.handleData).catch(this.handleError);
    }

    handleData(data) {
        this.setState({
            entries: data.results,
            nextPageUrl: data.next,
            prevPageUrl: data.previous,
        });
    }

    handleError(data) {
        // TODO
    }

    onClickPrevPageBtn() {
        const {prevPageUrl} = this.state;

        if (prevPageUrl != null) {
            $.getJSON(prevPageUrl).then(this.handleData).catch(this.handleError);
        }
    }

    onClickNextPageBtn() {
        const {nextPageUrl} = this.state;

        if (nextPageUrl != null) {
            $.getJSON(nextPageUrl).then(this.handleData).catch(this.handleError);
        }
    }

    renderItems() {
        const {entries} = this.state;

        return entries.map((entry) => <li className="list-group-item" key={entry.id}>{entry.text}</li>);
    }

    renderPrevPageBtn() {
        const {prevPageUrl} = this.state;
        const noPrevPage = prevPageUrl == null;

        return <button
            className="btn btn-primary"
            title="Previous page"
            disabled={noPrevPage}
            onClick={this.onClickPrevPageBtn}
        >&lt;</button>;
    }

    renderNextPageBtn() {
        const {nextPageUrl} = this.state;
        const noNextPage = nextPageUrl == null;

        return <button
            className="btn btn-primary ml-1"
            title="Next page"
            disabled={noNextPage}
            onClick={this.onClickNextPageBtn}
        >&gt;</button>;
    }

    render() {
        const items = this.renderItems();
        const prevPageBtn = this.renderPrevPageBtn();
        const nextPageBtn = this.renderNextPageBtn();

        return (
            <div>
                <div className="row">
                    <div className="col-sm">
                        <ul className="list-group">
                            {items}
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row justify-content-md-center">
                    <div className="col-sm-6 text-center">
                        {prevPageBtn}
                        {nextPageBtn}
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <EntryList />,
    document.getElementById('root')
);