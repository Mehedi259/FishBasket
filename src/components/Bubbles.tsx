'use client';

import { useEffect, useState } from 'react';

export default function Bubbles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      <div className="bubble w-8 h-8 left-[10%] animation-delay-0"></div>
      <div className="bubble w-12 h-12 left-[35%] animation-delay-2000"></div>
      <div className="bubble w-6 h-6 left-[65%] animation-delay-4000"></div>
      <div className="bubble w-16 h-16 left-[85%] animation-delay-1000"></div>
    </div>
  );
}
