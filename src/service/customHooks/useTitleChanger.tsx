import { useEffect } from "react";


export function useTitleChanger(title: string) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}