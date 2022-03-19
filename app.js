class Todo{
    constructor(){
        this.root = document.querySelector("#app");
        this.root.innerHTML = Todo.html();

        this.root.querySelector(".new-entry").addEventListener("click", () => {
            this.onNewEntryBtnClick();
        });

        this.load();
    }

    static html(){
        return `
            <table class="todo-list-app">      
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
            </table>
        `;
    }

    static entryHtml(){
        return `
            <tr>
                <td><input type="text" class="input input-description" placeholder="Add a description (e.g Go to the market, Attend a wedding e.t.c)"></td>
                <td><button type="button" class="delete-entry"><i class="fa fa-trash"></i></button></td>
            </tr>
        `;
    }


    addEntry(entry = {}){
        this.root.querySelector(".entries").insertAdjacentHTML("beforeend", Todo.entryHtml());

        const row = this.root.querySelector(".entries tr:last-of-type");

        row.querySelector(".input-description").value = entry.description || "";



        row.querySelector(".delete-entry .fa-trash").addEventListener("click", event => {
            this.onDeleteBtnClick(event);
        });

        row.querySelector(".input-description").addEventListener("change", () => {
            this.save();
        });
    }

    onNewEntryBtnClick(){
        this.addEntry();

    }

    save(){
        // Get all the rows from the entries
        const rows = Array.from(this.root.querySelectorAll(".entries tr")).map((row) => {
            return {
                description: row.querySelector(".input-description").value,
            };
        });

        // Save to Local Storage
        localStorage.setItem("task", JSON.stringify(rows));
    }

    load(){
        const entries = JSON.parse(localStorage.getItem("task"));
        
        entries.forEach(entry => {
            this.addEntry(entry);
        });
    }

    onDeleteBtnClick(event){
        event.target.closest("tr").remove();
        this.save();
    }
}


new Todo();


