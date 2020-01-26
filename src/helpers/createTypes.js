const createTypes = typeName => {
    return {
        REQUEST: `${typeName}.REQUEST`,
        SUCCESS: `${typeName}.SUCCESS`,
        FAILURE: `${typeName}.FAILURE`
    }
}

export default createTypes