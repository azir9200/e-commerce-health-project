import { useAnimationFrame } from "framer-motion";
import { useRef } from "react";
import { Dumbbell, Heart, Target, Zap, Trophy, Users } from "lucide-react";

export default function FitnessCube() {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    if (!ref.current) return;

    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div className="container">
      <div className="cube" ref={ref}>
        <div className="side front">
          <div className="face-content">
            <Dumbbell className="w-12 h-12 text-blue-500" />
            <span className="text-sm font-semibold text-gray-800 mt-2">
              Strength
            </span>
          </div>
        </div>
        <div className="side right">
          <div className="face-content">
            <Heart className="w-12 h-12 text-red-500" />
            <span className="text-sm font-semibold text-gray-800 mt-2">
              Cardio
            </span>
          </div>
        </div>
        <div className="side back">
          <div className="face-content">
            <Target className="w-12 h-12 text-green-500" />
            <span className="text-sm font-semibold text-gray-800 mt-2">
              Precision
            </span>
          </div>
        </div>
        <div className="side left">
          <div className="face-content">
            <Zap className="w-12 h-12 text-yellow-500" />
            <span className="text-sm font-semibold text-gray-800 mt-2">
              Energy
            </span>
          </div>
        </div>
        <div className="side top">
          <div className="face-content">
            <Trophy className="w-12 h-12 text-purple-500" />
            <span className="text-sm font-semibold text-gray-800 mt-2">
              Achievement
            </span>
          </div>
        </div>
        <div className="side bottom">
          <div className="face-content">
            <Users className="w-12 h-12 text-indigo-500" />
            <span className="text-sm font-semibold text-gray-800 mt-2">
              Community
            </span>
          </div>
        </div>
      </div>
      <StyleSheet />
    </div>
  );
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
  return (
    <style>{`
        .container {
            perspective: 800px;
            width: 200px;
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .cube {
            width: 200px;
            height: 200px;
            position: relative;
            transform-style: preserve-3d;
        }

        .side {
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.8) 100%);
            border: 1px solid rgba(148,163,184,0.2);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(10px);
        }

        .face-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
        }

        .front {
            transform: rotateY(0deg) translateZ(100px);
        }
        .right {
            transform: rotateY(90deg) translateZ(100px);
        }
        .back {
            transform: rotateY(180deg) translateZ(100px);
        }
        .left {
            transform: rotateY(-90deg) translateZ(100px);
        }
        .top {
            transform: rotateX(90deg) translateZ(100px);
        }
        .bottom {
            transform: rotateX(-90deg) translateZ(100px);
        }

    `}</style>
  );
}
