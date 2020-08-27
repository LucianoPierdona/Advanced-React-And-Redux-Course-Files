import React from 'react';

class CommentBox extends React.Component {
    state = { comment: '' };

    handleChange = event => {
        this.setState({ comment: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.setState({ comment: '' });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h4>Add a Comment</h4>
                <textarea value={this.state.comment} onChange={this.handleChange} />
                <div>
                    <button>submit comment</button>
                </div>
            </form>
        );
    }
}

export default CommentBox;