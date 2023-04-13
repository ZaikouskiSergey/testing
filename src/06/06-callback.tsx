import React, {ChangeEvent, MouseEvent}from "react";
/*
const callback=()=> {alert('hey')
}
window.setTimeout(callback , 1000)

*/

export const User = () => {
    const deleteUser = (event:MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.name)
        //alert('user have been delete')
    }
   /* const saveUser = () => {
        alert('user have been saved')
    }*/
    const onNameChanged=()=>{
        console.log('name CHANGED')
    }
    const onAgeChanged =(event:ChangeEvent<HTMLInputElement>)=>{
        console.log('age CHANGED:'+ event.currentTarget.value )

    }
    const onBlurHandler=()=>{
        console.log('i am here')

    }
    return (
        <div>
            <div>
           <textarea
               onChange={onNameChanged}
               onBlur={onBlurHandler}
           > Vasya</textarea>
                <input type={"number"} onChange={onAgeChanged}/>
            </div>
            <button name='delete' onClick={deleteUser}>x</button>
            <button name='save'onClick={deleteUser}>x</button>
        </div>

    )

}