"use client"

import { useRef, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Sphere, Box, Octahedron, Cone } from "@react-three/drei"
import type * as THREE from "three"

function EducationalShape({
  position,
  color,
  shape = "sphere",
}: {
  position: [number, number, number]
  color: string
  shape?: "sphere" | "box" | "octahedron" | "cone"
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useFrame((state) => {
    if (mounted && meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25
    }
  })

  if (!mounted) return null

  const ShapeComponent = shape === "box" ? Box : shape === "octahedron" ? Octahedron : shape === "cone" ? Cone : Sphere

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
      <ShapeComponent ref={meshRef} args={[0.4]} position={position}>
        <meshStandardMaterial color={color} transparent opacity={0.3} metalness={0.7} roughness={0.3} />
      </ShapeComponent>
    </Float>
  )
}

export default function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />

        <EducationalShape position={[-3, 2, -2]} color="#00b4d8" shape="sphere" />
        <EducationalShape position={[3, -1, -1]} color="#00b4d8" shape="box" />
        <EducationalShape position={[-2, -2, -3]} color="#00b4d8" shape="octahedron" />
        <EducationalShape position={[2, 3, -2]} color="#00b4d8" shape="cone" />
        <EducationalShape position={[0, -3, -1]} color="#00b4d8" shape="sphere" />
        <EducationalShape position={[-4, 0, -2]} color="#00b4d8" shape="box" />
        <EducationalShape position={[0, 0, 0]} color="#00b4d8" shape="sphere" />
        
      </Canvas>
    </div>
  )
}
