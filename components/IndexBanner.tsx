"use client";
import {useState,useRef} from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";

function Cube(props: any) {
    const mesh=useRef();
    const [hovered, setHover] = useState(false);
    const [active,setActive] = useState(false);
    useFrame(() => {
        if(mesh.current) {
            mesh.current.rotation.x += 0.01;
        }
    });
    const { scale } = useSpring({ scale: active ? 1.5 : 1 });
    return (
        <animated.mesh ref={mesh}
          onPointerOver={(event) => setHover(true)}
          onPointerOut={(event) => setHover(false)}
          onClick={(event) => setActive(!active)}
          scale={scale}
        >
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
        </animated.mesh>
    );
}


export default function IndexBanner() {

    return(
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Cube />
        </Canvas>
    );
}