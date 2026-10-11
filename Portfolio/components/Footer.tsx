export default function Footer() {
  return (
    <footer className="py-12 border-t border-outline-variant/10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">
          © {new Date().getFullYear()} Aanchal Singh — All rights reserved
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/Aaanchalsingh" target="_blank" rel="noopener noreferrer"
             className="font-label text-[10px] tracking-widest text-on-surface-variant hover:text-secondary uppercase transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/aanchallsingh" target="_blank" rel="noopener noreferrer"
             className="font-label text-[10px] tracking-widest text-on-surface-variant hover:text-secondary uppercase transition-colors">
            LinkedIn
          </a>
          <a href="https://leetcode.com/u/Aanchall" target="_blank" rel="noopener noreferrer"
             className="font-label text-[10px] tracking-widest text-on-surface-variant hover:text-secondary uppercase transition-colors">
            LeetCode
          </a>
        </div>
      </div>
    </footer>
  );
}
