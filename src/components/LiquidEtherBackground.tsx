import React from 'react';
import LiquidEther from './LiquidEther';

interface LiquidEtherBackgroundProps {
  className?: string;
  style?: React.CSSProperties;
  colors?: string[];
  mouseForce?: number;
  cursorSize?: number;
  isViscous?: boolean;
  viscous?: number;
  iterationsViscous?: number;
  iterationsPoisson?: number;
  resolution?: number;
  isBounce?: boolean;
  autoDemo?: boolean;
  autoSpeed?: number;
  autoIntensity?: number;
  takeoverDuration?: number;
  autoResumeDelay?: number;
  autoRampDuration?: number;
}

const LiquidEtherBackground: React.FC<LiquidEtherBackgroundProps> = ({
  className = '',
  style = {},
  colors = ['#5227FF', '#FF9FFC', '#B19EEF'],
  mouseForce = 20,
  cursorSize = 100,
  isViscous = false,
  viscous = 30,
  iterationsViscous = 32,
  iterationsPoisson = 32,
  resolution = 0.5,
  isBounce = false,
  autoDemo = true,
  autoSpeed = 0.5,
  autoIntensity = 2.2,
  takeoverDuration = 0.25,
  autoResumeDelay = 3000,
  autoRampDuration = 0.6,
  ...props
}) => {
  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    pointerEvents: 'none',
    ...style,
  };

  return (
    <div 
      className={`liquid-ether-background ${className}`} 
      style={containerStyle}
      {...props}
    >
      <LiquidEther
        colors={colors}
        mouseForce={mouseForce}
        cursorSize={cursorSize}
        isViscous={isViscous}
        viscous={viscous}
        iterationsViscous={iterationsViscous}
        iterationsPoisson={iterationsPoisson}
        resolution={resolution}
        isBounce={isBounce}
        autoDemo={autoDemo}
        autoSpeed={autoSpeed}
        autoIntensity={autoIntensity}
        takeoverDuration={takeoverDuration}
        autoResumeDelay={autoResumeDelay}
        autoRampDuration={autoRampDuration}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default LiquidEtherBackground;
