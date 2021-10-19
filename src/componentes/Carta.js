import React from "react";

export default function Carta(props) {
    return ( 
        <div>
            <div className="card m-4">
                <div className="card-header">
                    <div className="row">
                        <div className="col-8 col-sm-8 d-flex justify-content-center">
                            <span>Jimmie Heinz</span>
                        </div>
                        <div className="col-4 col-sm-4 text-center">
                            <div className="card p-1">
                                N° Card: #547854
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6 col-sm-6 text-center">
                            jimmie.heinz@mail.com
                        </div>
                        <div className="col-6 col-sm-6 text-center">
                            +1 844 844 0121
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}