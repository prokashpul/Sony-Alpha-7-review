import React from "react";
import AboutInfo from "../AboutInfo/AboutInfo";

const About = () => {
  const abouts = [
    { info: "Approximate effective.", id: 1 },
    { info: "Sony test conditions. Still images.", id: 2 },
    {
      info: "Imaging Edge Desktop (Remote/Viewer/Edit) version 3.2 or later is required to view and edit HEIF images.",
      id: 3,
    },
    {
      info: "CIPA standards. Pitch/yaw shake only. Planar T* FE 50mm F1.4 ZA lens. Long exposure NR off. Still-image mode.",
      id: 4,
    },
    { info: "When using a compatible flash unit from Sony.", id: 5 },
    {
      info: "759 AF measurement points for still images. The number of points used varies according to the shooting mode.",
      id: 6,
    },
    {
      info: "Up to 10 fps in continuous “Hi+” mode and up to 8 fps in continuous “Hi” mode. Maximum fps will depend on camera settings. Sony test conditions.",
      id: 7,
    },
    {
      info: "QFHD (3840×2160). 4K 60p (50p) recording available in Super 35mm mode only.",
      id: 8,
    },
    {
      info: "SDXC memory card (V90 or higher) or CFexpress Type A memory card (VPG200 or higher) required.",
      id: 9,
    },
    {
      info: "The Focus Map function cannot be used in the following conditions: When shooting stills, when the Focus Magnifier function is in use, when using digital zoom, during USB streaming, when no lens is mounted, when an A-mount lens is mounted, or when using the SEL16F28. For other lenses, please use the latest firmware.",
      id: 10,
    },
    {
      info: "QFHD (3840×2160). Available formats are 4K 15p (12.5p), Full HD 60p (50p), Full HD 30p (25p), and HD720 30p (25p).",
      id: 11,
    },
    { info: "Imaging Edge Mobile™ version 7.6 or later is required.", id: 12 },
  ];
  console.log(abouts);
  return (
    <div>
      <div className=" h-44 md:h-96 w-full bg-[url('https://cdn.pixabay.com/photo/2022/01/18/16/19/camera-6947414_1280.jpg')] bg-no-repeat bg-cover  relative">
        <div className=" h-44 md:h-96 w-full absolute bg-indigo-700/50 justify-center flex items-center">
          <h2 className="font-black text-3xl md:text-5xl text-white text-center uppercase">
            About{" "}
          </h2>
        </div>
      </div>
      <h2 className="font-bold text-center text-4xl my-10">
        Alpha 7 IV full-frame hybrid camera
      </h2>
      <div className="md:w-[85%] w-[95%] mx-auto my-20">
        <ul>
          {" "}
          {abouts.map((about, index) => (
            <AboutInfo about={about} key={index}></AboutInfo>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
