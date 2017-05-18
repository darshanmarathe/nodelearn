var $ = function(selector){

    var elems = document.querySelectorAll(selector);
    
    console.log(elems);
    
    return {
        Selector : function(){
            console.log(selector);
        } , 
        hide : function(){
            this.each(function(i , elem){
                elem.style.display = "none";
            });
            return this;
        },
        each : function(func){
            for (var index = 0; index < elems.length; index++) {
                var element = elems[index];
                func(index , element);
            }
        return this;
        },
        show : function(){
            this.each(function(i , elem){
                elem.style.display = "block";
            });
            return this;
        }
    }

}