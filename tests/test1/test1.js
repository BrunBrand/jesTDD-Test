const test1 = {
    SumN:(a,b) => a+b,
    SumCB:(a,cb) => a+cb(a)
}

module.exports = test1;