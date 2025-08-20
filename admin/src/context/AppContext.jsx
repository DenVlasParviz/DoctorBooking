import {createContext} from "react";

export const AppContext = createContext();

const currency = '$'

const AppContextProvider = (props) => {
    const calcAge = (dob) => {
        const today = new Date()
        const birthDate = new Date(dob)
    let age = today.getFullYear() - birthDate.getFullYear();
        return age
    }

    const months = Array.from({length: 12}, (_, i) =>


        new Date(0, i).toLocaleString("en", {month: "short"})
    );
    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split('_')
        return dateArray[0] + " " + months[Number(dateArray[1]) - 1] + " " + dateArray[2]
    }

    const value = {calcAge,slotDateFormat,currency};
    return (
        <AppContext.Provider value={value}> {props.children}</AppContext.Provider>
    );
};
export default AppContextProvider;
