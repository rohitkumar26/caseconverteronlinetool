import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import sentenceCase from "sentencecase.js";
import { camelCase, constantCase, pascalCase, pathCase, headerCase, noCase, dotCase, paramCase, snakeCase, titleCase, swapCase } from "text-case";
function Convertstr() {
    const [mystr, setmystr] = useState("");
    const [capitalize, setcapitalize] = useState(false);
    const [copied, setcopied] = useState(false);
    const [bold, setbold] = useState(false);
    const [mitalic, setitalic] = useState(false);
    const [mystrike, setmystrike] = useState(false);
    const [underline, setunderline] = useState(false);

    const textareahandler = (e) => {
        setmystr(e.target.value);
    }
    const uppercase = (e) => {
        setmystr(mystr.toUpperCase())
        setcapitalize(false)
    }
    const lowercase = () => {
        setmystr(mystr.toLowerCase())
        setcapitalize(false)
    }
    const capitalized = () => {
        setmystr(mystr.toLowerCase())
        setcapitalize(true)
    }
    const alternatingcase = () => {
        let newstr = "";
        for (let i = 0; i < mystr.length; i++) {
            if (i % 2 !== 0)
                newstr += mystr[i].toUpperCase()
            else
                newstr += mystr[i].toLowerCase();
        }
        setmystr(newstr);
        setcapitalize(false)
    }
    const joinby = () => {
        setmystr(paramCase(mystr));
    }
    const onCopy = () => {
        setcopied(true);
    }
    const sentencecase = () => {
        setmystr(sentenceCase(mystr));
    }
    const titlecase = () => {
        setmystr(titleCase(mystr));
    }
    const camelcase = () => {
        setmystr(camelCase(mystr));
    }
    const snakecase = () => {
        setmystr(snakeCase(mystr));
    }
    const boldtext = () => {
        if (bold)
            setbold(false);
        else
            setbold(true);
    }
    const italictext = () => {
        if (mitalic)
            setitalic(false);
        else
            setitalic(true);
    }
    const strike = () => {
        if (mystrike)
            setmystrike(false)
        else
            setmystrike(true)
    }
    const myunderline = () => {
        if (underline)
            setunderline(false)
        else
            setunderline(true)
    }
    const reverse = () => {
        let newstr = mystr.split("").reverse().join("");
        setmystr(newstr);
    }
    return (
        <div>
            <textarea value={mystr}
                className={`mytxtarea  ${capitalize ? "capitalize" : ""} ${bold ? "mybold" : " "} ${mitalic ? "myitalics" : ""} ${mystrike ? "mystrike" : ""} ${underline ? "underline" : ""}`}
                onChange={textareahandler} name="stroutput" id="" cols="30" rows="10" placeholder="Type your text or paste here">
            </textarea><br />
            <button className="button" onClick={sentencecase}>Sentence case</button>
            <button className="button" onClick={titlecase}>Title Case</button>
            <button className="button" onClick={uppercase}>UPPER CASE</button>
            <button className="button" onClick={lowercase}>lower case</button>
            <button className="button" onClick={capitalized}>Capitalize Case</button>
            <button className="button" onClick={alternatingcase}>aLtErNaTiNg CaSe</button>
            <button className="button" onClick={joinby}>param-case</button>
            <button className="button" onClick={camelcase}>camelCase</button>
            <button className="button" onClick={snakecase}>snake_case</button>
            <button className="button" onClick={() => setmystr(dotCase(mystr))}>dot.case</button>
            <button className="button" onClick={() => setmystr(swapCase(mystr))}>sWaP cAsE</button>
            <button className="button" onClick={() => setmystr(noCase(mystr))}>no case</button>
            <button className="button" onClick={() => setmystr(pathCase(mystr))}>path/case</button>
            <button className="button" onClick={() => setmystr(headerCase(mystr))}>Header-Case</button>
            <button className="button" onClick={() => setmystr(pascalCase(mystr))}>PascalCase</button>
            <button className="button" onClick={() => setmystr(constantCase(mystr))}>CONSTANT_CASE</button>
            <button className="button" onClick={boldtext}><b>Bold text</b></button>
            <button className="button" onClick={italictext}><i>italic text</i></button>
            <button className="button" onClick={strike}> <strike>strike through</strike></button>
            <button className="button" onClick={myunderline}> <u>underline</u></button>
            <button className="button" onClick={reverse}> Reverse</button>
            <CopyToClipboard text={mystr} onCopy={onCopy}>
                <button className="button">Copy To Clipboard</button>
            </CopyToClipboard>
            <button className="button" onClick={() => setmystr(" ")}>Clear</button>
        </div>
    );
}
export default Convertstr
