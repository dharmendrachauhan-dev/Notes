function App() {
  const handleForm = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
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
          />
          <textarea 
          placeholder="Write details..."
          className="outline-none border-3 p-2 border-white rounded-xl font-medium h-40"
  
          />
          <button className="bg-gray-500 rounded-xl font-semibold p-3 cursor-pointer hover:bg-gray-700 duration-300">Submit</button>
        </form>
        <div className="w-full h-full overflow-scroll p-4">
          <h1 className="font-bold text-xl ">Recent Notes</h1>
        <div className="flex flex-wrap gap-4  pt-2 w-full">
          <div className="h-50 w-40 bg-white rounded-xl text-black p-2 font-semibold text-xl"></div>
          <div className="h-50 w-40 bg-white rounded-xl text-black p-2 font-semibold text-xl"></div>
          <div className="h-50 w-40 bg-white rounded-xl text-black p-2 font-semibold text-xl"></div>
          <div className="h-50 w-40 bg-white rounded-xl text-black p-2 font-semibold text-xl"></div>
          <div className="h-50 w-40 bg-white rounded-xl text-black p-2 font-semibold text-xl"></div>
          <div className="h-50 w-40 bg-white rounded-xl text-black p-2 font-semibold text-xl"></div>
          <div className="h-50 w-40 bg-white rounded-xl text-black p-2 font-semibold text-xl"></div>
          <div className="h-50 w-40 bg-white rounded-xl text-black p-2 font-semibold text-xl"></div>
          <div className="h-50 w-40 bg-white rounded-xl text-black p-2 font-semibold text-xl"></div>
          <div className="h-50 w-40 bg-white rounded-xl text-black p-2 font-semibold text-xl"></div>
          <div className="h-50 w-40 bg-white rounded-xl text-black p-2 font-semibold text-xl"></div>
          <div className="h-50 w-40 bg-white rounded-xl text-black p-2 font-semibold text-xl"></div>
          <div className="h-50 w-40 bg-white rounded-xl text-black p-2 font-semibold text-xl"></div>
          <div className="h-50 w-40 bg-white rounded-xl text-black p-2 font-semibold text-xl"></div>
          <div className="h-50 w-40 bg-white rounded-xl text-black p-2 font-semibold text-xl"></div>
          <div className="h-50 w-40 bg-white rounded-xl text-black p-2 font-semibold text-xl"></div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
