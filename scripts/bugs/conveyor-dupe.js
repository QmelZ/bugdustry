Vars.content.blocks().each(e => {
    if(e instanceof Conveyor){
        e.unloadable = true;
    };
});
