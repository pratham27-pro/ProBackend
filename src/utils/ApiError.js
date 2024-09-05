class ApiError extends Error {
    constructor (
        statusCode,
        message= "Something went wrong",
        errors = [],
        statck = ""
    ) {
        super(message)
        this.statusCode = statusCode
        this.data = null        // Study this from documentation
        this.message = message
        this.success = false;
        this.errors = errors

        if (statck) {
            this.stack = statck
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {}