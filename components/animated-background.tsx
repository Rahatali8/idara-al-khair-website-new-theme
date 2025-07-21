"use client"
import { useRef, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Plane } from "@react-three/drei"
import type * as THREE from "three"

function AnimatedPlane() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useFrame((state) => {
    if (!mounted || !meshRef.current) return

    try {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2 - 5
    } catch (error) {
      console.warn("Animated plane error:", error)
    }
  })

  if (!mounted) return null

  return (
    <Plane ref={meshRef} args={[20, 20]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
      <meshBasicMaterial color="#00b4d8" transparent opacity={0.1} wireframe />
    </Plane>
  )
}

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
        <AnimatedPlane />
      </Canvas>
    </div>
  )
}
