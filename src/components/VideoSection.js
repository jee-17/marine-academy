export default function VideoSection() {
  return (
    <div className="relative h-[500px]">
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover"
      >
        <source src="/Foundation day video-1.mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">
          Experience Life at Sea
        </h1>
      </div>
    </div>
  );
}
