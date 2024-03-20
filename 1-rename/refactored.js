// We've made this code more readably by using descriptive, precise names.
function remove_above_limit(items, max_value_inclusive) {
    return items.filter(item => item.value <= max_value_inclusive);
}

module.exports = remove_above_limit;