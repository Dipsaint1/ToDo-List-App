class Todo{
    constructor(){
        this.root = document.querySelector("#App");
        this.root.innerHTML = Todo.innerHTML();

        this.root.querySelector(".new-entry").addEventListener("click", () => {
            Todo.entryHTML();
        });


    }

    static innerHTML(){
    return `
        <!-- <table class="todo-list-app">      
            <thead>
                <tr>
                    <th>Description</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody class="entries">

            </tbody>
            <tbody>
                <tr>
                    <td colspan="3" class="controls">
                        <button type="submit" class="new-entry">New Entry</button>
                    </td>
                </tr>
            </tbody>
        </table> -->
    `;

    }

    static entryHTML(){
        return `
            <tr>
                <td><input type="text" class="input input-description" placeholder="Add a description (e.g Go to the market, Attend a wedding e.t.c)"></td>
                <td><button type="button" class="delete-entry"><i class="fa fa-trash"></i></button></td>
                <td><button type="button" class="edit-entry"><i class="fa fa-edit"></i></button></td>
            </tr>
        `;
    }

    addEntry(){

    }
}




new Todo();