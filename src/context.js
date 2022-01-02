import React, {useContext, useEffect } from "react";

const AnimationContext = React.createContext()

const AnimationProvider = ({children}) => {
    const scrollAnimations = () => {
        const elements = document.querySelectorAll('.animation');
        elements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const viewPortHeight = window.innerHeight - 100;
            if (elementPosition < viewPortHeight) {
                element.classList.add('animate');
            } else {
                element.classList.remove('animate');
            }
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollAnimations)
    }, []);

    return (
        <AnimationContext.Provider value={{
            
        }}>
            {children}
        </AnimationContext.Provider>
    )
}

export const useGlobalContext = () => {
    useContext(AnimationContext)
}

export {AnimationContext, AnimationProvider}