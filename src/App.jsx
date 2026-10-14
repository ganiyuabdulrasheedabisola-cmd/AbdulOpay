import React from 'react'
import './App.css'
import { FaHeadset } from "react-icons/fa";
import { IoMdQrScanner } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { TbMathGreater } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { FaSave } from "react-icons/fa";
import { RiMobileDownloadFill } from "react-icons/ri";
import { BsClipboard2DataFill } from "react-icons/bs";
import { MdLiveTv } from "react-icons/md";
import { SiCashapp } from "react-icons/si";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaPiggyBank } from "react-icons/fa6";
import { GiArmoredBoomerang } from "react-icons/gi";
import { GiLightBulb } from "react-icons/gi";
import { BsFillGiftFill } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdAddHome } from "react-icons/md";
import { IoDiamondSharp } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";

const App = () => {
  return (
     <div className="container h-[120vh] w-[100%] bg-green-800 p-[2rem] justify-content ">
      <div className="head h-[10vh] w-[100%] grid grid-cols-2 bg-white rounded-[10rem]">
        <div className="left h-[10vh] bg-white p-[.6rem] rounded-[10rem]">
          <div className="profile-pic rounded-full w-[3vw] h-[10vh] bg-grey-300">
           
          </div>
<div className="text pl-[4rem] font-bold flex mt-[-2.50rem]"><h1>Hi, Abdulrasheed</h1></div>
        
        </div>
        <div className="right flex p-[1.5rem] gap-[3rem] justify-center text-[1.2rem]">
            <FaHeadset />
            <IoMdQrScanner />
            <FaRegBell />
          </div>

      </div>
      <div className="balance h-[20vh] bg-green-500 rounded-4xl mt-[1rem] grid grid-cols-2">
        <div className="Available bg-green-500  items-center gap-[1rem] p-[2rem] rounded-4xl">
          <div className='flex gap-[.3rem] items-center mb-[.3rem] mt-[.1rem]'><FaShieldAlt /> 
          <h1>Available Balance</h1>
          <IoEyeSharp /></div>

          <div>
            <h1 className='text-[1.5rem] font-bold '>₦ 1,656,000.00</h1>
          </div>

          <div>
            <h1 className='text-[.7rem] font-bold mt-[-0.3rem]'>Owealth 0.2</h1>
          </div>

          

        </div>
        <div className="Add money items-center">
          <button className='border-2 w-[20vw] rounded-full text-white mt-[2.1rem] ml-[7rem] flex items-center justify-center'>
            <FaPlus/ >Add Money</button>
        </div>
        
      </div>
      <div className="spend flex items-center justify-center h-[5vh] bg-green-500 rounded-2xl mt-[.5rem] gap-[8rem]">
<div className="icon flex gap-[.5rem] items-center ">
  <  FaRegCheckCircle className='text-green-800'/>
  <h1>Spend and Save Withdrawal ₦40,000 </h1>

</div>
<div className="transactions flex items-center gap-[.5rem]"><h1>Transactions</h1>< TbMathGreater /></div>

      </div>
   <div className="grid grid-cols-3 h-[12vh] w-[100%] bg-green-100 items-center mt-4 rounded-2xl  ">
    <div className="h-[6vh] w-[15vw] ">
      <div className="bg-black items-center justify-center p-2.5 rounded-2xl ml-[3rem] ">
         <FaUser className='text-[1.5rem] text-white'/>
      </div>
      <p className='text-[.8rem] font-bold ml-[3.4rem] mt-[.1rem] text-[.8rem] '>OPay</p>
     
    </div>
    
    <div className="h-[6vh] w-[15vw] ">
      <div className="bg-black items-center justify-center p-2.5 rounded-2xl ml-[3rem] ">
         <BsBank2 className='text-[1.5rem] text-white'/>
      </div>
      <p className='text-[.8rem] font-bold ml-[3.5rem] mt-[.1rem] flex '>Bank</p>
     
    </div>
     <div className="h-[6vh] w-[15vw] ">
      <div className="bg-black items-center justify-center p-2.5 rounded-2xl ml-[3rem] ">
         <FaSave className='text-[1.5rem] text-white'/>
      </div>
      <p className='text-[.8rem] font-bold ml-[3.5rem] mt-[.1rem]'>Save</p>
     
    </div>




    
   </div>

   <div className="content h-[27vh] w-[100%]  bg-white  mt-[1rem] rounded-2xl grid grid-cols-4 p-2 justify-center ">
    <div className="grid p-1">
      <div className="data h-[7vh] w-[8vw] bg-black rounded-full mt-[.5rem] ml-[.8rem]">
        <BsClipboard2DataFill className='text-[2rem] mt-[.7rem] ml-[.5rem] text-white' />
        <div className="text font-bold mt-[1rem] "><h2>Airtime</h2></div>
      </div>
      
      <div className="data h-[7vh] w-[8vw] bg-black rounded-full mt-[.5rem] ml-[.8rem]">
        <RiMobileDownloadFill className='text-[2rem] mt-[.7rem] ml-[.5rem] text-white' />
        <div className="text text-[1rem] font-bold ml-[.7rem] flex mt-[1rem] ml-[.1rem] items-center"><h1>Data</h1></div>
      </div>
    </div>
    <div className="grid p-1">
      <div className="data h-[7vh] w-[8vw] bg-black rounded-full mt-[.5rem] ml-[.8rem]">
        <BsFillGiftFill className='text-[2rem] mt-[.7rem] ml-[.5rem] text-white' />
        <div className="text text-[1rem] font-bold ml-[0.3rem] mt-[1rem]"><h1>OBox</h1></div>
      </div>
       <div className="data h-[7vh] w-[8vw] bg-black rounded-full mt-[.5rem] ml-[.8rem]">
        < GiLightBulb  className='text-[2rem] mt-[.7rem] ml-[.5rem] text-white' />
         <div className="text text-[1rem] font-bold ml-[-0.5rem] mt-[1rem]"><h1>Electricity</h1></div>
      </div>    </div>

    <div className="grid p-1">
       <div className="data h-[7vh] w-[8vw] bg-black rounded-full mt-[.5rem] ml-[2rem]">
        <SiCashapp className='text-[2rem] mt-[.7rem] ml-[.5rem] text-white' />
         <div className="text text-[1rem] font-bold ml-[-1rem] mt-[1rem] flex "><h1>Spend&Save</h1></div>
      </div>
       <div className="data h-[7vh] w-[8vw] bg-black rounded-full mt-[.5rem] ml-[2rem]">
        <HiOutlineSpeakerphone className='text-[2rem] mt-[.7rem] ml-[.5rem] text-white' />
         <div className="text text-[1rem] font-bold ml-[-0.5rem] mt-[1rem] "><h1>Invitation</h1></div>
      </div>
    </div>
    <div className="grid p-1">
       <div className="data h-[7vh] w-[8vw] bg-black rounded-full mt-[.5rem] ml-[3rem]">
        <MdLiveTv className='text-[2rem] mt-[.7rem] ml-[.5rem] text-white' />
         <div className="text text-[1rem] font-bold ml-[.9rem] mt-[1rem]"><h1>TV</h1></div>
      </div>
      <div className="data h-[7vh] w-[8vw] bg-black rounded-full mt-[.5rem] ml-[3rem]">
        <FaPiggyBank className='text-[2rem] mt-[.7rem] ml-[.5rem] text-white' />
         <div className="text text-[1rem] font-bold ml-[.1rem] mt-[1rem]"><h1>OWealth</h1></div>
      </div>
    </div>
    
   </div>

   <div className="container h-[17vh] w-[100%] rounded-2xl mt-[1rem] bg-green-100">
    <div className="text text-[1rem] font-bold p-4"><h1>Smart Picks for you </h1>
        <div className="h-[5vh] w-[6vw] bg-black rounded-full ml-[24rem] "><h1 className='font-bold p-2 text-white'>Go</h1></div>
    
    <div className="p-4 mt-[-3rem]"><FaPiggyBank className='text-[3.8rem]'/>
    <div className="mt-[-3rem] ml-[5rem]"><h1>SafeBox </h1>Deposit & Earn Massive Returns<h1></h1>

    </div>
    </div>
    </div>
   </div>
     
   <div className="grid grid-rows-4 h-[12vh] w-[100%] bg-red-100 mt-[1rem] rounded-full items-align">
    <div className="grid">
      <div className="data h-[7vh] w-[8vw] bg-black rounded-full mt-[.6rem] ml-[1.6rem]">
        <div className="mt-[.6rem] ml-[.6rem]"><MdAddHome className='text-[2rem] text-white'/>
        <div className="text-[.8rem] font-bold mt-[.4rem] ml-[-.2rem]"><h1>Home</h1></div>
        
        
        
        
        </div>

    <div className="grid">
      <div className="data h-[7vh] w-[8vw] bg-black rounded-full ml-[9rem] mt-[-4rem] ">
        <div className="mt-[.7rem] ml-[.6rem]"><IoDiamondSharp  className='text-[2rem] text-white'/>
        <div className="font-bold text-[.8rem] mt-[.2rem] ml-[-.5rem]"><h1>Rewards</h1></div>
        </div>
      </div>

 <div className="grid">
      <div className="data h-[7vh] w-[8vw] bg-black rounded-full ml-[18rem] mt-[-4rem] ">
        <div className="mt-[.6rem] ml-[.6rem]"><FaChartLine className='text-[2rem] text-white'/>
         <div className="font-bold text-[.8rem] mt-[.3rem] ml-[-.4rem]"><h1>Wealth</h1></div>
        </div>
      </div>

  <div className="grid">
    <div className="data h-[7vh] w-[8vw] bg-black rounded-full ml-[26rem] mt-[-4rem] ">
      <div className="mt-[.6rem] ml-[.6rem]"><FaAddressCard className='text-[2rem] text-white'/>
       <div className="font-bold text-[.8rem] mt-[.3rem] ml-[+.3rem]"><h1>Me</h1></div>
       </div>
    </div>
  </div>
  
</div>
    </div>
        
        
      </div>
      
    </div>
   </div>


    

    </div>
  )
}

export default App
