import React, {FC}  from "react";

interface LocationProps {
    color?: string,
    size?:number,
}

export const Location: FC<LocationProps> = ({color = '#9D9B98', size}) => {
    return (
        <svg width={size ? size : 14} 
        height={size ? size&&size*1.4 : 20}
         viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" 
        fill={color}/>
        </svg>
    )
 }