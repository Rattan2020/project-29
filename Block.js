class Block {

    constructor(x,y){

        var options= {
        isStatic:false,
        friction:1.0,
        density:1
        }

        this.body=Bodies.rectangle(x,y,40,40,options);
         this.width=40;
         this.height=40;
        World.add(world,this.body);

    }

    display(){

var pos=this.body.position;

         fill("red");
         strokeWeight(3);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }

    display2(){

        var pos=this.body.position;
        
                 fill("blue");
                 strokeWeight(3);
                rectMode(CENTER);
                rect(pos.x,pos.y,this.width,this.height);
            }

            display3(){

                var pos=this.body.position;
                
                         fill("purple");
                         strokeWeight(3);
                        rectMode(CENTER);
                        rect(pos.x,pos.y,this.width,this.height);
                    }

                    display4(){

                        var pos=this.body.position;
                        
                                 fill("yellow");
                                 strokeWeight(3);
                                rectMode(CENTER);
                                rect(pos.x,pos.y,this.width,this.height);
                            }
                
        
}