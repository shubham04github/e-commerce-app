import React, { useEffect, useState } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink, Route, Router, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DLT } from '../redux/actions/Action';


export default function Header() {

    const [price,setprice ]= useState(0);

    console.log(price);

    const [anchorEl, setAnchorEl] = useState  (null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const getdata = useSelector((state)=>state.cartreducer.carts);
    console.log(getdata);
    
    const dispetch =useDispatch();

    const dlt= (id)=>{
        dispetch(DLT(id));
    }

    const total = ()=>{
        let price=0;
        getdata.map((ele,k)=>{
            price = ele.price *ele.qnty +  price
        });
        setprice(price);
    };

    useEffect (()=>{
        total();
    },[total])
   
    return (
        <div>
            <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
                <Container>
                     <NavLink to='/' className="text-decoration-none text-light mx-3">Add to cart </NavLink>
                    <Nav className="me-auto">
                        <NavLink to='/' className="text-decoration-none text-light"> Home</NavLink>

                    </Nav>

                    <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <i class="fa-sharp fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
                    </Badge>

                </Container>

                <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      {
        getdata.length ?
        <div className="card_details" style={{width:"24rem",padding:10}}>
            <table>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Restaurant name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getdata.map((e)=>{
                            return(
                                <>
                                    <tr>
                                        <td>
                                         <NavLink to ={`/cart/${e.id}`} onClick={handleClose}>  <img src={e.imgdata} style={{width:"5rem",height:"5rem"}} alt="" /></NavLink>   
                                        </td>
                                        <td>
                                            <p>{e.rname}</p>
                                            <p>Price : ₹{e.price}</p>
                                            <p>Quantity: ₹{e.qnty}</p>
                                            <p style ={{color:"red",fontSize:20,cursor:"pointer"}} onclick={()=>dlt(e.id)}>
                                                <i className='fas fa-trash smalltrash'></i>
                                            </p>
                                        </td>
                                        <td className='mt-3' style ={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                                        <i className='fas fa-trash largetrash'></i>
                                        </td>

                                    </tr>
                                </>
                            )
                        })
                    }
                    <p className='text-center'>Total : ₹ {price}</p>
     +9/8p          </tbody>
            </table>
        </div>:
        <>
      <i className='fas fa-close smallclose'
      onClick={handleClose} 
      style={{position: "absolute",top:20,right:20,fontSize:23, cursor:"pointer"}}></i>
      <br />
       <h1 style={{fontSize:22}}>Your Cart Is Empty</h1>
       </>
      }
     
      </Menu>
            </Navbar>
        </div>
    )
}
