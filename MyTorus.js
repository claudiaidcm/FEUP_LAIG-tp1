/**
 * MyTorus
 * @constructor
 */

class MyTorus extends CGFobject {
    constructor(scene, id, outer, inner, slices, loops) {
        super(scene);

        this.outer = outer;
        this.inner = inner;
        this.slices = slices;
        this.loops = loops;

        this.initBuffers();
    };

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];
    

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    };
};