import { useState } from "react";

function App() {
  return (
    <>
      <section className="w-full mx-auto flex justify-center bg-action h-54">
        <div className="bg-border px-5 py-4 w-[1440px] flex flex-col gap-4">
          <h1 className="text-white text-3xl font-inter">Hello world!</h1>
          <h1 className="text-red-500 text-3xl font-redhat self-center">Hello world!</h1>
          <h1 className="text-greener self-end">Green</h1>
        </div>
      </section>
    </>
  );
}

export default App;
