import {useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

function Left({ user, peeps, setPeeps }) {

    useEffect(() => {
        axios.get("http://localhost:3006/getPeeps").then((response) => {
            setPeeps(response.data);
        })
    }, []);

    return (
        <div className="col-8 bg-dark border rounded-2">

            {peeps.slice(0).reverse().map(peep => {
                return (
                    <div key={peeps.indexOf(peep)} className="card m-3">
                        <div className="card-header text-white bg-primary">
                            <div className="d-flex justify-content-between">
                                <label>@{peep.author}</label>

                                <label><small>{moment(peep.createdAt).calendar()}</small></label>
                            </div>
                        </div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-4">
                                <p>{peep.title}</p>
                                <footer className="blockquote-footer">{peep.message}</footer>
                            </blockquote>
                        </div>
                    </div>
                );
            })}


        </div>

    );
}

export default Left;