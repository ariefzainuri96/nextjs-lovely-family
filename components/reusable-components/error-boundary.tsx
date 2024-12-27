"use client";

import React, { Component, ReactNode, ErrorInfo } from "react";

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
    onRetry?: () => void;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);

        // Define a state variable to track whether there is an error or not
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // You can use your own error logging service here
        console.log({ error, errorInfo });
    }

    resetErrorBoundary = () => {
        console.log("reset error boundary");
        this.setState({ hasError: false });
        this.props.onRetry?.();
    };

    render() {
        // Check if the error is thrown
        if (this.state.hasError) {
            // You can render any custom fallback UI
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div>
                    <h2>Oops, there is an error!</h2>
                    {/* <button
                        type="button"
                        onClick={() => this.resetErrorBoundary()}
                    >
                        Try again?
                    </button> */}
                </div>
            );
        }

        // Return children components in case of no error
        return this.props.children;
    }
}

export default ErrorBoundary;
