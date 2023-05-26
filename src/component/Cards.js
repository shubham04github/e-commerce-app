import { height } from '@mui/system';
import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import Cardsdata from './Cardsdata'
import "./Style.css";
import {ADD} from '../redux/actions/Action';
export default function Cards() {
    const [data, setdata] = useState(Cardsdata);
    // console.log(data);

            const dispetch =useDispatch();

            const send=(e)=>{
            // console.log(e);
            dispetch(ADD(e));
            }
    return (
        <div className='container mt-3 text-center'>
            <h2>Add to Cart Projects</h2>
            <div className="row justify-content-center align-items-center">
                {
                    data.map((element, id) => {
                        return (
                            <>
                                <Card style={{ width: '18rem' ,border:"none"}} className="mx-2 mt-4 card_style">
                                    <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3"/>
                                    <Card.Body>
                                        <Card.Title>{element.rname}</Card.Title>
                                        <Card.Text>
                                            price : ₹ {element.price}
                                        </Card.Text>
                                      <div className="button_div" d-flex justify content-center>
                                      <Button variant="primary"
                                      onClick={()=>send(element)}
                                       className='col-lg-12'>Add to Cart</Button>
                                      </div>
                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })
                }


            </div>

        </div>
    )
}
