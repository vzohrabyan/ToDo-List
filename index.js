class TodoList {
    constructor() {
      this.arr;
      this.todos = [
        
      ];
      this.state = false;
      this.searchedTodo = [];
    }
    main() {
      const input = document.querySelector(".add-input");
      input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.querySelector('.add-button').click();
        }
      });
      this.drawList();
      this.hideDone()
    }
  
    add() {
      const input = this.getEl(".add-input");
      const wrong = this.getEl("span"); 
      const value = input.value.trim();
        if (!value) {
          input.style.border = "1px solid red";
          wrong.style.display = "block";
          return;
        }
        input.style.border = "1px solid #FFCD04";
        wrong.style.display = "none";
        this.todos.push({
          id: this.todos.length + 1,
          title: value,
          isDone: false,
          isHidden: false
        });
        input.value = '';
        this.drawList();
    }
  
    drawList() {
      const listEl = this.getEl(".list"); 
      const backEl = this.getEl(".back"); 
      const inputEl = this.getEl(".add-input");
      inputEl.value = "";
      backEl.style.display = "none";
      listEl.innerHTML = "";
      const deleteModal = this.getEl('.delete-modal');
      deleteModal.style.display = "none"; 
      if (this.searchedTodo[0] !== undefined) {
        backEl.style.display = "block"
        this.arr = this.searchedTodo;
        this.searchedTodo = [];
      } else {
        this.arr = this.todos
      };
      this.arr.forEach(todo => {
        if (!todo.isHidden) {
            if(todo.isDone){
                listEl.innerHTML += `
              <div class="task">
                <div class="checkbox" onclick="todolist.check(${todo.id})"><img src="./Assets/check.svg" class="activeCheckbox"></div>
                <p class="titleDone">${todo.title}</p>
                <button onClick="todolist.deleteModal(${todo.id})" class="delete-button"><img src="./Assets/remove.svg"></button>
              </div>
            `;
            } else {
                listEl.innerHTML += `
              <div class="task">
                <div class="checkbox" onclick="todolist.check(${todo.id})"></div>
                <p class="title">${todo.title}</p>
                <button onClick="todolist.deleteModal(${todo.id})" class="delete-button"><img src="./Assets/remove.svg"></button>
              </div>
            `;
            }
        }
      });
    }
  
    getEl(selector) {
      if (!selector) {
        throw new Error("Invalid Arguments!");
      }
      return document.querySelector(selector);
    }

    deleteModal(id) {
        const deleteModal = this.getEl('.delete-modal');
        const deleteMain = this.getEl('.delete-title')
        deleteModal.style.display = "flex"; 
        deleteMain.innerHTML = `
        <p>Are you sure you want to delete?</p>
        <button onclick="todolist.delete(${id})">Yes</button>
        <button onclick="todolist.drawList(${id})">No</button>`;
    }
  
    delete(id) {
        console.log(true);
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
      this.drawList();
    }

    check(id) {
        this.todos.forEach(todo => {
            if (todo.id === id) {
                todo.isDone = !todo.isDone;
            }
            return todo;
        })
        this.showHideBox();
    }
    showHideBox() {
        const hideDone = this.getEl(".hide");
        const checked = this.todos.filter(todo => todo.isDone === true);
        if (checked.length === 0) {
            hideDone.style.display = "none"
        } else {
            hideDone.style.display = "flex"
        }
        this.drawList();
    }
    hideDone() {
        const hide = this.getEl('.hide-box')
        this.state = !this.state;
        if (this.state) {
            this.todos.map(todo => {
                if (todo.isDone) {
                    todo.isHidden = false;
                }
                return todo;
            })
            hide.innerHTML = '';
        } else {
            this.todos.map(todo => {
                if (todo.isDone) {
                    todo.isHidden = true;
                }
                return todo;
            })
            hide.innerHTML = `<img src="./Assets/check.svg">`;
        }
        this.drawList(); 
    }
    search() {
      const input = this.getEl('.add-input');
      const wrong = this.getEl('span');
      let value = input.value.trim();
      const trimedInput = value.toLowerCase().split(' ').join('');
      if (!value) {
        input.style.border = "1px solid red";
        wrong.style.display = "block";
        return;
      }
        wrong.style.display = "none";
        input.style.border = "1px solid #FFCD04";
      this.searchedTodo = this.todos.filter(todo => {
        const trimedTodo = todo.title.toLowerCase().split(' ').join('');
        return trimedTodo.includes(trimedInput.toLowerCase())
      })
      input.value = "";
      if (this.searchedTodo.length !== 0) {
          this.drawList();
      } else {
        const listEl = this.getEl(".list"); 
        const backEl = this.getEl(".back"); 
        backEl.style.display = "block";
        listEl.innerHTML = `<h2>Not Found</h2>`;
      }
    }
  }
  
  const todolist = new TodoList();
  todolist.main();
  






















