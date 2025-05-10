type Props = {
    children: React.ReactNode;
    focus: boolean;
    handleTabChange: (tagName: string) => void;
}

export default function SidevarText({ children, focus, handleTabChange }: Props) {
    return (
        <>
            <li onClick={(() => { handleTabChange("text") })} className={`absolute top-0 flex justify-start items-start text-[#62BAA5] transition-transform duration-100 cursor-pointer ${focus ? "z-50 translate-x-0" : "z-30 -translate-x-[10px]"}`}>
                <div className="absolute -left-[1px] top-[140px]">
                    <hgroup className="w-max text-white absolute flex flex-col items-center gap-0 rotate-90 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <h3 className="text-[27px] font-bold">テキスト</h3>
                        <p className="text-[14px] relative -top-[8px]">Paragraph</p>
                    </hgroup>
                    <svg xmlns="http://www.w3.org/2000/svg" width="73" height="262" viewBox="0 0 73 262">
                        <g id="tab" transform="translate(73) rotate(90)">
                            <path id="パス_50" data-name="パス 50" d="M50.937.713c-5.75.853-16.43,4.915-20.437,28.864C24.8,63.63,17.1,72.5,0,72.5H262c-17.1,0-24.8-8.869-30.5-42.923C227.492,5.628,216.813,1.566,211.063.713A10,10,0,0,0,209,.5H53a9.976,9.976,0,0,0-2.063.213" fill="#E86968" fillRule="evenodd" />
                            <path id="パス_51" data-name="パス 51" d="M50.849.22A10.662,10.662,0,0,1,53,0H209a10.59,10.59,0,0,1,2.151.22A18.733,18.733,0,0,1,222.3,6.14c3.979,4.21,7.681,11.317,9.7,23.354,2.849,17.024,6.187,27.648,10.885,34.018a19.347,19.347,0,0,0,8.14,6.61A27.877,27.877,0,0,0,262,72v1a35.5,35.5,0,0,1-8.587-1,22,22,0,0,1-2.785-.958,20.323,20.323,0,0,1-8.555-6.936c-4.852-6.579-8.216-17.416-11.066-34.446-1.993-11.912-5.635-18.81-9.435-22.833a17.736,17.736,0,0,0-10.582-5.62l-.015,0-.014,0A9.6,9.6,0,0,0,209,1H53a9.575,9.575,0,0,0-1.96.2l-.015,0-.015,0a17.725,17.725,0,0,0-10.582,5.62c-3.8,4.021-7.441,10.92-9.435,22.832-2.85,17.03-6.214,27.867-11.066,34.446a20.331,20.331,0,0,1-8.555,6.936A22,22,0,0,1,8.588,72,27.5,27.5,0,0,1,3,73H0V72a27.877,27.877,0,0,0,10.982-1.878,19.353,19.353,0,0,0,8.14-6.61c4.7-6.37,8.036-16.994,10.885-34.018,2.014-12.037,5.716-19.143,9.7-23.353A18.727,18.727,0,0,1,50.849.22" fill="#E86968" />
                        </g>
                    </svg>
                </div>
            </li>
        </>
    );
}