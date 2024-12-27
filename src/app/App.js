import React from 'react';

const App = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-white">

      <div className="slide-left" />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[600px] bg-white bg-opacity-[0.9] rounded-[30px] shadow-lg">
        <div className="text-[#02B94BD6] text-5xl font-normal leading-[107.52px] tracking-[2px] ml-10 mt-12">LOGİN</div>
        <form className="mt-6 px-10">
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="Username"
              required
              className="w-full py-3 px-4 text-base border border-[#00000024] rounded-[10px] outline-none"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              className="w-full py-3 px-4 text-base border border-[#00000024] rounded-[10px] outline-none"
            />
          </div>
          <button type="submit" className="w-[182px] h-[54px] bg-[#02B94BD6] rounded-[10px] flex justify-center items-center cursor-pointer mx-20px mb-4">
            <p className="text-white text-lg font-normal leading-[30.48px] tracking-[2px]">LOGIN</p>
          </button>
        </form>

        <div className="flex justify-center items-center mt-6">
          <div className="w-[550px] flex items-center">
            <div className="flex-grow h-[1px] bg-[#00000080]" />
            <div className="mx-5 text-[#000000a1] font-semibold text-lg">OR</div>
            <div className="flex-grow h-[1px] bg-[#00000080]" />
          </div>
        </div>

        <div className="flex mt-8 ml-[190px]">
      <img src="./images/image2.png" alt="Google" className="w-[30px] h-[30px] object-cover rounded-[10px] mr-[62px]" />
     <img src="./images/image3.png" alt="Facebook" className="w-[30px] h-[30px] object-cover rounded-[10px]" />
     </div>


     <div className="flex justify-center mt-16 space-x-64">
  <div className="text-[#02B94BD6] text-sm font-bold cursor-pointer">Forgot Password</div>
  <div className="text-[#02B94BD6] text-sm font-bold cursor-pointer">Register</div>
</div>




      </div>
      <div className="slide-right"/>
    </div>
  );
};

export default App;
