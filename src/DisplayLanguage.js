import React, { useContext } from "react";
import { Context } from "./LanguageContext";

export function DisplayLanguage() {
    const language = useContext(Context)
    return <h1>{language}</h1>
}
