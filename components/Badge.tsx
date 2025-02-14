'use client';

export function Badge({ text }: { text: string }) {
  return (
    <span className="inline-block bg-gradient-to-r from-yellow-600 to-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
      {text}
    </span>
  );
} 