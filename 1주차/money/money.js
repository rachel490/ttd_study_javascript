class Dollar {
    constructor(amount) {
        this.amount = amount;
    }

    times(multiplier) {
        return this.amount * multiplier
    }
}

module.exports = Dollar;