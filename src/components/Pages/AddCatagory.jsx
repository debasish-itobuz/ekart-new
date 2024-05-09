import React from "react";
import Sidebar from "../Sidebar";
import Banner from "../Banner";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const AddCatagory = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-12 col-md-2 m-0 p-0">
                        <Sidebar />
                    </div>
                    <div className='col-12 col-md-10 m-0 p-0'>
                        <Banner />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 pt-3">
                                    <span><IoMdArrowRoundBack /> Back <span className="float-right" style={{ fontSize: '13px' }}><NavLink to={'/'}>Home</NavLink> <span><MdKeyboardDoubleArrowRight /> Add Category</span></span> </span><hr></hr>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-header" style={{ height: '50px' }}>
                                            <h6 className="pt-1">Add Category Details</h6>
                                        </div>
                                        <div className="card-body">
                                            <form className="row">
                                                <label class=" col-6">Name
                                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
                                                </label>
                                                <label class=" col-6" for="exampleFormControlFile1">Example file input
                                                    <input type="file" class="form-control" id="exampleFormControlFile1" />
                                                </label>
                                                <button type="submit" class="btn btn-primary" >Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCatagory