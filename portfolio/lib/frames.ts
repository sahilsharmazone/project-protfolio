// Generated based on the file pattern observed in /public/sequence
// Pattern: frame_XXX_delay-0.067s.webp (default) or 0.066s (every 3rd frame starting at index 1)

export const frames = Array.from({ length: 120 }, (_, i) => {
    const delay = i % 3 === 1 ? '0.066' : '0.067';
    return `/sequence/frame_${i.toString().padStart(3, '0')}_delay-${delay}s.webp`;
});
