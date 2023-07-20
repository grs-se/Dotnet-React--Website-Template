export default function ContactBar() {
	return (
    <div
      className="flex flex-row text-sm text-gray-500 justify-center items-center h-10 bg-brand-white-2 gap-2 border-b"
    >
      <p><span className="font-bold">Email:</span> henry_ricesmith@hotmail.com</p>
       &sdot;
      <p>
        {/*•*/}
        <span className="font-bold">T:</span> 01420 89092 /
        <span className="font-bold"> M:</span>0823492349
      </p>
    </div>
	)
}