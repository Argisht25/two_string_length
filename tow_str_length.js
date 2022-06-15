function two_str(x, y) {
    const min = Math.min(x.length, y.length)
    return x.substring(x.length - min) + y.substring(y.length - min)
}

