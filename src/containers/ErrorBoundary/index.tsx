import * as React from 'react';
import ErrorMessage from './ErrorMessage';

interface Props {
    children: React.ReactNode
}

export default class App extends React.Component<Props> {
    state = { hasError: false };

    componentDidCatch(error: any, errorInfo: any) {
        console.log('error', error);
        console.log('errorInfo', errorInfo);
        this.setState({
            hasError: true,
        });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorMessage />;
        }

        return this.props.children;
    }
}

