import{a as s,b as n,c as i}from"./index-681711bc.js";const l=r=>s(r)||n(r)||r===!1?"This field is required":!!String(r).trim().length||"This field is required",c=r=>{if(i(r))return!0;const t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(r)?r.every(e=>t.test(String(e)))||"The Email field must be a valid email":t.test(String(r))||"The Email field must be a valid email"},u=r=>/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/.test(r)||"Field must contain at least one uppercase, lowercase, special character and digit with min 8 chars",f=(r,t)=>r===t||"The Confirm Password field confirmation does not match",h=(r,t,e)=>{const a=Number(r);return Number(t)<=a&&Number(e)>=a||`Enter number between ${t} and ${e}`},m=r=>i(r)?!0:Array.isArray(r)?r.every(t=>/^-?[0-9]+$/.test(String(t)))||"This field must be an integer":/^-?[0-9]+$/.test(String(r))||"This field must be an integer",o=(r,t)=>{if(i(r))return!0;let e=t;return typeof e=="string"&&(e=new RegExp(e)),Array.isArray(r)?r.every(a=>o(a,e)):e.test(String(r))||"The Regex field format is invalid"},g=r=>i(r)?!0:/^[A-Z]*$/i.test(String(r))||"The Alpha field may only contain alphabetic characters",p=r=>i(r)?!0:/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/.test(String(r))||"URL is invalid",A=(r,t)=>i(r)?!0:String(r).length===t||`The Min Character field must be at least ${t} characters`,b=r=>{if(i(r))return!0;const t=String(r);return/^[0-9A-Z_-]*$/i.test(t)||"All Character are not valid"};export{o as a,h as b,g as c,f as d,c as e,b as f,m as i,A as l,u as p,l as r,p as u};
