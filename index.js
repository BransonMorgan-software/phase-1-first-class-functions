
function receivesAFunction(spy) {
    return spy();
}
function returnsANamedFunction() {
    return function spy(){
        return ('to not deeply equal');
}}
function returnsAnAnonymousFunction () {
    return function() {
        return ('branson')
    }
}