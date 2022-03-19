class Todo{
    constructor(){
        this.root = document.querySelector("#app");
        this.root.innerHTML = Todo.html();

        this.root.querySelector(".new-entry").addEventListener("click", () => {
            this.onNewEntryBtnClick();
        });
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
                <td><button type="button" class="edit-entry"><i class="fa fa-edit"></i></button></td>
            </tr>
        `;
    }


    addEntry(){
        this.rooot
    }

    onNewEntryBtnClick(){
        this.addEntry();

    }
}

new Todo();


// class Todo {
//     constructor(){
//         this.root = document.querySelector("#app");
//         this.root.innerHTML = Todo.html();

//         // this.root.querySelector('.new-entry').addEventListener("click", () => {
//         //     this.onNewEntryBtnClick();
//         // });

//         // Load initial data from local storage
//         // this.load();
//     }

//     static html(){   // Return the HTML for the actual table itself
//         return `
//             <table class="todo-list-app">
//                 <thead>
//                     <tr>
//                         <th>Description</th>
//                         <th></th>
//                         <th></th>
//                     </tr>
//                 </thead>
//                 <tbody class="entries">
                    
//                 </tbody>
//                 <tbody>
//                     <tr>
//                         <td colspan="3" class="controls">
//                             <button type="submit" class="new-entry">New Entry</button>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//             `;
//     }

//     static entryHTML(){   // Return HTML string for a single row inside the table
//         return `
//             <tr>
//                 <td><input type="text" class="input input-description" placeholder="Add a description (e.g Go to the market, Attend a wedding e.t.c)"></td>
//                 <td><button type="button" class="delete-entry"><i class="fa fa-trash"></i></button></td>
//                 <td><button type="button" class="edit-entry"><i class="fa fa-edit"></i></button></td>
//             </tr>
//             `;
//     }

//     // addEntry(entry = {}){  //Add a new entry inside the table
//     //     this.root.querySelector(".entries").insertAdjacentHTML("beforeend", Todo.entryHTML());
        
//     //     const row = this.root.querySelector(".entries tr:last-of-type");  //This row is a reference to the queryselector above
        
//     //     row.querySelector(".input-description").value = entry.description || "";

//     //     row.querySelector(".edit-entry").addEventListener("click", (event) => {
//     //         this.onEditBtnClick();
//     //     });
//     //     row.querySelector(".delete-entry").addEventListener("click", (event) => {
//     //         this.onDeleteBtnClick();
//     //     });

//     //     // row.querySelectorAll(".input-description").forEach(input => {
            
//     //     //     input.addEventListener("change", () => this.save());
//     //     // });

//     //     row.querySelector(".input-description").addEventListener("change", this.save());
//     // }

//     // load(){
//     //     const entries = JSON.parse(localStorage.getItem("task") || "[]");

//     //     for(const entry of entries){
//     //         this.addEntry(entry);
//     //     }

//     //     this.update();
//     // }

//     // save(){   // Take all the data and save to Local Storage

//     //     const data = this.getEntryRows().map((row) => {
//     //         return {
//     //             description: row.querySelector(".input-description").value,
//     //         };
//     //     });

//     //     localStorage.setItem("task", JSON.stringify(data));
//     //     this.update();
//     // }

//     // update(){
        
//     // }

//     // onNewEntryBtnClick(){
//     //     this.addEntry();
//     // }

//     // onEditBtnClick(event){
//     //     console.log('Edit Entry');
//     // }

//     // onDeleteBtnClick(event){
//     //     console.log("Entry Deleted");
//     // }

//     // getEntryRows(){    //  Return all the rows, remember 'querySelectorAll not queryselector'
//     //     return Array.from(this.root.querySelectorAll(".entries tr"));
//     // }

// }

// new Todo();


