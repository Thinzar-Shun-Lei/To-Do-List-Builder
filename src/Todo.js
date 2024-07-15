import render from "./initialRender.js";
import funListener from "./listeners.js";
import { observer } from "./observer.js";

class Todo {
    init() {
        observer();
        funListener();
        render();
    }
}

export default Todo;