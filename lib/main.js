let Tomato = {
    ripe: function(location, typ, ...elements){
        if(!location){
            console.error(`Tomato * \ Missing html:parent element.`);
        } else {
            if(typeof typ === "boolean"){
                if(typ){
                    let parent = document.querySelectorAll(location);
                    for(let i = 0; i < parent.length; i++){
                        parent[i].insertAdjacentHTML("beforeend", elements.map(i => i))
                    }; 
                } else {
                    let parent = document.querySelector(location);
                    parent.insertAdjacentHTML("beforeend", elements.map(i => i));
                };
            } else {
                console.log(`Tomato * typ is not a boolean ${typeof typ}`);
            };
        }
    },

    sauce: function(styleContent){
        //Render First
        const blob = new Blob([styleContent], { type: "text/css" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        document.head.appendChild(link);
    },

    cage: function(){
        //Needs Completion
    }
};
