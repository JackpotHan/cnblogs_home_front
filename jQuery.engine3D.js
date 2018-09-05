/*
 * jQuery JavaScript Plugin jquery.engine3D.js 0.9.0
 * http://bugsoftware.co.uk/jQuery/
 *
 * Copyright (c) 2010 Ritchie Comley
 * Dual licensed under the MIT and GPL licenses.
 *
 * Date: 2010-02-06 (Sat, 06 February 2010)
 * Revision: 35
 *
 * Dependencies:
 * jQuery 1.4 (jquery.com)
 * 
 */
 
(function(jQuery){ 

	jQuery.engine3D = {};

	jQuery.engine3D.displayObject3D = function(){
			return this;
		};

	jQuery.engine3D.displayObject3D.prototype._x = 0;
	jQuery.engine3D.displayObject3D.prototype._y = 0;

	//Create 3d Points
	jQuery.engine3D.displayObject3D.prototype.make3DPoint = function(x,y,z) {
			var point = {};
			point.x = x;
			point.y = y;
			point.z = z;
			return point;
		};

	//Create 2d Points
	jQuery.engine3D.displayObject3D.prototype.make2DPoint = function(x,y, depth, scaleFactor){
			var point = {};
			point.x = x;
			point.y = y;
			point.depth = depth;
			point.scaleFactor = scaleFactor;
			return point;
		};

	jQuery.engine3D.displayObject3D.prototype.container = undefined;
	jQuery.engine3D.displayObject3D.prototype.pointsArray = [];

	jQuery.engine3D.displayObject3D.prototype.init = function (container) {
			this.container = jQuery(container);
			this.containerId = this.container.attr("id");
		};	

	jQuery.engine3D.camera3D = function (){};
	jQuery.engine3D.camera3D.prototype.x = 0;
	jQuery.engine3D.camera3D.prototype.y = 0;
	jQuery.engine3D.camera3D.prototype.z = 500;
	jQuery.engine3D.camera3D.prototype.focalLength = 1000;

	jQuery.engine3D.camera3D.prototype.scaleRatio = function(item){
			return this.focalLength/(this.focalLength + item.z - this.z);
		};

	jQuery.engine3D.camera3D.prototype.init = function (x,y,z,focalLength){
			this.x = x;
			this.y = y;
			this.z = z;
			this.focalLength = focalLength;
		};

	jQuery.engine3D.object3D = function (container){
			this.container = jQuery(container);
		};

	jQuery.engine3D.object3D.prototype.objects = [];

	jQuery.engine3D.object3D.prototype.addChild = function (object3D){
			this.objects.push(object3D);
			object3D.init(this.container);
			return object3D;
		};


	jQuery.engine3D.scene3D = function (){};

	jQuery.engine3D.scene3D.prototype.sceneItems = [];
	
	jQuery.engine3D.scene3D.prototype.addToScene = function (object){
			this.sceneItems.push(object);
		};

	jQuery.engine3D.scene3D.prototype.Transform3DPointsTo2DPoints = function(points, axisRotations,camera){
			var TransformedPointsArray = [];
			var sx = Math.sin(axisRotations.x);
			var cx = Math.cos(axisRotations.x);
			var sy = Math.sin(axisRotations.y);
			var cy = Math.cos(axisRotations.y);
			var sz = Math.sin(axisRotations.z);
			var cz = Math.cos(axisRotations.z);
			var x,y,z, xy,xz, yx,yz, zx,zy, scaleFactor;

			var i = points.length;
			
			while (i--){
				x = points[i].x;
				y = points[i].y;
				z = points[i].z;

				// rotation around x
				xy = cx*y - sx*z;
				xz = sx*y + cx*z;
				// rotation around y
				yz = cy*xz - sy*x;
				yx = sy*xz + cy*x;
				// rotation around z
				zx = cz*yx - sz*xy;
				zy = sz*yx + cz*xy;
				
				scaleFactor = camera.focalLength/(camera.focalLength + yz);
				x = zx*scaleFactor;
				y = zy*scaleFactor;
				z = yz;
				
				var displayObject = new jQuery.engine3D.displayObject3D();
				TransformedPointsArray[i] = displayObject.make2DPoint(x, y, -z, scaleFactor);
			}
			
			return TransformedPointsArray;
		};

	jQuery.engine3D.scene3D.prototype.renderCamera = function(camera)
		{
			for(var i = 0 ; i < this.sceneItems.length; i++)
			{
				var obj = this.sceneItems[i].objects[0];
				var screenPoints = this.Transform3DPointsTo2DPoints(obj.pointsArray, jQuery.engine3D.axisRotation, camera);

				this.sceneItems[i].container.find('>div>ul>li').each(function(k)
					{
						var jItem = jQuery(this);
						var jItemWrapper = jItem.find('>div');
						
						if(typeof(jItemWrapper.data('origHeight')) == 'undefined')
						{
							jItemWrapper.data('origHeight', jItemWrapper.height());
						}
						
						if(typeof(jItemWrapper.data('origWidth')) == 'undefined')
						{
							jItemWrapper.data('origWidth', jItemWrapper.width());
						}
						
						jItemWrapper.css({
								'font-size':100*screenPoints[k].scaleFactor+'%',
								opacity:(screenPoints[k].scaleFactor-.5)
							});
						
						var newHeight = jItemWrapper.height();
						var newWidth = jItemWrapper.width();
					
						jItem.css({
								top:screenPoints[k].y - (newHeight / 2),
								left:screenPoints[k].x - (newWidth / 2)
							});
					});
			}
		};

	//Center for rotation
	jQuery.engine3D.axisRotation = new jQuery.engine3D.displayObject3D().make3DPoint(0,0,0);

})(jQuery);