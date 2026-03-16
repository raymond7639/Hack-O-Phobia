import React, { useState, useEffect } from 'react';

// Higher order component to inject a touch ripple effect (Android M3 style)
const withRipple = (WrappedComponent) => {
  return function RippleComponent({ className = '', children, ...props }) {
    const [ripples, setRipples] = useState([]);

    const addRipple = (e) => {
      const container = e.currentTarget;
      const rect = container.getBoundingClientRect();
      const diameter = Math.max(container.clientWidth, container.clientHeight);
      const radius = diameter / 2;

      const ripple = {
        x: e.clientX - rect.left - radius,
        y: e.clientY - rect.top - radius,
        diameter,
        id: new Date().getTime(),
      };

      setRipples((prev) => [...prev, ripple]);
    };

    // Clean up ripples to avoid memory leaks
    useEffect(() => {
      if (ripples.length > 0) {
        const timer = setTimeout(() => {
          setRipples([]);
        }, 600); // Wait for CSS animation duration
        return () => clearTimeout(timer);
      }
    }, [ripples]);

    return (
      <WrappedComponent
        className={`ripple-surface ${className}`}
        onPointerDown={addRipple}
        {...props}
      >
        {children}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="ripple"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.diameter,
              height: ripple.diameter,
            }}
          />
        ))}
      </WrappedComponent>
    );
  };
};

export default withRipple;
