// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

Ponder.registry((allthemods) => {
    allthemods.create([
		'mekanismgenerators:hohlraum',
		'mekanismgenerators:hohlraum[mekanism:chemicals={chemical_tanks:[{amount:10L,id:"mekanismgenerators:fusion_fuel"}]}]',
		'mekanismgenerators:laser_focus_matrix'
	])
	.scene('fusion_activation', Text.translate('kubejs.ponder.fusion_activation.header'), 'kubejs:fusion_activation',
		
	(scene, util) => {
			scene.world.showSection([2, 0, 0, 6, 4, 6], Facing.down);
			//scene.world.hideSection([3, 0, 0, 5, 2, 0], Facing.up);
            scene.idle(10);
			
			scene.text(60, Text.translate('kubejs.ponder.fusion_activation.text_1'), [2, 2.5, 4.5]).placeNearTarget().attachKeyFrame();
			scene.idle(80)
			
			scene.text(100, Text.translate('kubejs.ponder.fusion_activation.text_2'), [4.5, 5, 3.5]).attachKeyFrame();
			scene.showControls(100, [4.5, 5.5, 3.5], 'down').withItem('mekanismgenerators:hohlraum');
			scene.idle(110);
			
			
			//show lasers
			scene.world.showSection([0, 0, 0, 1, 4, 6], Facing.down);
			scene.idle(10);
			
			//Laser
			scene.text(100, Text.translate('kubejs.ponder.fusion_activation.text_3'), [0, 2.5, 3.5]).placeNearTarget().attachKeyFrame();
			scene.idle(110);
			
			//show laser
			scene.world.hideSection([1, 0, 0, 6, 4, 6], Facing.down);
			scene.idle(10)
			scene.rotateCameraY(90);
			scene.idle(5)
			
			scene.text(100, Text.translate('kubejs.ponder.fusion_activation.text_4'), [1, 2.5, 3]).placeNearTarget().attachKeyFrame();
			scene.idle(110);
			
			scene.rotateCameraY(-90);
			scene.idle(5)
			
			//show everything
			scene.world.showSection([1, 0, 0, 6, 4, 6], Facing.down);
			scene.idle(10)
			
			
			//hide lasers
			scene.world.hideSection([0, 0, 0, 1, 4, 6], Facing.down);
			scene.idle(10);
			
			//fuel input
			
			scene.overlay.showText(100).text(Text.translate('kubejs.ponder.fusion_activation.text_5')).independent(-50);
			scene.text(50, Text.translate('kubejs.ponder.fusion_activation.text_6'), [5.5, 2.5, 1]).placeNearTarget().attachKeyFrame();
			scene.idle(60);
			scene.text(50, Text.translate('kubejs.ponder.fusion_activation.text_7'), [3.5, 2.5, 1]).placeNearTarget().attachKeyFrame();
			scene.idle(60);
			
			scene.text(80, Text.translate('kubejs.ponder.fusion_activation.text_8'), [4.5, 2.5, 1]).placeNearTarget().attachKeyFrame();
			scene.idle(80);

    });
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
