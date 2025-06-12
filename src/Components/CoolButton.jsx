export default function CoolButton(props) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ömer_Bircan_Şahin-Computer_Engineer-Resume.pdf"; 
    link.download = "Ömer_Bircan_Şahin-Computer_Engineer-Resume.pdf";
    link.click();
  };

  return (
    <div className="flex flex-col mt-[-60px] mb-[30px]">
      <div className="relative bg-yellow-p h-[67px] rounded-md top-[75px] left-[10px]"></div>
      <button
        onClick={() => {
          handleDownload();
        }}
        className="relative z-20 px-[38px] py-[16px] text-[20px] border rounded-md border-dark-brown-p "
      >
        {props.text}
      </button>
    </div>
  );
}
