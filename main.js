const app = {
    async init() {
        console.log("app ready...");
        this.jq = jQuery;
        this.wrap = this.jq('#wrapper');
        this.wWidth = this.jq(window).width();
        this.wHeight = this.jq(window).height();

        this.m = 1.5;

        this.wrap.css('width','calc(100% + '+this.wWidth/this.m+'px');
        this.wrap.css('height','calc(100% + '+this.wHeight/this.m+'px');
        this.jq(document).on('mousemove',(e)=>{
            this.wrap.css({
                'transform':
                'translate(-'+e.pageX/this.m+'px,-'+e.pageY/this.m+'px)',
            });
        })
        this.box = this.jq('.box');
        this.box
            .on('mouseover',(e)=>{
                this.box.addClass('opacity');
                this.jq(e.currentTarget)
                    .removeClass('opacity')
                    .css('transform','scale(1.4)');

            })
            .on('mouseout',(e)=>{
                this.box
                    .removeClass('opacity')
                    .css('transform','scale(1)');;
            });
    }
}

app.init();