import React, { Component } from "react";
import axios from "axios";

test(){
    axios.get(`/api/test`).then(response => {
        console.log(response.data);
    });
}