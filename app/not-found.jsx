export default function NotFound() {
  return (
    <div className="grid w-full h-full place-items-center">
      <p className="flex items-center gap-4">
        <span className="text-[1.3em] font-medium">404</span>
        <svg width="2" height="50" className="hidden lg:block">
          <line x1="0" y1="0" x2="0" y2="50" style={{ stroke: '#0a0a0a', strokeWidth: '1px' }} />
        </svg>
        <span className="">Not found</span>
      </p>
    </div>
  )
}