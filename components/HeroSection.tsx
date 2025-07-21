"use client"

// import { useRef, useMemo, useEffect, useState } from "react"
// import { Canvas, useFrame } from "@react-three/fiber"
// import {OrbitControls,Sphere,MeshDistortMaterial,Environment,Float,Stars,Box,Octahedron,} from "@react-three/drei"
// import type * as THREE from "three"
import Hero3D from "./hero-3d"

// function EducationalSphere() {
//   const meshRef = useRef<THREE.Mesh>(null)
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   useFrame((state) => {
//     if (mounted && meshRef.current) {
//       meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
//       meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
//       meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
//     }
//   })

//   if (!mounted) return null

//   return (
//     <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.2}>
//       <Sphere ref={meshRef} args={[2, 64, 64]} scale={1.2} position={[-1, 0, 0]}>
//         <MeshDistortMaterial
//           color="#00b4d8"
//           attach="material"
//           distort={0.3}
//           speed={1.5}
//           roughness={0.1}
//           metalness={0.8}
//           transparent
//           opacity={0.7}
//         />
//       </Sphere>
//     </Float>
//   )
// }

// function FloatingBooks() {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   const books = useMemo(() => {
//     return Array.from({ length: 8 }, (_, i) => ({
//       position: [(Math.random() - 0.8) * 12, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 15] as [
//         number,
//         number,
//         number,
//       ],
//       rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI] as [number, number, number],
//       scale: Math.random() * 0.3 + 0.2,
//       speed: Math.random() * 2 + 1,
//       color: Math.random() > 0.5 ? "#03045e" : "#00b4d8",
//     }))
//   }, [])

//   if (!mounted) return null

//   return (
//     <>
//       {books.map((book, index) => (
//         <Float key={index} speed={book.speed} rotationIntensity={0.3} floatIntensity={0.8}>
//           <Box args={[0.8, 1.2, 0.15]} position={book.position} rotation={book.rotation} scale={book.scale}>
//             <meshStandardMaterial color={book.color} roughness={0.3} metalness={0.1} />
//           </Box>
//         </Float>
//       ))}
//     </>
//   )
// }

// function GeometricShapes() {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   const shapes = useMemo(() => {
//     return Array.from({ length: 6 }, (_, i) => ({
//       position: [(Math.random() - 0.8) * 15, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 20] as [
//         number,
//         number,
//         number,
//       ],
//       scale: Math.random() * 0.4 + 0.3,
//       speed: Math.random() * 1.5 + 0.5,
//       shape: Math.random() > 0.5 ? "octahedron" : "sphere",
//       color: Math.random() > 0.5 ? "#03045e" : "#00b4d8",
//     }))
//   }, [])

//   if (!mounted) return null

//   return (
//     <>
//       {shapes.map((shape, index) => (
//         <Float key={index} speed={shape.speed} rotationIntensity={0.4} floatIntensity={1}>
//           {shape.shape === "octahedron" ? (
//             <Octahedron args={[0.8]} position={shape.position} scale={shape.scale}>
//               <meshStandardMaterial color={shape.color} transparent opacity={0.8} metalness={0.6} roughness={0.2} />
//             </Octahedron>
//           ) : (
//             <Sphere args={[0.6, 32, 32]} position={shape.position} scale={shape.scale}>
//               <meshStandardMaterial color={shape.color} transparent opacity={0.7} metalness={0.5} roughness={0.3} />
//             </Sphere>
//           )}
//         </Float>
//       ))}
//     </>
//   )
// }

// function FloatingParticles() {
//   const particlesRef = useRef<THREE.Points>(null)
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   useFrame((state) => {
//     if (mounted && particlesRef.current) {
//       particlesRef.current.rotation.y = state.clock.elapsedTime * 0.01
//       particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05
//     }
//   })

//   const particleCount = 150
//   const positions = useMemo(() => {
//     const pos = new Float32Array(particleCount * 3)
//     for (let i = 0; i < particleCount; i++) {
//       pos[i * 3] = (Math.random() - 0.5) * 25
//       pos[i * 3 + 1] = (Math.random() - 0.5) * 20
//       pos[i * 3 + 2] = (Math.random() - 0.5) * 25
//     }
//     return pos
//   }, [])

//   if (!mounted) return null

//   return (
//     <points ref={particlesRef}>
//       <bufferGeometry>
//       <bufferAttribute attach="attributes-position" args={[positions, 3]} />      </bufferGeometry>
//       <pointsMaterial color="#00b4d8" size={0.02} transparent opacity={0.6} />
//     </points>
//   )
// }

// function EducationalRings() {
//   const ring1Ref = useRef<THREE.Mesh>(null)
//   const ring2Ref = useRef<THREE.Mesh>(null)
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   useFrame((state) => {
//     if (!mounted) return

//     if (ring1Ref.current) {
//       ring1Ref.current.rotation.x = state.clock.elapsedTime * 0.3
//       ring1Ref.current.rotation.y = state.clock.elapsedTime * 0.2
//     }
//     if (ring2Ref.current) {
//       ring2Ref.current.rotation.x = -state.clock.elapsedTime * 0.2
//       ring2Ref.current.rotation.z = state.clock.elapsedTime * 0.15
//     }
//   })

//   if (!mounted) return null

//   return (
//     <>
//       <mesh ref={ring1Ref} position={[-1, 0, 0]}>
//         <torusGeometry args={[4, 0.08, 16, 100]} />
//         <meshBasicMaterial color="#03045e" transparent opacity={0.3} />
//       </mesh>
//       <mesh ref={ring2Ref} position={[-1, 0, 0]}>
//         <torusGeometry args={[6, 0.05, 16, 100]} />
//         <meshBasicMaterial color="#00b4d8" transparent opacity={0.2} />
//       </mesh>
//     </>
//   )
// }

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] overflow-hidden flex items-start pt-6">
      <Hero3D />
    </section>
  )
}
