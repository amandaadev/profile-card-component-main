function Card({ name, idade, local, numeros }) {
  return (
    <>
      <div className="flex justify-center mt-64 ">
        <div className="w-80 h-80 rounded-2xl pb-4 bg-white  z-10">
          <div className="relative">
            <img
              className="rounded-t-xl"
              src="./images/bg-pattern-card.svg"
              alt=""
            />
          </div>
          <div className="flex justify-center mb-4">
            <img
              className="absolute top-80 border-4 border-white rounded-full"
              src="./images/image-victor.jpg"
              alt="Victor"
            />
          </div>

          <div className="flex justify-center mt-16 mb-2">
            <p className="font-bold text-sm mr-3">{name}</p>
            <p className="font-normal text-slate-400 text-sm">{idade}</p>
          </div>
          <p className="font-medium text-slate-400 text-xs text-center">
            {local}
          </p>
          <div className="border-t border-gray-200 mt-5"></div>
          <div className="mt-4 flex gap-9 justify-center">
            <div className="flex flex-col items-center mr-4">
              <p className="font-bold text-sm">{numeros?.followers ?? "0"}K</p>
              <p className="font-medium text-slate-400 text-xs">Followers</p>
            </div>
            <div className="flex flex-col items-center mr-4">
              <p className="font-bold text-sm">{numeros?.likes ?? "0"}K</p>
              <p className="font-medium text-slate-400 text-xs">Likes</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold text-sm">{numeros?.photos}K</p>
              <p className="font-medium text-slate-400 text-xs">Photos</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
