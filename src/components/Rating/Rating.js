import React from 'react'


const Rating = ({value}) => {
    let val = value
    let str_val = val.toString()
    let arr_val = str_val.split('.')
    let main_val = parseInt(arr_val[0])
    let sub_val = parseInt(arr_val[1])

    let rating_classes=[]

    for(let i=0;i<main_val;i++){
        rating_classes.push('fa-solid fa-star')
        if(i===4){
            break;
        }
    }

    if(main_val!==5){
        if(sub_val >= 1){
            rating_classes.push('fa-solid fa-star-half-stroke')
        }else{
            rating_classes.push('fa-regular fa-star')
        }
    }

    for(let i=main_val+1;i<5;i++){
        rating_classes.push('fa-regular fa-star')
    }
    

  return (
    <span>
        {
            rating_classes.map((rating_class,index)=>{
                return(
                    <i className={rating_class} style={{color:"orange"}} key={index}></i>
                )
            })
        }
    </span>
  )
}

export default Rating