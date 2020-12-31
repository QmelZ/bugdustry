const fireSpawn = extend(StatusEffect, "fireSpawn", {
  update(unit, time){
  if(Mathf.chance(0.1 * Time.delta)){
    this.super$update;
    Fires.create(Vars.world.tileWorld(unit.x,unit.y));
    print(unit.x);
    };
  }
});

fireSpawn.effect = Fx.fire;

UnitTypes.crawler.abilities.add(new StatusFieldAbility(fireSpawn, 360, 360, 60));
