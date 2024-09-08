import pb1 from "../assets/Problems1.png"
import pb2 from "../assets/Problems2.png"
import pb3 from "../assets/Problems3.png"

 const Problems=()=>{
    return(
        <div className=" max-w-[1240px] mx-auto py-20 flex flex-col px-2  ">

            <div className="text-center font-bold mb-6">
                <h1 className="text-[50px]  font-playfair text-[#041558]"><span className="text-black font-bold text-[50px]">PACAM</span> Ultimate <br />Problem-Solver for Everyone</h1>
            </div>


            <div className="p-2 font-playfair ">
            <h6 className="text-xm text-gray-600 px-4 font-medium  mb-3">Customer Service: Create relationships</h6>
            <h1 className="text-4xl font-Inter text-indigo-950 font-medium px-3 mb-4">Swiftly Handle Customer Claims with Ease</h1>

            </div>            

            <div className="md:grid grid-cols-3 gap-5 p-2 px-3">
  <div className="flex flex-col   shadow-xl  my-3 hover:scale-105 duration-500 ">
    <div className="mb-5 bg-[#F3F8FF]">
      <img src={pb1} alt="Card Image" className="w-full p-11 h-full object-cover" />
    </div>
    <h1 className="pl-3 font-playfair font-bold text-indigo-950 text-2xl mb-5">Minimize Customer Queire</h1>

    <h1 className="pl-3 pr-[50px] font-lora mb-20 lg:text-base text-gray-600 text-justify">
        cut down unnecessary customer questions by 80% and elevate your service experience!
    </h1>

  </div>
  <div className="flex flex-col   shadow-xl  my-3 hover:scale-105 duration-500 ">
    <div className="mb-5 bg-[#F3F8FF]">
      <img src={pb2} alt="Card Image" className="w-full p-11 h-full object-cover" />
    </div>
    <h1 className="pl-3 font-playfair font-bold text-indigo-950 text-2xl mb-5">Keeping Claims in Check</h1>

    <h1 className="pl-3 font-lora pr-[50px] mb-20 lg:text-base text-gray-600 text-justify">
        Master your order experience video logs cut malicious claims by 50%, so you and your customers can focus on what truly matters.
    </h1>

  </div>
  <div className="flex flex-col   shadow-xl  my-3 hover:scale-105 duration-500 ">
    <div className="mb-5 bg-[#F3F8FF]">
      <img src={pb3} alt="Card Image" className="w-full p-11 h-full object-cover" />
    </div>
    <h1 className="pl-3 font-playfair font-bold text-indigo-950 text-2xl mb-5">Discover Video Library</h1>

    <h1 className="pl-3 font-lora pr-[50px] mb-20 lg:text-base text-gray-600 text-justify">
        Video Retrieval in Just 30 Seconds! No Need to Wait on Other Departments, Quickly Handle Claims with Ease!
    </h1>

  </div>
  

  
</div>




        </div>
    )
}
export default Problems
