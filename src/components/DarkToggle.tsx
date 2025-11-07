import { useEffect, useState } from 'react';

export default function DarkToggle() {
    const [isDark, setIsDark] = useState(() => {
        // Check if we're in the browser
        if (typeof window === 'undefined') return false;
        // Check current state from DOM (set by inline script)
        return document.documentElement.classList.contains('dark');
    });

    useEffect(() => {
        // Sync with current state on mount
        const isCurrentlyDark = document.documentElement.classList.contains('dark');
        setIsDark(isCurrentlyDark);
    }, []);

    function toggleTheme() {
        const next = !document.documentElement.classList.contains('dark');
        setIsDark(next);
        
        if (next) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }

    return (
        <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200/60 dark:border-zinc-800/60 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
        >
            {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M21.64 13A9 9 0 1 1 11 2.36a7 7 0 1 0 10.64 10.64Z" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.535 6.465-1.414-1.414M7.879 7.879 6.465 6.465m12.07 0-1.414 1.414M7.879 16.121l-1.414 1.414" />
                </svg>
            )}
        </button>
    );
}

