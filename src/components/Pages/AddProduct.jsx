import React from "react";
import Sidebar from "../Sidebar";
import Banner from "../Banner";
import { IoMdArrowRoundBack } from "react-icons/io";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const AddProduct = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-2 m-0 p-0">
            <Sidebar />
          </div>
          <div className="col-12 col-md-10 m-0 p-0">
            <Banner />
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 pt-3">
                  <span>
                    <IoMdArrowRoundBack /> Back{" "}
                    <span className="float-right" style={{ fontSize: "13px" }}>
                      <NavLink to={"/"}>Home</NavLink>{" "}
                      <span>
                        <MdKeyboardDoubleArrowRight /> Add Product
                      </span>
                    </span>{" "}
                  </span>
                  <hr></hr>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header" style={{ height: "50px" }}>
                      <h6 className="pt-1">Add Product</h6>
                    </div>
                    <div className="card-body">
                      <form>
                        <div>
                          <h6>Basic Details</h6>
                          <hr />
                          <div className="row">
                            <div className="col-12 row my-4">
                              <p className="col-2">Catagory / Brand :- </p>
                              <select className="col-10 w-100">
                                <option value="" disabled hidden selected>
                                  --Select Catagory--
                                </option>
                                <option value="">Catagory1</option>
                                <option value="">Catagory2</option>
                                <option value="">Catagory3</option>
                                <option value="">Catagory4</option>
                              </select>
                            </div>
                            <div class="col-12 row my-4">
                              <p className="col-2">Product Name :-</p>
                              <input
                                className="col-10"
                                type="text"
                                placeholder="Enter Product Name"
                              />
                            </div>
                            <div class="col-12 row my-4 ">
                              <p className="col-2">Short Description :-</p>
                              <textarea
                                className="col-10"
                                rows="5"
                                type="text"
                                placeholder="Enter Product Name"
                              />
                            </div>
                            <div class="col-12 row my-4">
                              <p className="col-2">Product Feature :-</p>
                              <div className="row">
                                <div className="col-4 mb-3">
                                  {" "}
                                  <input
                                    type="text"
                                    placeholder="Enter First Feature"
                                    className="w-100"
                                  />
                                </div>
                                <div className="col-4 mb-3">
                                  {" "}
                                  <input
                                    type="text"
                                    placeholder="Enter Second Feature"
                                    className="w-100"
                                  />
                                </div>
                                <div className="col-4 mb-3">
                                  {" "}
                                  <input
                                    type="text"
                                    placeholder="Enter Third Feature"
                                    className="w-100"
                                  />
                                </div>
                                <div className="col-4 mb-3">
                                  {" "}
                                  <input
                                    type="text"
                                    placeholder="Enter Forth Feature"
                                    className="w-100"
                                  />
                                </div>
                                <div className="col-4 mb-3">
                                  {" "}
                                  <input
                                    type="text"
                                    placeholder="Enter Fifth Feature"
                                    className="w-100"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h6>Product Pricing</h6>
                          <hr />
                          <div className="row gap-3">
                            <div className="col-6 row my-4">
                              <p className="col-4">M.R.P :- </p>
                              <input
                                className="col-8"
                                type="text"
                                placeholder="Enter M.R.P"
                              />
                            </div>
                            <div className="col-6 row my-4">
                              <p className="col-4">Selling Price :- </p>
                              <input
                                className="col-8"
                                type="text"
                                placeholder="Enter Selling Price"
                              />
                            </div>
                            <div className="col-12 row my-4">
                              <p className="col-2">Special Offer :- </p>
                              <select className="col-10 w-100">
                                <option value="" disabled hidden selected>
                                  --Select Offer--
                                </option>
                                <option value="">Offer1</option>
                                <option value="">Offer2</option>
                                <option value="">Offer3</option>
                                <option value="">Offer4</option>
                              </select>
                            </div>
                            <div className="col-6 row my-4">
                              <p className="col-4">Max Unit Buy :- </p>
                              <input
                                className="col-8"
                                type="text"
                                placeholder="1"
                              />
                            </div>
                            <div className="col-6 row my-4">
                              <p className="col-4">Delivery Charge :- </p>
                              <input
                                className="col-8"
                                type="text"
                               placeholder="0"
                              />
                            </div>

                          </div>
                        </div>
                        <div>
                          <h6>Quantity and Pricing</h6>
                          <hr />
                          <div className="row gap-3">
                            <div className="col-6 row my-4">
                              <p className="col-4">Quantity 1 :- </p>
                              <input
                                className="col-8"
                                type="text"
                                placeholder="Enter Quantity"
                              />
                            </div>
                            <div className="col-6 row my-4">
                              <p className="col-4">Price 1 :- </p>
                              <input
                                className="col-8"
                                type="text"
                                placeholder="Enter Price"
                              />
                            </div>
                            <div className="col-6 row my-4">
                              <p className="col-4">Quantity 2 :- </p>
                              <input
                                className="col-8"
                                type="text"
                                placeholder="Enter Quantity"
                              />
                            </div>
                            <div className="col-6 row my-4">
                              <p className="col-4">Price 2 :- </p>
                              <input
                                className="col-8"
                                type="text"
                                placeholder="Enter Price"
                              />
                            </div>
                            <div className="col-6 row my-4">
                              <p className="col-4">Quantity 3 :- </p>
                              <input
                                className="col-8"
                                type="text"
                                placeholder="Enter Quantity"
                              />
                            </div>
                            <div className="col-6 row my-4">
                              <p className="col-4">Price 3 :- </p>
                              <input
                                className="col-8"
                                type="text"
                                placeholder="Enter Price"
                              />
                            </div>
                            <div className="col-6 row my-4">
                              <p className="col-4">Quantity 4 :- </p>
                              <input
                                className="col-8"
                                type="text"
                                placeholder="Enter Quantity"
                              />
                            </div>
                            <div className="col-6 row my-4">
                              <p className="col-4">Price 4:- </p>
                              <input
                                className="col-8"
                                type="text"
                                placeholder="Enter Price"
                              />
                            </div>
                            <div className="col-6 row my-4">
                              <p className="col-4">Quantity 5 :- </p>
                              <input
                                className="col-8"
                                type="text"
                                placeholder="Enter Quantity"
                              />
                            </div>
                            <div className="col-6 row my-4">
                              <p className="col-4">Price 5 :- </p>
                              <input
                                className="col-8"
                                type="text"
                                placeholder="Enter Price"
                              />
                            </div>
                          
                            

                          </div>
                        </div>
                        <div>
                          <h6>Product Image</h6>
                          <hr />
                          <div className="row gap-3">
                            <div className="col-12 row my-4">
                              <p className="col-2">Product Image1 :- </p>
                              <input
                                className="col-10 border border-2 border-dark p-1"
                                type="file"
                                placeholder="Enter Quantity"
                              />
                            </div>
                            <div className="col-12 row my-4">
                              <p className="col-2">Product Image2 :- </p>
                              <input
                                className="col-10 border border-2 border-dark p-1"
                                type="file"
                                placeholder="Enter Quantity"
                              />
                            </div>
                            <div className="col-12 row my-4">
                              <p className="col-2">Product Image3 :- </p>
                              <input
                                className="col-10 border border-2 border-dark p-1"
                                type="file"
                                placeholder="Enter Quantity"
                              />
                            </div>
                            <div className="col-12 row my-4">
                              <p className="col-2">Product Image4 :- </p>
                              <input
                                className="col-10 border border-2 border-dark p-1"
                                type="file"
                                placeholder="Enter Quantity"
                              />
                            </div>
                            <div className="col-12 row my-4">
                              <p className="col-2">Product Image5 :- </p>
                              <input
                                className="col-10 border border-2 border-dark p-1"
                                type="file"
                                placeholder="Enter Quantity"
                              />
                            </div>
                           
                          </div>
                        </div>
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
  );
};

export default AddProduct;
