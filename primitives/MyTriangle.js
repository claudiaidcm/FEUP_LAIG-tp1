/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 * @param x - Scale of triangle in X
 * @param y - Scale of triangle in Y
 */
class MyTriangle extends CGFobject {
	constructor(scene, id, x1, x2, x3, y1, y2, y3, z1, z2, z3) {
		super(scene);
		this.x1 = x1;
		this.x2 = x2;
		this.x3 = x3;
		this.y1 = y1;
		this.y2 = y2;
		this.y3 = y3;
		this.z1 = z1;
		this.z2 = z2;
		this.z3 = z3;

		this.initBuffers();
	}

	initBuffers() {
		this.vertices = [
			this.x1, this.y1, this.z1,	//0
			this.x2, this.y2, this.z2,	//1
			this.x3, this.y3, this.z3	//2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2
		];

		//Facing Z positive
		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
		];

		var s12, s13, s23, a1, a2, a3;
		s12 = Math.sqrt((this.x2 - this.x1) ^ 2 + (this.y2 - this.y1) ^ 2 + (this.z2 - this.z1) ^ 2);
		s13 = Math.sqrt((this.x3 - this.x1) ^ 2 + (this.y3 - this.y1) ^ 2 + (this.z3 - this.z1) ^ 2);
		s23 = Math.sqrt((this.x3 - this.x2) ^ 2 + (this.y3 - this.y2) ^ 2 + (this.z3 - this.z2) ^ 2);

		a1 = (-s23 ^ 2 + s12 ^ 2 + s13 ^ 2) / (2 * s12 * s13)
		a2 = (s23 ^ 2 + s12 ^ 2 - s13 ^ 2) / (2 * s12 * s23)
		a3 = (s23 ^ 2 - s12 ^ 2 + s13 ^ 2) / (2 * s13 * s23)

		/*
		Texture coords (s,t)
		+----------> s
        |
        |
		|
		v
        t
        */

		this.texCoords = [
			0, 1,
			1, 1,
			0.5, 0
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	/**
	 * @method updateTexCoords
	 * Updates the list of texture coordinates of the rectangle
	 * @param {Array} coords - Array of texture coordinates
	 */
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}

