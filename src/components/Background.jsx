import React from 'react'

const Background = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden bg-base">
    <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_40%,transparent_100%)] opacity-60" />
    <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-accent/30 rounded-full blur-3xl animate-blob mix-blend-screen" />
    <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-accent-cyan/20 rounded-full blur-3xl animate-blob-slow mix-blend-screen" />
    <div className="absolute bottom-0 left-1/4 w-[26rem] h-[26rem] bg-accent-fuchsia/20 rounded-full blur-3xl animate-blob mix-blend-screen" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base/40 to-base" />
  </div>
)

export default Background
