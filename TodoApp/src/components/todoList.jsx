import React, { useState } from "react";
import Image from "next/image";
import bg_image_light from "../../public/assets/images/bg-desktop-light.jpg";
import bg_image_dark from "../../public/assets/images/bg-desktop-dark.jpg";
import icon_moon from "../../public/assets/images/icon-moon.svg";
import icon_sun from "../../public/assets/images/icon-sun.svg";
import icon_check from "../../public/assets/images/icon-check.svg";
import icon_cross from "../../public/assets/images/icon-cross.svg";
import Data from "../../data.json";

export default function TodoApp(){
    
    var [light , setLight] = useState(icon_moon);
    var [check, setCheck] = useState(true);
    var [tasks,setTasks] = useState(() => Data.tasks);
    var [count, setCount] = useState(5);
    
    
    function toggleLight(){
        var toggle =  document.querySelector('.bg-image');
        
        if(light == icon_moon){
            toggle.setAttribute('src',bg_image_dark); 
            setLight(light = icon_sun);
        }
        else{
            toggle.setAttribute('src', bg_image_light);
            setLight(light = icon_moon);
        }   
    }
    
    function checkInAndOut (){
        setCheck(!check);
    }
    
    function addTask(){
        const textvalue = document.getElementById('TextValue').value;
            setTasks(tasks = [...tasks,{
                "id":7,
                "task":`${textvalue}`
            }]);
            setCount(count = count+=1);
    }
    function deleteTask(){
        tasks.filter((item,id) => item[id].splice() )
        
    }

    return(<>
            <div className="w-screen bg-image"></div>
        
            <div className="container grid grid-row-1 grid-col-1 text-center  gap-0.5 ">
            
            {/* title and switch-icon */}
            <div className="tit-swi-i md-5 inline-flex  ">
                <div className="cursor-default text-3xl  text-white font-bold title">TODO</div> 
                <Image className="cursor-pointer m-2 w-5 h-5 " onClick={toggleLight} src={light}  alt='dark'/>
            </div>
            
            {/* input field */}
            <div className="border shadow-sm gap-8 rounded-md bg-white p-2 mt-8 mb-4 border-grey-400 inline-flex">
                <div ><Image className={` background: ${check ? 'none' : 'linear-gradient(hsl(192,100%,67%),hsl(280,87%,65%))'} cursor-pointer check-bg p-1 border border-gray-600 rounded-xl m-2`} onClick={checkInAndOut} src={icon_check} alt="check"/></div> 
                <div><input id="TextValue" className="border  text-center border-gray-600 m-1 pt-1 pd-4 w-26" type="text"/></div>
                <div className="m-2 cursor-pointer font-extrabold" onClick={addTask}>{`>>`}</div>
            </div>    
            
            {/* display Task */}
            {
                tasks.map((item,id)=>(
                <div style={{gap:'32px'}} className="inline-flex  shadow-xl border-grey-400 bg-white p-2 rounded-md task" draggable='true' key={id}>
                    <Image  className=" cursor-pointer check-bg p-1 border border-gray-600 rounded-xl m-2"  src={icon_check} alt="check"/>
                    <p className="text bg-green- text-left m-2 -ml-6 mr-20">{item.task}</p>
                    <Image className="cursor-pointer" onClick={deleteTask} src={icon_cross} alt="cross"/>
                </div>))
            }
            
            <div className="inline-flex bg-white rounded-md shadow-xl  p-3 itemleft-ClearCompleted"><div className="text-gray-500">{count} items left</div><div className="text-gray-500">Clear Completed</div></div>
            
            <div className="text-center bg-white rounded-md shadow-lg inline-flex gap-6 p-3 mt-5 All-Active-Completed"><div className=" text-blue-600">All</div><div className="text-gray-500">Active</div><div className="text-gray-500">Completed</div></div>
            <div className="text-sm  text-center bg-white rounded-md shadow-xl p-2 inline-flex  item-All-Act-com-clcom "><div className="text-gray-500">{count} items left</div><div className=" text-blue-600 cursor-pointer pl-10">All</div><div className="text-gray-500 cursor-pointer pr-3 pl-3 ">Active</div><div className="text-gray-500 cursor-pointer pr-10">Completed</div><div className="text-gray-500 cursor-pointer">Clear Completed</div></div>
        </div>

        <div className="text-center mt-10 text-gray-500 note">Drag and drop to reorder list</div>
    </>)
}