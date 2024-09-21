const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    // console.log(notes);
    const data = [];
    notes.forEach((note) => {data.push(note.value)});
    // console.log(data)
    localStorage.setItem("notes", JSON.stringify(data));
}

addBtn.addEventListener("click", function(){
    addNote();
});

(
    function(){
        const lsnotes = JSON.parse(localStorage.getItem("notes"));
        lsnotes.forEach(
            (lsnotes) => {
                addNote();
            }
        )
    }
)

const addNote = () => {
    const note = document.createElement("div");
    // div.style.backgroundColor = "red";
    note.classList.add("note");
    note.innerHTML = `
        <div class="tool">
            <i class="trash fa-solid fa-trash"></i>
            <i class="save fa-solid fa-floppy-disk"></i>
        </div>
        <textarea></textarea>`;
    note.querySelector(".trash").addEventListener("click", function(){
        note.remove();
        saveNotes();
    });
    note.querySelector(".save").addEventListener("click",function(){
        saveNotes();
    });
    main.appendChild(note);
    saveNotes();
}