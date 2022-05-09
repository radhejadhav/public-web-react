import React from 'react'
import { Button } from 'reactstrap'

export default function DashboardComponent(props) {

    return (
        <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="font-weight-bold">{props.user.displayName}</span><span className="text-black-50">{props.user.email}</span><span> </span></div>
                </div>
                <div className="col border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Hello {props.user.displayName}</h4>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6"><label className="labels">First Name</label><h6>{props.user.firstName}</h6></div>
                            <div className="col-md-6"><label className="labels">Last Name</label><h6>{props.user.lastName}</h6></div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12"><label className="labels">Mobile Number</label><h6>{props.user.mobile}</h6></div>
                            <div className="col-md-12"><label className="labels">Email ID</label><h6>{props.user.email}</h6></div>
                            <div className="col-md-12"><label className="labels">Company</label><h6>{props.user.company}</h6></div>
                        </div>
                        <div className="mt-5 text-center"><Button className="btn btn-primary profile-button" type="button">Update Profile</Button></div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
