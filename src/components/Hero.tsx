import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Box, Torus } from '@react-three/drei';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import * as THREE from 'three';

function DigitalParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 1000;

  const particles = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i++) {
    particles[i] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#a78bfa" transparent opacity={0.6} />
    </points>
  );
}

function FloatingTorus() {
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      torusRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      torusRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.3;
    }
  });

  return (
    <Torus ref={torusRef} args={[1, 0.3, 16, 100]} position={[-2, 0, -3]}>
      <meshStandardMaterial color="#06b6d4" wireframe emissive="#06b6d4" emissiveIntensity={0.5} />
    </Torus>
  );
}

function FloatingBox() {
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (boxRef.current) {
      boxRef.current.rotation.x = state.clock.getElapsedTime() * 0.4;
      boxRef.current.rotation.y = state.clock.getElapsedTime() * 0.6;
      boxRef.current.position.y = Math.cos(state.clock.getElapsedTime() * 0.8) * 0.5;
    }
  });

  return (
    <Box ref={boxRef} args={[1, 1, 1]} position={[2, 0, -2]}>
      <meshStandardMaterial color="#ec4899" wireframe emissive="#ec4899" emissiveIntensity={0.5} />
    </Box>
  );
}

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1.2, 100, 200]} scale={1.5}>
      <MeshDistortMaterial
        color="#a78bfa"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.1}
        metalness={0.8}
        emissive="#a78bfa"
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} />
          <pointLight position={[-10, -10, -5]} intensity={1} color="#06b6d4" />
          <pointLight position={[10, 10, 5]} intensity={1} color="#a78bfa" />
          <pointLight position={[0, -10, 0]} intensity={0.5} color="#ec4899" />

          <DigitalParticles />
          <AnimatedSphere />
          <FloatingTorus />
          <FloatingBox />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300 font-medium">Available for work</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Yusup Firmansyah
            </h1>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Odoo Developer | Flutter Developer<span className="text-cyan-400">.</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto">
              Crafting immersive digital experiences with code, design, and a touch of magic.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#projects" className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-bold text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full font-bold text-white border-2 border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 backdrop-blur-sm transition-all duration-300 hover:scale-105">
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full p-1">
          <div className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
