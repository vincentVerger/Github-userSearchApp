

class info{

    constructor(string){
    this._info=string
    }

    printInfoInDom(classe){

        var wrap = document.querySelector(classe);
        wrap.innerText=this._info;
 
    }
}