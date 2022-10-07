//define our custom Error, by default JS built in 'Error' class accepts a message as an argument(refer to MDN docs)
class CustomAPIError extends Error {
    constructor(message) {
        super(message);
    }
}

export default CustomAPIError;