import Cards1 from "../assets/Cards1.png"
import Cards2 from "../assets/Cards2.png"
import Cards3 from "../assets/Cards3.png"




const Cards=()=>{
    return (
        <div className=" max-w-[1240px] mx-auto py-20 flex flex-col px-2  ">
            <div className="p-2 px-3">
            <h6 className="text-xm text-gray-600   mb-3">Logistic Center: Improve Accuracy</h6>
            <h1 className="text-4xl  font-light text-dark-blue mb-4">Streamline Your Workflow with Ease</h1>


            </div>
            

            <div className="md:grid grid-cols-3 gap-5 p-2 px-3">
  <div className="flex flex-col  p-4 shadow-xl  my-3 hover:scale-105 duration-500 bg-[#F7EFE5]">
    <h1 className="text-2xl lg:text-4xl mb-5">See it Clearly, <br />Video Evidence</h1>

    <h1 className=" mb-20 lg:text-base text-gray-600 text-justify md:h-[80px]">
      95% of compensaton costs drop because the video log can be used as evidence to resolve claims 
    </h1>

    <div className="p-4 bg-[#F3E2D3]">
      <img src={Cards1} alt="Card Image" className="w-full h-full object-cover" />
    </div>
  </div>

  <div className="flex flex-col  p-4 shadow-xl  my-3 hover:scale-105 duration-500 bg-[#F7EFE5]">
    <h1 className="text-2xl lg:text-4xl mb-5">Maximize <br />Team Efficiency </h1>

    <h1 className=" mb-20 break-words text-base text-gray-600 text-justify md:h-[80px]">
      Master operational effectiveness by strategically redeploying staff members previously assigned to mis-shipment issues.
    </h1>

    <div className="p-4  bg-[#F3E2D3]">
      <img src={Cards2} alt="Card Image" className="w-full h-full object-cover" />
    </div>
  </div>

  <div className="flex flex-col  p-4 shadow-xl  my-3 hover:scale-105 duration-500 bg-[#F7EFE5]">
    <h1 className="mb-5 text-2xl lg:text-4xl break-words">Uphold <br />Accountability</h1>

    <h1 className=" mb-20 text-base text-gray-600 text-justify md:h-[80px]">
      Empowering our team with personal accounts helps them master the art of careful packing,ensuring every order is perfect
    </h1>

    <div className="p-4 bg-[#F3E2D3]">
      <img src={Cards3} alt="Card Image" className="w-full h-full object-cover" />
    </div>
  </div>
</div>


        </div>
    )
}

export default Cards
