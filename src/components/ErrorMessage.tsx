type ErrorMessageProps = {
    message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
    if (message === '') return;

    return (
        <p className="bg-red-200 text-red-500 p-2 rounded">
            Error: {message}
        </p>
    );
};

export default ErrorMessage;