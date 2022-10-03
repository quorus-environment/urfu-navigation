import React from "react";
import {Layer, Rect, Stage} from "react-konva";

export const IritRtf: React.FC = () => {
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Rect width={50} height={50} fill="red" />
            </Layer>
        </Stage>
    )
}
