import { useRef, useState } from "react";
import { useRouter } from "next/router";

import Hamburger from "hamburger-react";
export default () => {
  const router = useRouter();
  const hRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  // const data = [["หน้าหลัก", "คะแนนของฉัน", "ข้อมูลคณะต่างๆ", "ระบบจัดอันดับ"], ['', '', '', '']];
  const data = [
    { 'name': 'หน้าหลัก', 'path': '/', },
    { 'name': 'คะแนนของฉัน', 'path': '/save_points', },
    { 'name': 'ข้อมูลคณะต่างๆ', 'path': '/view_faculties', },
    { 'name': 'ระบบจัดอันดับ', 'path': '', },
  ]
  return (
    <>
      <div className="fixed w-full z-50" ref={hRef}>
        <div className="bg-base flex justify-between">
          <div
            onClick={() => router.push('/')}
            className="cursor-pointer p-2 mt-1 font-bold text-lg text-white w-20"
          >
            Casculator
          </div>
          <div className="p-2 pt-4 hidden md:flex">
            {data.map((t, i) => (
              <div key={i} onClick={() => router.push(t.path)} className="ml-12 text-sm text-white cursor-pointer">
                {t.name}
              </div>
            ))}
          </div>

          <div className="p-2 pt-3 hidden md:flex text-sm  w-20">USER V</div>
          <div className="flex md:hidden">
            <Hamburger
              toggled={isOpen}
              color="white"
              size={18}
              toggle={setOpen}
            />
          </div>
        </div>
        {isOpen && (
          <div className="bg-base text-sm text-white">
            {data.map((t, i) => (
              <div
                key={i}
                onClick={() => router.push(t.path)}
                className="cursor-pointer border-t border-base-light p-3"
              >
                {t.name}
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        className="mb-5"
        style={{ height: hRef.current?.offsetHeight ?? 48 }}
      >
        null
      </div>
    </>
  );
};
