const ChatSidebarSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4 px-2">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="flex items-start gap-3 p-2 rounded-lg bg-gray-100"
        >
          {/* Avatar skeleton */}
          <div className="w-[56px] h-[56px] rounded-full bg-gray-300" />

          {/* Text content skeleton */}
          <div className="flex justify-between items-center w-full gap-4">
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-300 rounded w-3/4" />
              <div className="h-3 bg-gray-300 rounded w-5/6" />
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="h-3 w-10 bg-gray-300 rounded" />
              <div className="w-4 h-4 rounded-full bg-gray-300" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatSidebarSkeleton;
