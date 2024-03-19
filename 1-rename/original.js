function process(i, l) {
    return i.filter(x => x.value <= l);
}

module.exports = process;