import React from "react";
import './style.css'

export default function Button ({ name,classname}){
    return (
        <>
    <center>
    <button className={'red' || classname}>
            {"red" }
        </button>
        <br />
        <br />
        <button className={'yellow' || classname}>
            {"yellow"}
        </button><br />
        <br />
        <button className={'green' || classname}>
            {"green"}
        </button><br />
        <br />
        <button className={'aqua' || classname}>
            {"aqua" }
        </button><br />
        <br />
        <button className={'blue' || classname}>
            {"blue" }
        </button><br />
        <br />
        <button className={'pink' || classname}>
            {"pink"}
        </button><br />
        <br />
        <button className={'black' || classname}>
            {"black" }
        </button><br />
        <br />
        <button className={'peru' || classname}>
            {"peru" }
        </button><br />
        <br />
        <button className={'orange' || classname}>
            {"orange" }
        </button><br />
        <br />
        <button className={'indigo' || classname}>
            {"indigo"}
        </button>
    </center>
        </>
    )
}