export default function BgStyle({ height }) {
  const selectedHeight = [height || 'h-screen']
  return (
    <div className=" absolute top-0 left-0 right-0 bottom-0 -z-50">
      <div className="mx-auto max-w-[850px]">
        <div className="flex justify-between flex-row">
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index} className={` w-[.5px] md:w-[1px] bg-c-black-grey ${selectedHeight}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
