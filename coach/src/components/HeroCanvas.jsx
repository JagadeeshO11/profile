import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, Float, Stars, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

// ── Floating gold orb ──────────────────────────────────────────────────────
function GoldOrb() {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.12
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.18
  })

  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[1.35, 128, 128]}>
        <MeshDistortMaterial
          color="#C9A84C"
          emissive="#7A5A1A"
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.15}
          distort={0.38}
          speed={1.8}
          transparent
          opacity={0.88}
        />
      </Sphere>
    </Float>
  )
}

// ── Orbiting ring ──────────────────────────────────────────────────────────
function Ring({ radius = 2.2, speed = 0.3, tilt = 0.4 }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.z = clock.getElapsedTime() * speed
  })
  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.012, 16, 120]} />
      <meshStandardMaterial color="#C9A84C" metalness={1} roughness={0.1} transparent opacity={0.35} />
    </mesh>
  )
}

// ── Particle field ─────────────────────────────────────────────────────────
function Particles({ count = 180 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 10
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [count])

  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.y = clock.getElapsedTime() * 0.04
    ref.current.rotation.x = clock.getElapsedTime() * 0.02
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.022} color="#E2C97E" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

// ── Scene ──────────────────────────────────────────────────────────────────
function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={2.5} color="#E2C97E" />
      <pointLight position={[-4, -2, -4]} intensity={1.2} color="#6B3FA0" />
      <spotLight position={[0, 6, 2]} intensity={1.8} color="#C9A84C" angle={0.4} penumbra={0.8} />

      <Stars radius={18} depth={50} count={800} factor={2} saturation={0} fade speed={0.6} />
      <Particles />
      <Ring radius={2.1} speed={0.25} tilt={0.5} />
      <Ring radius={2.6} speed={-0.18} tilt={-0.3} />
      <Ring radius={3.1} speed={0.12} tilt={0.8} />
      <GoldOrb />
    </>
  )
}

// ── Exported canvas ────────────────────────────────────────────────────────
export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
      style={{ width: '100%', height: '100%' }}
    >
      <Scene />
    </Canvas>
  )
}
