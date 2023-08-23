import bannerImg from "../../assets/banner.png"
import BookingBar from "../commmons/BookingBar"

const Banner = () => {
  return (
      <div className=" w-full   flex justify-center  items-center" style={{ height:"60vh", backgroundImage: `url(${bannerImg})`, backgroundSize: "100% 100%",backgroundRepeat: "no-repeat", backgroundPosition: "center",  }}>
        <div className="w-3/4 flex justify-center ">
          <div>
          <h1 className="p-20 w-3/4  font-serif  text-5xl  md:text-6xl  lg:w-1/2 font-bold text-white">  Lorem   <span className="text-[#9EDE82]">dolor</span>  sit<span className="text-[#9EDE82]"> amet </span>consectetur .  
        </h1>
        </div>
        </div>
      
    </div>
  )
}

export default Banner