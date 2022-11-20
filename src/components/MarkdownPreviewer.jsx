import React from "react";
import ReactMarkdown from 'react-markdown'

class MarkdownPreviewer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state= {
            inputValue: '# Hello, *markdown*!',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        })
        console.log(this.state.inputValue);
    }

    render() {
        return (
            <div id="page-body">
                <div className="editorField">
                    <h1>Editor</h1>
                    <textarea id="editor" value={this.state.inputValue} onChange={this.handleChange} />
                </div>
                <div className="previewField">
                    <h1>Previewer</h1>
                    <div id="preview"><ReactMarkdown>{this.state.inputValue}</ReactMarkdown></div>
                </div>
            </div>
        );
    }
}

export default MarkdownPreviewer;