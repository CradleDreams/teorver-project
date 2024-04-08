document.publish1.onsubmit = function() {
    {
        x = [this.x.value]
        n = [this.n.value]
    }
    var a = [[x],[n]]
    var textarea = document.getElementsByTagName('textarea')[0];
    textarea.innerHTML = a;
    return false;
};
