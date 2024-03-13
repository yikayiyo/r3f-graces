import { Html } from "@react-three/drei";
import { HtmlProps } from "@react-three/drei/web/Html";
import { ReactNode } from "react";

type AnnotationProps = HtmlProps & {
  children: ReactNode
}

export default function Annotation({ children, ...props }: AnnotationProps) {
  return (
    <Html
      {...props}
    >
      <div className="annotation text-white bg-gray-600/60 backdrop-blur hover:bg-[#88b2d9]/60 p-2 rounded-md overflow-hidden">
        {children}
      </div>
    </Html>
  )
}