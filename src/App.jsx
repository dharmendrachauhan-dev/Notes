import { useState } from 'react'
function App() {

  const [note, setNote] = useState('')
  const [text, setText] = useState('')

  const [task, setTask] = useState([]) // Array use for storing the value

  const handleDelete = (idx) => {
    const copyTask = [...task]
    //console.log(idx) // Known index
    //console.log(copyTask[idx])// known array 
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  const handleForm = (e) => {
    e.preventDefault();
    // console.log({taskName:note , details:text});
    const prevNote = [...task]
    prevNote.push({note,text})
    setTask(prevNote)
    console.log(task)

    setNote('')
    setText('')
  };

  return (
    <div>
      <div className="bg-black h-screen w-full text-white flex justify-between flex-col lg:flex lg:flex-row">
        <form
          onSubmit={(e) => {
            handleForm(e);
          }}
          className="flex flex-col text-xl gap-5 w-full p-4"
        >
          <h1 className="font-bold leading-1.5">Add Notes</h1>
          <input
            type="text"
            placeholder="Enter task name"
            className="outline-none border-3 p-2 border-white rounded-xl font-bold "
            value={note}
            onChange={(e)=>setNote(e.target.value)}
          />
          <textarea 
          placeholder="Write details..."
          className="outline-none border-3 p-2 border-white rounded-xl font-medium h-40"
          value={text}
          onChange={(e) => setText(e.target.value)}
          />
          <button className="bg-gray-500 rounded-xl font-semibold p-3 cursor-pointer hover:bg-gray-700 duration-300">Submit</button>
        </form>
        <div className="w-full h-full overflow-scroll p-4">
          <h1 className="font-bold text-xl ">Recent Notes</h1>
        <div className="flex flex-wrap gap-4  pt-2 w-full">

          
          {task.map((elem, idx)=>{
            return <div key={idx} className="relative h-60 w-50 bg-cover bg-[url('https://i.pinimg.com/1200x/f2/07/7e/f2077e179543923c63ffbba8847ba4be.jpg')] rounded-xl text-black p-2 overflow-scroll">
              <div>
                  <h3 className='font-semibold text-xl leading-tight text-black'>Title : {elem.note}</h3>
                  <p className='text-lg mt-2 font-medium text-gray-600'>Details : {elem.text}</p> 
              </div>
              <button onClick={()=>handleDelete(idx)} className='bg-red-500 left-8 top-48 px-6 py-2 active:bg-red-600 active:scale-90 duration-200 font-bold absolute rounded leading-snug'>Delete Note</button>
            </div>
          })}
         
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
