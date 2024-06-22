function App() {
  return (
    <div className="flex flex-col min-h-screen  items-center justify-center gap-4 bg-black text-white/80">
      <h1 className="text-3xl font-bold bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
        Ask a Question
      </h1>

      <div className="flex flex-row  p-2 justify-between items-center  w-1/2 gap-4 rounded-full bg-white/15 backdrop-blur-xl opacity-95">
        <input
          type="text"
          placeholder="Type your question here"
          className="px-3 w-3/4 text-wrap rounded-lg bg-transparent  outline-none"
        />
        <button
          type="submit"
          className="w-1/4 border-white p-2 rounded-full bg-white/80 text-black font-bold"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
