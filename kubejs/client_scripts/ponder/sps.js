// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

Ponder.registry((allthemods) => {
    allthemods.create([
	'mekanism:sps_casing',
	'mekanism:sps_port',
	'mekanism:supercharged_coil'])
	.scene('sps', Text.translate('kubejs.ponder.sps.header'), 'kubejs:sps',
		
	(scene, util) => {
		
				
			scene.world.showSection([0, 0, 0, 6, 7, 6], Facing.down);
			scene.setSceneOffsetY(-1);
            scene.idle(20);
			
			scene.text(60, Text.translate('kubejs.ponder.sps.text_1'), [0, 3.5, 6.5]).placeNearTarget();
			scene.addKeyframe();
			scene.idle(80)
			
			scene.addKeyframe()
			
			scene.text(60, Text.translate('kubejs.ponder.sps.text_2'), [2.5, 1.5, 0]).placeNearTarget();
			scene.showControls(60, [2.5, 2.5, 0], 'down').rightClick().withItem('mekanism:configurator').whileSneaking();
			scene.idle(10);
			scene.world.modifyBlock([2, 1, 0], (curState) => curState.with("active", "true"), false);
			scene.idle(20);
			scene.world.modifyBlock([2, 1, 0], (curState) => curState.with("active", "false"), false);
			scene.idle(40);
			
			scene.world.hideSection([0, 0, 0, 6, 6, 5], Facing.up);
			scene.idle(10);
			
			scene.text(60, Text.translate('kubejs.ponder.sps.text_3'), [2.5, 4, 5]).placeNearTarget().attachKeyFrame();
			scene.idle(60);
			
			//east face
			scene.world.showSection([6, 0, 0, 6, 7, 5], Facing.down);
			scene.idle(10);
			
			scene.text(60, Text.translate('kubejs.ponder.sps.text_4'), [5.5, 4, 3]).placeNearTarget().attachKeyFrame();
			scene.idle(70);
			
			scene.world.showSection([5, 3, 3], Facing.down);
			scene.text(60, Text.translate('kubejs.ponder.sps.text_5'), [5, 4, 3]).placeNearTarget().attachKeyFrame();
			scene.idle(80);
			
			//west face
			scene.world.showSection([0, 0, 0, 0, 6, 5], Facing.down);
			scene.idle(30);
			
			scene.world.showSection([1, 3, 3], Facing.down);
			scene.text(60, Text.translate('kubejs.ponder.sps.text_6'), [0, 4, 3]).placeNearTarget().attachKeyFrame();
			scene.idle(80);
			
			//bottom face
			scene.world.showSection([1, 0, 0, 5, 0, 5], Facing.down);
			scene.idle(30);
			
			//top face
			scene.world.showSection([1, 6, 0, 5, 6, 5], Facing.down);
			scene.idle(30);
			
			//north face
			scene.world.showSection([1, 1, 0, 5, 5, 0], Facing.down);
			scene.idle(30);
			
			
			scene.text(60, Text.translate('kubejs.ponder.sps.text_7'), [4.5, 1.5, 0]).placeNearTarget().attachKeyFrame();
			scene.idle(70);
			
			scene.world.modifyBlock([2, 1, 0], (curState) => curState.with("active", "true"), true);
			scene.text(60, Text.translate('kubejs.ponder.sps.text_8'), [2.5, 1.5, 0]).placeNearTarget().attachKeyFrame();
			scene.idle(70);
			
				
    });
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
