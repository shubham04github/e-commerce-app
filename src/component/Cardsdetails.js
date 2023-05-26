import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DLT,ADD, REMOVE } from '../redux/actions/Action';

export default function Cardsdetails() {
  const [data,setdata] = useState([]);
  const {id} = useParams();
  // console.log(id);
  const getdata = useSelector((state)=>state.cartreducer.carts);
    // console.log(getdata);


    const history = useNavigate();
    const dispetch = useDispatch();

    // add data

    const send=(e)=>{
      // console.log(e);
      dispetch(ADD(e));
      }

    const dlt= (id)=>{
      dispetch(DLT(id));
      history("/");
  }


  //  remove one

  const remove = (item)=>{
    dispetch(REMOVE(item))
  }


    const compare = ()=>{
      let comparedata = getdata.filter((e)=>{
        return e.id == id

      });
      setdata(comparedata);
      console.log(data);
    }
    useEffect(()=>{
          compare();
    },[id])
  return (
   <>
    <div className="container mt-4">
        <h2 className='text-center'>Items Details page</h2>

        <section className='container mt-3'>
            <div className="itemsdetails d-flex" >

            
            {
              data.map((ele)=>{
                return (
                  <>
                  <div className="items_img">
                    <img src={ele.imgdata} alt="" />
                  </div>

                  <div className="details " >
                      <table>
                        <tr>
                          <td>
                            <p> <strong>Restaurant </strong>: {ele.rname}</p>
                            <p> <strong>Price </strong>: ₹ {ele.price}</p>
                            <p> <strong>Dishes</strong>: {ele.address}</p>
                            <p> <strong>Total </strong>: ₹ {ele.price * ele.qnty}</p>

                            <div className='mt-3 d-flex justify-content-between align-items-center' style={{width: 100,cursor:"pointer",backgroundColor:"#ddd",color:"#111"}}>

                            <span style={{fontSize:26}} onClick ={ele.qnty<=1? ()=>dlt(ele.id): ()=>remove(ele)}>-</span>
                            <span style={{fontSize:22}}>{ele.qnty}</span>
                            <span style={{fontSize:26}} onClick={()=>send(ele)}>+</span>

                            </div>
                            
                          </td>
                          <td>
                            <p><strong>Rating :</strong>  <span style={{background : "green",color :"efff",padding:"2px 5px",borderRadius:"5px"}}>{ele.rating}</span></p>
                            <p><strong>Order Review :</strong>  <span >{ele.somedata}</span></p>
                            <p><strong>Remove:</strong>  <span> <i className= 'fas fa-trash' onClick={()=>dlt(ele.id)} style={{color:"red",fontSize:"20",cursor:"pointer"}}></i></span></p>
                          </td>
                        </tr>
                      </table>
                  </div>
                  </>
                )
              })
            }
                  
            </div>

        </section>
    </div>

   </>
  )
}
