/**
* MyComponent class
* @constructor
*/

class MyComponent {
    constructor(graph, id) {
        this.graph = graph;
        this.id = id;
        this.transformationref;
        this.transformation = mat4.create();
        mat4.identity(this.transformation);
        this.materials = [];
        this.texture;
        this.length_s = 1;
        this.length_t = 1;
        this.components = [];
        this.primitives = [];
    };

    /**
    * Adds a child to the chidlren array
    */
    addComponent(id) {
        this.components.push(id);
    };

    /**
    * Adds a primitive to the primitives array
    */
    addPrimitive(id) {
        this.primitives.push(id);
    };

};