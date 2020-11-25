function isEmpty(input) {
    if (!input) return true
    if (typeof input === "string") {
        if (input.length === 0) return true
    }

    if (input === {} || input === []) return true

    return false
}

module.exports = {
    isEmpty,
}
