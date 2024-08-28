"use client"
import React, { useState } from 'react'


const Vruti = () => {
  const [title,settitle ]=useState("")
  const [desc,setdesc ]=useState("")
  const [mainTask,setMainTask ]=useState([])
  const submitHandler=(e)=>{
    e.preventDefault()
    
    setMainTask([...mainTask,{title,desc}])
    settitle("")
    setdesc("")

  }
  const deleteHandler=(i)=>{
    let copytask =[...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask) 
   }
let renderTask=<h2 className='text-lg font-medium p-2 '>No Task Available</h2>
if(mainTask.length>0){
renderTask=mainTask.map(function(t,i){
  return <li key={i} className='flex items-center justify-between mb-3'>
    <div className='flex items-center justify-between p-2 w-2/3'>
    <h5 className='text-2xl font-semibold pl-3'>{t.title}</h5>
    <h6 className='text-lg font-medium pr-3'>{t.desc}</h6>
  <button onClick={()=>{deleteHandler(i)}} className='bg-red-400 text-white px-4 py2 rounded font-bold'>Delete</button>
  </div>
  </li>
})}
  return (
    <>
    <body className='bg-sky-50' >
    <h1 className='bg-sky-900 text-white p-4  text-2xl font-bold text-center '>My TodoList</h1>
    <form  onSubmit={submitHandler}>
      <input type="text" className='border-zinc-800 border-2 m-5 py-3 px-5 rounded' placeholder="Enter Task here" value={title} onChange={(e)=>{settitle(e.target.value)}}/>
      <input type="text" className='border-zinc-800 border-2 m-5 py-3 px-4 rounded' placeholder="Enter Description" value={desc} onChange={(e)=>{setdesc(e.target.value)}}/>
    <button className='text-white bg-sky-700 border-white border-5 p-2 px-3 hover:bg-sky-800 text-center text-l rounded-full m-5'>Add Task</button>
    </form>
    <hr/>
    <div className='p-3 bg-slate-200'>
    <ul>{renderTask}</ul>
    </div> 
    </body>       
    </>
  )
}

export default Vruti
