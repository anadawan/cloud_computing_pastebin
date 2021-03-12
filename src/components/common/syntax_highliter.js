/*index.jsx*/
import React from "react";
import { FormLabel } from '@material-ui/core';
import SyntaxHighlighter from 'react-syntax-highlighter';

const PageNotFound = () => {
    
    return (
        <SyntaxHighlighter language={this.context.language} style={docco}>
            {this.context.codestring}
        </SyntaxHighlighter>
    );
};

export default PageNotFound;