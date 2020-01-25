const createTypes = typeName => {
    return {
        REQUEST: `${typeName}.REQUEST`,
        SUCCESS: `${typeName}.SUCCESS`,
        FAILURE: `${typeName}.FAILURE`
    }
}

const types = {
    SYNC_USER: 'SYNC_USER',
    LOGIN: createTypes('LOGIN')
}

export default types