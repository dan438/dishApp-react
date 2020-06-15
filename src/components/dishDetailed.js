import React from 'react';
import {Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle, Breadcrumb,BreadcrumbItem } from 'reactstrap'
import {Link } from 'react-router-dom'

 function RenderDish ({dish}) {
        if (dish != null) {
            return(
               
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>

            );}
        else{
            return(
                <div></div>
        );}
    }

 function RenderComment ({dish}) {
        if (dish != null)
       
                 return(
                        <CardBody>
                            <CardText>  
                              <p> {dish.comment} </p>
                              <p> {dish.description} </p>
                              <p> {dish.author}, { new Intl.DateTimeFormat('en-us', {year: 'numeric', month: 'short', day: '2-digit'}).format( new Date(Date.parse(dish.date)))} </p>
                            </CardText>
                        </CardBody>  
                ); else
        return(
            <div></div>
        );

    }
           
    const Detailed = (props) => {
        return (
           <div className="container">
            <div className="row">
                <Breadcrumb>
                  <BreadcrumbItem><Link to="/menu"> Menu  </Link> </BreadcrumbItem>
                  <BreadcrumbItem active> {props.dish.name} </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                  <h3> Menu </h3>
                  <hr/>
                </div>
            </div> 
                    <div className="row">
                    <div className=" col-12 col-md-5 m-1 ">
                        <RenderDish  dish = {props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComment dish={props.comments} />
                    </div>
                </div>
            </div>

        );
    }

export default Detailed;

