import Vector2 from "@util/types/vector2";
import React from "react";

type PageScrollProps = {
    getPosition: () => Vector2
}
export const PageScrollContext = React.createContext({
    getPosition: () => Vector2.zero
} as PageScrollProps);

export const PageScrollProvider = PageScrollContext.Provider;
